import React, { useState } from "react";


function NewListingForm({ addListing }) {
  const initialFormData = {
    title: "",
    description: "",
    location: "",
    type: "house",
    pricePerNight: "",
    image: null
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit() {
    addListing(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  return (
    <div className="NewListingForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Add a New Listing</h2>
        <div className="card">
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
                <input
                  type="textarea"
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
                  onChange={handleChange}>

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
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="images">Images</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  value={formData.images}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-secondary" onClick={handleSubmit}>
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


