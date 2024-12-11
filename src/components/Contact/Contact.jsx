import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapFlex}>
        <div className={s.wrapIcon}>
          <IoPerson />
          <p className={s.titleName}>{name}</p>
        </div>
        <div className={s.wrapIcon}>
          <FaPhone />
          <p className={s.phone}>{number}</p>
        </div>
      </div>
      <button type="button" className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;