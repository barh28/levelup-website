import React from "react";
import { OptionsList } from "./OptionsList";
import { Link } from "react-router-dom";
import "./NavOptionsList.css";

export const NavOptionslist = ({ className , type}) => {

  return (
    <div className={`nav-optionslist ${className}`}>
      {type!=="client" && <>
        <div className="frame">
          <Link to="/buy">
            <OptionsList className="OptionsList-instance" text="קנית/מכירת נכסים" />
          </Link>
      </div>
      <div className="frame">
          <Link to="/renovation">
            <OptionsList className="OptionsList-instance" text="שיפוץ והשבחת נכסים" />
          </Link>
      </div>
      <div className="frame">
          <Link to="rents">
            <OptionsList className="OptionsList-instance" text="שכירויות" />
          </Link>
      </div>
      <div className="frame">
          <Link to="invests">
            <OptionsList className="OptionsList-instance" text="השקעות נדל״ן" />
          </Link>
      </div>
      </>}
      {type==="client" && <>
        <div className="frame">
          <Link to="/login">
            <OptionsList className="OptionsList-instance" text="התחברות" />
          </Link>
        </div>
        <div className="frame">
          <Link to="register">
            <OptionsList className="OptionsList-instance" text="הרשמה" />
          </Link>
        </div>
      </>}
    </div>
  );
};
