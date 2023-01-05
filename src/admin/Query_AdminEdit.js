import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assign_mentor } from "../api/query";

// Assign mentor for particular Query by Admin
function Query_AdminEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      assigned_mentor: {
        mId: "",
        name: "",
      },
    },
    validate: (values) => {
      let error = {};
      if (values.assigned_mentor) {
        if (!values.assigned_mentor.mId) {
          error.assigned_mentor = "*Required to fill all Datas";
        }
        if (!values.assigned_mentor.name) {
          error.assigned_mentor = "*Required to fill all Datas";
        }
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let assign = await assign_mentor(params.qId, values);
        alert("Mentor Assigned Successfully!");
        navigate(`/admin_portal/query/one_list/${params.qId}`);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <h4>Assign Mentor</h4>
      {formik.errors.assigned_mentor ? (
        <span style={{ color: "red" }}>{formik.errors.assigned_mentor}</span>
      ) : null}
      <div className="row mt-5">
        <div className="col-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <div class="form-group">
              <label for="formGroupExampleInput">Mentor Id:</label>
              <input
                name="assigned_mentor.mId"
                onChange={formik.handleChange}
                value={formik.values.assigned_mentor.mId.trim()}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Mentor Name:</label>
              <input
                name="assigned_mentor.name"
                onChange={formik.handleChange}
                value={formik.values.assigned_mentor.name}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Assign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Query_AdminEdit;
