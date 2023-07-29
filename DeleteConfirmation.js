import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DeleteConfirmation = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (contact) {
      onDelete(contact.id);
      navigate("/");
    } else {
      console.error("Contact object is undefined.");
    }
  };

  return (
    <div className="main">
      <h2>Delete Confirmation</h2>
      <p>Are you sure you want to delete this contact?</p>
      <div>
        <button onClick={() => navigate("/")}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;

  
