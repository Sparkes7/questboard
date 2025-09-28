import { useState } from "react";

export default function AddPlayerForm() {
  const [formData, setFormData] = useState({
    name: "",
    level: null,
    race: "",
    class: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(formData);

    try {
      fetch(`${import.meta.env.VITE_SERVER_BASE}/add-player`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
    } catch (error) {
      console.error("failed posting new quest", error);
    }
  }
  return (
    <section>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <legend>Add New Player</legend>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input name="name" onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="level">Level: </label>
            <input
              name="level"
              onChange={handleChange}
              type="number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="race">Race: </label>
            <input name="race" onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="class">Class: </label>
            <input name="class" onChange={handleChange} type="text" required />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}
