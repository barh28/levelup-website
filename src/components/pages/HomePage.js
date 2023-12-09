import React from "react";
import "./HomePage.css"
import MainFrame from "../scrollFrames/MainFrame";
import WhoFrame from "../scrollFrames/WhoFrame";
import TalkFrame from "../scrollFrames/TalkFrame";
import ClientTellFrame from "../scrollFrames/ClientsTellFrame";

function HomePage(){
    return (
        <>
        <div className="main">
            <MainFrame/>
            <WhoFrame/>
            <ClientTellFrame/>
            <TalkFrame/>
        </div>
        </>
    )
}

export default HomePage;