import React from "react"; 
import { Link, useLocation, useParams } from "react-router-dom"; // Import the useLocation and useParams hooks
import user from "../images/user2.png";

const ContactDetail = (props) => {
  const location = useLocation(); // Use the useLocation hook to get the location object
  const { id } = useParams(); // Use the useParams hook to get the ID from the URL parameters
  const contact = props.contacts.find((contact) => contact.id === id); // Find the specific contact using the ID

// If contact is not found or not available in the state, show a loading message
if (!contact) {
  return <div>Loading...</div>;
}

const { name, email } = contact;
console.log("Contact:", contact);

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
       <Link to="/">
        <button className="ui button blue center">Back to Contact List</button>
       </Link>
      </div>
    </div>
  );
};

export default ContactDetail;




  

 
