import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listMentor_oneQuery } from "../api/query";

// Particular assigned query details for mentor
function Query_mentorView() {
  const params = useParams();
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getQuery();
  }, []);

  async function getQuery() {
    try {
      let queryData = await listMentor_oneQuery(params.mId, params.qId);
      //   console.log(queryData.data);
      setQuery(queryData.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div class="container-fluid">
      {query.map((item) => {
        return (
          <div class="card">
            <div class="card-header">
              QN: {item._id} <br />
              {item.topic.category} - {item.details.query_title}{" "}
            </div>
            <div class="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <h5 class="card-title">Created At:</h5>
                    <p class="card-text">{item.create_date}</p>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <h5 class="card-title">Assigned to:</h5>
                    You
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Query Details:</h5>
                    <p class="card-text">{item.details.query_description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Preferred Time:</h5>
                    <p class="card-text">
                      {item.time.from} - {item.time.till}
                    </p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Preferred Language:</h5>
                    <p class="card-text">{item.topic.voice_language}</p>
                  </div>
                </div>
                <hr />
                <div className="row mt-1">
                  <div className="col-lg-6">
                    <h5>Student Details</h5>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Student Id:</h5>
                    <p class="card-text">{item.sId}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Name:</h5>
                    <p class="card-text">{item.student_data.name}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Course:</h5>
                    <p class="card-text">{item.student_data.course}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Email:</h5>
                    <p class="card-text">{item.student_data.email}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Mobile No:</h5>
                    <p class="card-text">{item.student_data.phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row mt-1">
                  <div className="col-lg-6">
                    <h5>Solution:</h5>
                  </div>
                </div>
                {item.solution && item.solution.medium ? (
                  <div className="row mt-1">
                    <div className="col-lg-6 mt-2">
                      <h5 class="card-title">Resolved Medium:</h5>
                      <p class="card-text">{item.solution.medium}</p>
                    </div>
                    <div className="col-lg-6 mt-2">
                      <h5 class="card-title">Resolved Details:</h5>
                      <p class="card-text">{item.solution.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="row mt-1">
                    <div className="col-lg-6 mt-2">Yet to be Resolved</div>
                  </div>
                )}
              </div>
            </div>
            <div class="card-footer ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h5 class="card-title">Resolved At:</h5>
                    {item.close_date ? (
                      <p class="card-text">{item.close_date}</p>
                    ) : (
                      <p class="card-text">-</p>
                    )}
                  </div>
                  <div className="col-lg-6 text-right">
                    <Link
                      to={`/mentor_portal/all_query/mentor/list/${params.mId}`}
                      class="btn btn-primary mr-2"
                    >
                      {"< "} Query List
                    </Link>
                    <Link
                      to={`/mentor_portal/resolve_query/${params.mId}/${item._id}`}
                      class={`btn btn-primary ${
                        item.close_date ? "disabled" : ""
                      }`}
                    >
                      To Resolve{" >"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Query_mentorView;
