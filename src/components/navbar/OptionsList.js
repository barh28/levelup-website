import React from "react";
import "./OptionsList.css";

export const OptionsList = ({ text }) => {
  return (
    <div className={`OptionsList`}>
      <div className="text-wrapper-list">{text}</div>
    </div>
  );
};
