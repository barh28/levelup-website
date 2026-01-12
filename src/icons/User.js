import React from 'react';
import { NavOptionslist } from "../components/navbar/NavOptionsList";

function UserIcon({dropDown, setDropDown}){

    const toggleMenu = () => {
        setDropDown(!dropDown);
    };
    
    return(
        <>
        <div className={`user ${dropDown? 'active-user' : ''} pl-[10px]`}>
        <svg className="icon menu" onClick={toggleMenu} width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="&#240;&#159;&#166;&#134; icon &#34;User&#34;">
            <path id="Vector" d="M11.5 13C14.8817 13 17.6224 10.2021 17.6224 6.75C17.6224 3.29785 14.8817 0.5 11.5 0.5C8.11829 0.5 5.37754 3.29785 5.37754 6.75C5.37754 10.2021 8.11829 13 11.5 13ZM15.7857 14.5625H14.9869C13.9251 15.0605 12.7436 15.3438 11.5 15.3438C10.2564 15.3438 9.07971 15.0605 8.01307 14.5625H7.21428C3.66517 14.5625 0.785706 17.502 0.785706 21.125V23.1562C0.785706 24.4502 1.81409 25.5 3.08162 25.5H19.9184C21.1859 25.5 22.2143 24.4502 22.2143 23.1562V21.125C22.2143 17.502 19.3348 14.5625 15.7857 14.5625Z"/>
            </g>
        </svg>
        {dropDown && <NavOptionslist type="client"/>}
        </div>
        </>
    )
}

export default UserIcon;