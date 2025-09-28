import { useState } from "react";
import { useParams } from "react-router";

export default function DeleteQuest() {
  const { questid } = useParams();
  const [deleteText, setDeleteText] = useState("Confirm Delete");

  function Delete() {
    fetch(`http://localhost:8080/deletequest/${questid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`quest ${questid} deleted`);
  }
  return (
    <>
      <h3>Delete Quest?</h3>
      <div>
        <strong>Are you sure? Clicking this button is permanent!</strong>
        <p className="warning">There is no going back!</p>
      </div>
      <button
        onClick={(e) => {
          e.target.disabled = true;
          setDeleteText("DELETED");
          Delete();
        }}
        className="delete-btn"
      >
        {deleteText}
      </button>
    </>
  );
}
