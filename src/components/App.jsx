import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import initialContacts from "../initialContacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedLS = JSON.parse(window.localStorage.getItem("contacts"));

    if (savedLS !== null) {
      return savedLS;
    }

    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    const finalNewContact = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => {
      return [...prevContacts, finalNewContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchValue={search} onSearch={setSearch} />
      <ContactList filterContacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
