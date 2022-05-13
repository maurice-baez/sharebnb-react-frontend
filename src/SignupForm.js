import React, { useState } from "react";
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
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState(new FormData());
  const [formErrors, setFormErrors] = useState([]);

  // {
  //   username: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   image: []
  // }

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      files.foreach(formData.append(filename, file ));
      await signup(formData);
      navigate("/")
    } catch (err) {
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    //evt.target.files []
    if (formData.image){
      const uploadFiles = evt.target.files;
      setFiles(files => [...files, uploadFiles])
    } else{
      const { name, value } = evt.target;
      setFormData(data => ({ ...data, [name]: value }));
    }
    console.log(files);
    console.log(formData);
  }

  return (
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Sign Up</h2>
        <div className="card">
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
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
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
              <div className="mb-3">
                <label htmlFor="images">Profile Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  multiple
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-outline-secondary" onClick={handleSubmit}>
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