import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listStudents } from "../api/students";

// List of all students data for Admin
function Students_list() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  async function getStudents() {
    try {
      let studentsData = await listStudents();
      setStudents(studentsData.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Student's Details</h1>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <Link
            to={"/admin_portal/students/add"}
            type="button"
            class="btn btn-outline-primary"
          >
            Add Student
          </Link>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Email</th>
                  <th>Mobile No.</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.course}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students_list;
