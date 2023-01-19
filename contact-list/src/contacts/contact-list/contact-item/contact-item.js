import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";

const GetCaregoryStyle = (category) => {
  let categoryStyle = "lab lab-success field";
  switch (category) {
    case "Work":
      categoryStyle = "lab lab-success field";
      break;
    case "Family":
      categoryStyle = "lab lab-primary field";
      break;
    case "Private":
      categoryStyle = "lab lab-danger field";
      break;
    default:
      categoryStyle = "lab lab-warning field";
      break;
  }

  return categoryStyle;
};

const ContactItem = ({
  name,
  phone,
  email,
  category,
  avatar,
  gender,
  onDelete,
  onSelectContact,
}) => {
  const URL = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

  const categoryStyle = GetCaregoryStyle(category);

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img src={URL} alt="image" className="avatar" /> {name}
        </div>
        <div className={categoryStyle}>{category}</div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
      <div className="field icons-wrapper">
        <Link to={"/edit-contact"}>
          {" "}
          <FontAwesomeIcon
            icon={faEdit}
            size="2x"
            onClick={onSelectContact}
            className="icons edit"
          />
        </Link>

        <FontAwesomeIcon
          onClick={onDelete}
          icon={faTrashAlt}
          size="2x"
          className="icons delete"
        />
      </div>
    </div>
  );
};

export default ContactItem;