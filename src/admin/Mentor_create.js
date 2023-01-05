import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { addMentor } from "../api/mentors";

//Mentor creation by Admin
function Mentor_create() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "*Required";
      }
      if (values.name && (values.name.length < 3 || values.name.length > 15)) {
        error.name = "Username must be 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "Please enter the email address";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Invalid email address";
      }

      if (!values.phone) {
        error.phone = "*Required";
      }
      if (values.phone && values.phone.toString().length !== 10) {
        error.phone = "Please enter valid phone number";
      }

      if (!values.password) {
        error.password = "*Required";
      }
      if (
        values.password &&
        (values.password.length < 8 || values.password.length > 15)
      ) {
        error.password = "Password Must between 8 to 15 characters";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        let mentorData = await addMentor(values);
        alert(mentorData.data.message);
        navigate("/admin_portal/mentors/list");
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div class="container-fluid">
      <h4>Add Mentor</h4>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-row mt-5">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              class={`form-control ${formik.errors.name ? "error-box" : ""} ${
                formik.touched.name && !formik.errors.name ? "success-box" : ""
              }`}
              id="inputEmail4"
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mobile No.</label>
            <input
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="number"
              class={`form-control ${formik.errors.phone ? "error-box" : ""} ${
                formik.touched.phone && !formik.errors.phone
                  ? "success-box"
                  : ""
              }`}
              id="inputPassword4"
            />
            {formik.errors.phone ? (
              <span style={{ color: "red" }}>{formik.errors.phone}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              class={`form-control ${formik.errors.email ? "error-box" : ""} ${
                formik.touched.email && !formik.errors.email
                  ? "success-box"
                  : ""
              }`}
              id="inputEmail4"
            />
            {formik.errors.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              class={`form-control ${
                formik.errors.password ? "error-box" : ""
              } ${
                formik.touched.password && !formik.errors.password
                  ? "success-box"
                  : ""
              }`}
              id="inputPassword4"
            />
            {formik.errors.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : null}
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Mentor_create;
