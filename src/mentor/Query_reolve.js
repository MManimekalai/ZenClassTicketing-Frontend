import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resolve_mentor } from "../api/query";

// Query Resolved by Mentor
function Query_reolve() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      solution: {
        medium: "",
        description: "",
      },
    },
    validate: (values) => {
      let error = {};
      if (values.solution) {
        if (!values.solution.medium) {
          error.solution = "*Required to fill all Datas";
        }
        if (!values.solution.description) {
          error.solution = "*Required to fill all Datas";
        }
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let resolve = await resolve_mentor(params.mId, params.qId, values);
        alert("Query Resolved Successfully!");
        navigate(
          `/mentor_portal/one_query/mentor/list/${params.mId}/${params.qId}`
        );
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <h4>Query Resolve</h4>
      {formik.errors.solution ? (
        <span style={{ color: "red" }}>{formik.errors.solution}</span>
      ) : null}
      <div className="row mt-5">
        <div className="col-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Medium:</label>
              <select
                name="solution.medium"
                onChange={formik.handleChange}
                value={formik.values.solution.medium}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Choose...</option>
                <option>Phone Call</option>
                <option>G-Meet</option>
                <option>Zoom Meet</option>
                <option>Email</option>
              </select>
              {/* <label for="formGroupExampleInput">Medium:</label>
              <input
                name="solution.medium"
                onChange={formik.handleChange}
                value={formik.values.solution.medium}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              /> */}
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Resolved Details:</label>
              <input
                name="solution.description"
                onChange={formik.handleChange}
                value={formik.values.solution.description}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Resolve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Query_reolve;
