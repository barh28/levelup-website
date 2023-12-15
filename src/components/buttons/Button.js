import React from "react";
import { Link } from 'react-router-dom';
import "./Button.css"

function Button({text, className, path}){
    return (
        <button className={`button ${className? className: ""}`}>
            <Link to={path}>
                <div className="text-wrapper">{text}</div>
            </Link>
        </button>
    )
}

export default Button;