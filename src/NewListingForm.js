import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewListingForm.css";

function NewListingForm({ addListing }) {
  const initialFormData = {
    title: "",
    description: "",
    location: "",
    type: "house",
    price_per_night: "",
  };
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await addListing(formData, files);
    navigate("/listings");
  }

  function handleChange(evt) {
    if (evt.target.files) {
      const uploadFiles = evt.target.files;
      setFiles([...uploadFiles]);
    } else {
      const { name, value } = evt.target;
      setFormData((data) => ({ ...data, [name]: value }));
    }
  }

  return (
    <div className="NewListingForm">
      <div className="container card__container mt-3">
        <h2 className="mb-3">Add a New Listing</h2>
        <div className="card newListing__card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows="5"
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Type of space</label>
                <select
                  name="type"
                  className="form-control"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="tent">Tent</option>
                  <option value="hammock">Hammock</option>
                  <option value="pool">Pool</option>
                  <option value="treehouse">Treehouse</option>
                  <option value="backyard">Backyard</option>
                  <option value="castle">Castle</option>
                  <option value="igloo">Igloo</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Price per night</label>
                <input
                  name="price_per_night"
                  className="form-control"
                  value={formData.price_per_night}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="images">Images</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  multiple
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-outline-secondary newLisitng__btn"
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

export default NewListingForm;
