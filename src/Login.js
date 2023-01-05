import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api/login";
import { config } from "./config";
import img1 from "./img/zen.png";

// Common Login form for all
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.email) {
        error.email = "*Enter Registered Email Id";
      }
      if (!values.password) {
        error.password = "*Required";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let loginCred = await login(values);

        // Loginn to ADMIN
        if (loginCred.data.role === "ADMIN") {
          localStorage.setItem(`${config.storage_key}`, loginCred.data.token);
          navigate("/admin_portal/mentors/list");
        }

        // Login to STUDENT
        if (loginCred.data.role === "STUDENT") {
          localStorage.setItem(`${config.storage_key}`, loginCred.data.token);
          navigate(`/student_portal/all_query/list/${loginCred.data.uId}`);
        }

        // Login to MENTOR
        if (loginCred.data.role === "MENTOR") {
          localStorage.setItem(`${config.storage_key}`, loginCred.data.token);
          navigate(`/mentor_portal/all_query/mentor/list/${loginCred.data.uId}`);
        }
      } catch (error) {
        // console.log(error);
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div class="bg-secondary bg-gradient">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4 ">
                          <img src={img1} alt="" /> Login
                        </h1>
                      </div>
                      <form class="user" onSubmit={formik.handleSubmit}>
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <span style={{ color: "red" }}>
                              {formik.errors.email}
                            </span>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <span style={{ color: "red" }}>
                              {formik.errors.password}
                            </span>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <input
                          type={"submit"}
                          value={"Login"}
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        />                         
                       
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
