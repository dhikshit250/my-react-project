const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

// User Signup
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if username or email already exists
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Username or Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert user with default profile pic & bio
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password, profile_pic, bio) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, email, profile_pic, bio",
      [username, email, hashedPassword, "default.png", "This is my bio!"]
    );

    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userResult.rows.length === 0) return res.status(401).json({ error: "User not found!" });

    const user = userResult.rows[0];

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password!" });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    // Send user details along with token
    res.json({
      message: "Login successful!",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile_pic: user.profile_pic,
        bio: user.bio,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    const userResult = await pool.query("SELECT username, email, profile_pic, bio FROM users WHERE id = $1", [userId]);

    if (userResult.rows.length === 0) return res.status(404).json({ error: "User not found" });

    res.json(userResult.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Profile Picture (Fixes File Path Issues)
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Unique filename
  },
});
const upload = multer({ 
  storage, 
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extName = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    
    if (extName && mimeType) {
      return cb(null, true);
    } else {
      return cb(new Error("Only JPG, JPEG, and PNG files are allowed!"));
    }
  }
});

exports.uploadProfilePic = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    const filePath = req.file.filename; // Get uploaded file name
    await pool.query("UPDATE users SET profile_pic = $1 WHERE id = $2", [filePath, userId]);

    res.json({ message: "Profile picture updated!", profile_pic: filePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Username and Bio
exports.updateProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    const { username, bio } = req.body;
    
    // Check if new username is taken
    const usernameCheck = await pool.query("SELECT * FROM users WHERE username = $1 AND id != $2", [username, userId]);
    if (usernameCheck.rows.length > 0) {
      return res.status(400).json({ error: "Username already taken" });
    }

    await pool.query("UPDATE users SET username = $1, bio = $2 WHERE id = $3", [username, bio, userId]);

    res.json({ message: "Profile updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
