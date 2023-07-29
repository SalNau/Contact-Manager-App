import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"; // Import Routes(version 6) instead of Switch(is react router dom version 5)
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteConfirmation from "./DeleteConfirmation"; // Import the DeleteConfirmation component

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

// Updated route for delete confirmation page
const DeleteConfirmationPage = () => {
  const params = useParams();
  const contactToDelete = contacts.find((contact) => contact.id === params.id);

  return (
    <DeleteConfirmation
      contact={contactToDelete}
      onDelete={removeContactHandler}
    />
  );
};

    return (
      <div className="ui container">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} 
              />
             }
            />
            <Route
              path="/contact/:id"
              element={<ContactDetail contacts={contacts} 
              />
              }
            />
           <Route
            path="/delete/:id"
            element={<DeleteConfirmationPage // Use the new DeleteConfirmationPage component
          />
            }
          />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;
  



