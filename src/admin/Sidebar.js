import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/zen.png";

// Side bar
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

      <li class="nav-item">
        <Link
          to={"/admin_portal/mentors/list"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span>Mentors</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to={"/admin_portal/students/list"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span>Students</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to={"/admin_portal/query/all_list"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span>Query Support</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />
    </ul>
  );
}

export default Sidebar;
