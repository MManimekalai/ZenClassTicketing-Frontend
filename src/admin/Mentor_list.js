import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listMentors } from "../api/mentors";

// All Mentors list for Admin
function Mentor_list() {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getMentors();
  }, []);

  async function getMentors() {
    try {
      setLoading(true);
      let mentorsData = await listMentors();
      setMentors(mentorsData.data);
      setLoading(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Mentor's Details</h1>
      {isLoading ? (
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <Link
              to={"/admin_portal/mentors/add"}
              type="button"
              class="btn btn-outline-primary"
            >
              Add Mentor
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
                    <th>Mentor Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                  </tr>
                </thead>
                <tbody>
                  {mentors.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
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
      )}
    </div>
  );
}

export default Mentor_list;
