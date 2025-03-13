const express = require("express");
const { signup, login, getUserProfile, uploadProfilePic, updateProfile } = require("../controllers/authController");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "./uploads/" });

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);

// Profile Routes
router.get("/profile", getUserProfile);
router.post("/upload-profile-pic", upload.single("profile_pic"), uploadProfilePic);
router.put("/update-profile", updateProfile);

module.exports = router;
