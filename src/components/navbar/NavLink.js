// NavLink.js
import React from "react";
import "./NavLink.css";
import DropdownArrowIcon from "../../icons/DropdownArrow";
import { NavOptionslist } from "./NavOptionsList";
import { Link } from 'react-router-dom';

export const NavLink = ({ text, textEn, dropdown , path, setDropDownOpen, dropDownOpen, type}) => {
  // const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = (e) => {
    if (dropdown) {
      e.preventDefault(); // Prevent navigation if it's a dropdown
      setDropDownOpen(!dropDownOpen);
    }
  };

  const linkContent = (
    <>
      {dropdown && <DropdownArrowIcon />}
      {textEn && <div className="text-wrapper english">{textEn + " "}</div>}
      <div className="text-wrapper">{text}</div>
    </>
  );

  return (
    <div className={`nav-link ${dropDownOpen ? 'active' : ''}`}>
      {dropdown ? (
        // If it's a dropdown, use a div with an onClick handler
        <div onClick={toggleDropdown}>{linkContent}</div>
      ) : (
        // If it's not a dropdown, use the Link component
        <Link to={path}>{linkContent}</Link>
      )}
      {dropdown && dropDownOpen && <NavOptionslist/>}
    </div>
  );
};
