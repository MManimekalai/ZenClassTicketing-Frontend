import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listStudent_allQuery } from "../api/query";

// History of All query of a student
function QueryStudent_list() {
  const params = useParams();
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getQuery();
  }, []);

  async function getQuery() {
    try {
      let queryData = await listStudent_allQuery(params.sId);
      setQuery(queryData.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Queries Details</h1>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <Link
            to={`/student_portal/create_query/${params.sId}`}
            type="button"
            class="btn btn-outline-primary"
          >
            Create Query
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
                  <th>Query Id</th>
                  <th>Topic</th>
                  <th>Create @</th>
                  <th>Assigned to</th>
                  <th>Closed @</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {query.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.topic.category}</td>
                      <td>{item.create_date}</td>
                      {item.assigned_mentor ? (
                        <td>{item.assigned_mentor.name}</td>
                      ) : (
                        <td>Not assigned</td>
                      )}
                      {item.close_date ? (
                        <td>{item.close_date}</td>
                      ) : (
                        <td>-</td>
                      )}

                      <td>
                        <Link to={`/student_portal/view_query/list/${params.sId}/${item._id}`} type="button" class="btn btn-secondary">
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

export default QueryStudent_list;
