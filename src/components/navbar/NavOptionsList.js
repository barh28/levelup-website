import React from "react";
import { OptionsList } from "./OptionsList";
import "./NavOptionsList.css";

export const NavOptionslist = ({ className }) => {
  return (
    <div className={`nav-optionslist ${className}`}>
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
    </div>
  );
};
