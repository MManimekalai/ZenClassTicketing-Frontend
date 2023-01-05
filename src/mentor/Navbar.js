import React from "react";
import { useNavigate } from "react-router-dom";

// Navbar
function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  }
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h3>Mentor Portal</h3>
      <ul class="navbar-nav ml-auto">
        <h5 className="username align-right">Mentor</h5>
        <div class="topbar-divider d-none d-sm-block"></div>
        <button onClick={handleLogout} type="button" class="btn btn-secondary">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
