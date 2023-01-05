import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../img/zen.png";

// Sidebar for student
function Sidebar() {
  const params = useParams();
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
          to={`/student_portal/all_query/list/${params.sId}`}
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
