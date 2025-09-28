import { useState } from "react";

export default function AddQuestForm() {
  const [formData, setFormData] = useState({
    name: "",
    task: "",
    exp: null,
    reward: "",
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
      fetch(`${import.meta.env.VITE_SERVER_BASE}/add-quest`, {
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
      <h2>Add Quest</h2>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <legend>Add New Quest</legend>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input name="name" onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="task">Task: </label>
            <textarea
              name="task"
              onChange={handleChange}
              type="text"
              cols={50}
              rows={4}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exp">Experience on Completion: </label>
            <input name="exp" onChange={handleChange} type="number" required />
          </div>
          <div className="form-group">
            <label htmlFor="reward">Item Reward: </label>
            <input name="reward" onChange={handleChange} type="text" required />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}
