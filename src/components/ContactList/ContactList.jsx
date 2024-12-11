import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {filterContacts.map((item) => {
        return (
          <li key={item.id} className={s.item}>
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
