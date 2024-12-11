import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  return (
    <ul className={s.list}>
      {filterContacts.map((item) => {
        return (
          <li key={item.id} className={s.item}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
