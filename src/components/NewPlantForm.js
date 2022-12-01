import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(newPlant => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
