import React from "react";
import "./HomePage.css"
import MainFrame from "../scrollFrames/MainFrame";
import WhoFrame from "../scrollFrames/WhoFrame";

function HomePage(){
    return (
        <>
        <div className="main">
            <MainFrame/>
            <WhoFrame/>
        </div>
        </>
    )
}

export default HomePage;