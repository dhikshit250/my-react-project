import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi"; // Import pencil icon
import "../Styles/profilec.css";

function Profile() {
  const [user, setUser] = useState({ username: "", email: "", profile_pic: "", bio: "" });
  const [editing, setEditing] = useState({ username: false, bio: false });
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setNewBio] = useState("");
  const navigate = useNavigate();

  // Fetch user details when the component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://b-backend-i75l.onrender.com/api/auth/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setUser(data);
        setNewUsername(data.username);
        setNewBio(data.bio || "");
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  // Handle profile picture upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("profile_pic", file);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://b-backend-i75l.onrender.com/api/auth/upload-profile-pic", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      setUser((prev) => ({ ...prev, profile_pic: data.profile_pic }));
    } catch (error) {
      console.error(error);
    }
  };

  // Handle username & bio update
  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://b-backend-i75l.onrender.com/api/auth/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: newUsername, bio: newBio }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      setUser((prev) => ({ ...prev, username: newUsername, bio: newBio }));
      setEditing({ username: false, bio: false }); // Exit edit mode
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        {/* Profile Picture & Edit Option */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={user.profile_pic ? `https://b-backend-i75l.onrender.com/uploads/${user.profile_pic}` : "https://i.imgur.com/KvEuBiI.png"}
            alt="Profile"
            style={{ width: "150px", borderRadius: "50%" }}
          />
          {/* Pencil Icon for Profile Picture Upload */}
          <label htmlFor="profile-upload" style={{ position: "absolute", bottom: "10px", right: "10px", cursor: "pointer" }}>
            <FiEdit3 size={20} />
          </label>
          <input id="profile-upload" type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileChange} />
        </div>

        {/* Editable Username */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {editing.username ? (
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              style={{ fontSize: "1.5rem", textAlign: "center" }}
            />
          ) : (
            <h1>{user.username}</h1>
          )}
          <FiEdit3 size={20} style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => setEditing({ ...editing, username: true })} />
        </div>
      </header>

      {/* About Me Section */}
      <section id="bio">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>About Me</h2>
          <FiEdit3 size={20} style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => setEditing({ ...editing, bio: true })} />
        </div>
        {editing.bio ? (
          <textarea
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            rows="4"
            style={{ width: "100%", padding: "10px" }}
          />
        ) : (
          <p>{user.bio || "This is my bio!"}</p>
        )}
      </section>

      {/* Show "Save" button only if editing */}
      {editing.username || editing.bio ? (
        <button onClick={handleProfileUpdate} style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>
          Save
        </button>
      ) : null}

      <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
