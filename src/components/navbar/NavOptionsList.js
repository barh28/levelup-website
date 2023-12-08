import React from "react";
import { OptionsList } from "./OptionsList";
import "./NavOptionsList.css";

export const NavOptionslist = ({ className , type}) => {

  return (
    <div className={`nav-optionslist ${className}`}>
      {type!=="client" && <>
        <div className="frame">
        <OptionsList className="OptionsList-instance" text="קנית/מכירת נכסים" />
      </div>
      <div className="frame">
        <OptionsList className="OptionsList-instance" text="שיפוץ והשבחת נכסים" />
      </div>
      <div className="frame">
        <OptionsList className="OptionsList-instance" text="שכירויות" />
      </div>
      <div className="frame">
        <OptionsList className="OptionsList-instance" text="השקעות נדל״ן" />
      </div>
      </>}
      {type==="client" && <>
        <div className="frame">
        <OptionsList className="OptionsList-instance" text="התחברות" />
        </div>
        <div className="frame">
        <OptionsList className="OptionsList-instance" text="הרשמה" />
        </div>
      </>}
    </div>
  );
};
