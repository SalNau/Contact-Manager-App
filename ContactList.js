import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

  const ContactList = (props) => {
    const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook

  const deleteConactHandler = (id) => {
    navigate(`/delete/${id}`); // Navigate to the delete confirmation page with the contact ID
  };
  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div class="main">
      <h2> Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
     </h2>
  <div className="ui celled list">{renderContactList}</div>
  </div>
  );
};

export default ContactList;



