import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createQuery } from "../api/query";

// Query creation by Student
function Query_create() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      topic: {
        category: "",
        voice_language: "",
      },
      details: {
        query_title: "",
        query_description: "",
      },
      time: {
        from: "",
        till: "",
      },
    },
    validate: (values) => {
      let error = {};
      if (values.topic) {
        if (!values.topic.category) {
          error.topic = "*Enter all fields in Topic";
        }
      }
      if (values.topic) {
        if (!values.topic.voice_language) {
          error.topic = "*Enter all fields in Topic";
        }
      }

      if (values.details) {
        if (!values.details.query_title) {
          error.details = "*Enter all fields in Query Details";
        }
      }
      if (values.details) {
        if (!values.details.query_description) {
          error.details = "*Enter all fields in Query Details";
        }
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let queryCreate = await createQuery(params.sId, values);
        alert(queryCreate.data.message);
        navigate(`/student_portal/all_query/list/${params.sId}`);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div class="container-fluid">
      <h3>Create Query</h3>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div class="form-row mt-4">
          <h5>Topic</h5>
          {formik.errors.topic ? (
            <span style={{ color: "red" }}>{formik.errors.topic}</span>
          ) : null}
        </div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="exampleFormControlSelect1">Category:</label>
            <select
              name="topic.category"
              onChange={formik.handleChange}
              value={formik.values.topic.category}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Choose...</option>
              <option>HTML-CSS-JS</option>
              <option>React.js</option>
              <option>Node.js</option>
              <option>MongoDB</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="exampleFormControlSelect1">Preferred language:</label>
            <select
              name="topic.voice_language"
              onChange={formik.handleChange}
              value={formik.values.topic.voice_language}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Choose...</option>
              <option>Tamil</option>
              <option>Hindi</option>
              <option>Kannada</option>
              <option>English</option>
            </select>
          </div>
        </div>
        <div class="form-row mt-4">
          <h5>Query Details</h5>
          {formik.errors.details ? (
            <span style={{ color: "red" }}>{formik.errors.details}</span>
          ) : null}
        </div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Query Title:</label>
            <input
              name="details.query_title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details.query_title}
              type="text"
              class="form-control"
              id="inputEmail4"
            />
          </div>
        </div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="exampleFormControlTextarea1">
              Describe Your Query:
            </label>
            <textarea
              name="details.query_description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details.query_description}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="form-row mt-4">
          <h5>Preferred Time (We are available between 09.00AM - 07.00PM)</h5>
        </div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="appt">From</label>
            <input
              name="time.from"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time.from}
              type="time"
              id="appt"
              min="09:00"
              max="15:00"
              required
            />
            <label for="appt">&nbsp;Till</label>
            <input
              name="time.till"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time.till}
              type="time"
              id="appt"
              min="11:00"
              max="19:00"
              required
            />
          </div>
        </div>
        <div class="form-row mt-2">
          <button type="submit" class="btn btn-primary">
            Create Query
          </button>
        </div>
      </form>
    </div>
  );
}

export default Query_create;
