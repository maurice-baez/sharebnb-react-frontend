import React, { useState } from "react";
import Alert from "./Alert";
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  // const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls signup func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      console.log("ERR=", err);
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    //evt.target.files []
    // if (evt.target.files) {
    //   const uploadFiles = evt.target.files;
    //   setFiles(uploadFiles[0]);
    // } else {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
    // }
  }

  return (
    <div className="SignupForm">
      <div className="container card__container mt-3">
        <h2 className="mb-3">Sign Up</h2>
        <div className="card signup__card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  name="first_name"
                  className="form-control"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  name="last_name"
                  className="form-control"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="images">Profile Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  multiple
                  onChange={handleChange}
                />
              </div> */}

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}
              <div className="d-grid">
                <button
                  className="btn btn-outline-secondary signup__btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
