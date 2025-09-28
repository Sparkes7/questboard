import { useState } from "react";
import { useParams } from "react-router";

export default function DeleteCharacter() {
  const { playerid } = useParams();
  const [deleteText, setDeleteText] = useState("Confirm Delete");

  function Delete() {
    fetch(`${import.meta.env.VITE_SERVER_BASE}/deleteplayer/${playerid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`player ${playerid} deleted`);
  }
  return (
    <>
      <h3>Delete Character?</h3>
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
