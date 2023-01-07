import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Nav bar
function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("un"));
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h3>Admin Portal</h3>
      <ul class="navbar-nav ml-auto">
        <h5 className="username align-right">{username}</h5>
        <div class="topbar-divider d-none d-sm-block"></div>
        <button onClick={handleLogout} type="button" class="btn btn-secondary">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
