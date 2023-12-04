import React from "react";
import "./Button.css"

function Button({text, className}){
    return (
        <button className={`button ${className? className: ""}`}>
            <div className="text-wrapper">{text}</div>
        </button>
    )
}

export default Button;