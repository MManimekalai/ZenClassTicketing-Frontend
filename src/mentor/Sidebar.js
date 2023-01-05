import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/zen.png";

// Sidebar
function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon ">
          <img src={img1} className="img-logo" alt="logo" />
        </div>
        <div class="sidebar-brand-text mx-3">Query</div>
      </a>

      <hr class="sidebar-divider my-0" />
    </ul>
  );
}

export default Sidebar;
