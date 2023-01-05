import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// Student Portal
function Student_portal() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Outlet/>
          </div>
          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; JagadeesG Website 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Student_portal;
