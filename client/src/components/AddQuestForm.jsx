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
    <>
      <h1>Add Quest</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Quest</legend>
          <div>
            <label htmlFor="name">Name: </label>
            <input name="name" onChange={handleChange} type="text" />
          </div>
          <div>
            <label htmlFor="task">Task: </label>
            <input name="task" onChange={handleChange} type="text" />
          </div>
          <div>
            <label htmlFor="exp">Experience on Completion: </label>
            <input name="exp" onChange={handleChange} type="number" />
          </div>
          <div>
            <label htmlFor="reward">Item Reward: </label>
            <input name="reward" onChange={handleChange} type="text" />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
