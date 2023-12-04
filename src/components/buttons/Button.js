import React from "react";
import "./Button.css"

function Button({text}){
    return (
        <button className="button">
            <div className="text-wrapper">{text}</div>
        </button>
    )
}

export default Button;