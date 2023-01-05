import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listMentor_allQuery } from "../api/query";

// List of all query of the mentor
function Query_mentorlist() {
  const params = useParams();
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getQuery();
  }, []);

  async function getQuery() {
    try {
      let queryData = await listMentor_allQuery(params.mId);
      setQuery(queryData.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Queries Details</h1>
      <div class="card shadow mb-4">
        <div class="card-header py-3"></div>
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
                  <th>Query Id</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Query Category</th>
                  <th>Create @</th>
                  <th>Resolved & Closed @</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {query.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.student_data.name}</td>
                      <td>{item.student_data.course}</td>
                      <td>{item.topic.category}</td>
                      <td>{item.create_date}</td>
                      {item.close_date ? (
                        <td>{item.close_date}</td>
                      ) : (
                        <td>-</td>
                      )}

                      <td>
                        <Link
                          to={`/mentor_portal/one_query/mentor/list/${
                            item.assigned_mentor ? item.assigned_mentor.mId : ""
                          }/${item._id}`}
                          type="button"
                          class="btn btn-secondary"
                        >
                          View
                        </Link>
                      </td>
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

export default Query_mentorlist;
