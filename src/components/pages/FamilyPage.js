import React from "react";
import "./FamilyPage.css"
import MainFrame from "../scrollFrames/MainFrame";
import ProfileBubble from "../family/ProfileBubble";

function FamilyPage(){
    return (
        <div className="family-page-frame">
            <MainFrame/>
            <ProfileBubble photo="/Images/family/daniel.png" direction="left" text="דניאל לנדר"/>
            <ProfileBubble photo="/Images/family/zohar.png" direction="right" text="זוהר טישלר"/>
            <ProfileBubble photo="/Images/family/milena.png" direction="left" text="מילנה"/>
            <ProfileBubble photo="/Images/family/danielp.png" direction="right" text="דניאל פיניין"/>
            <ProfileBubble photo="/Images/family/palina.png" direction="left" text="פלינה"/>
            <ProfileBubble photo="/Images/family/yahuda.png" direction="right" text="יהודה"/>
            <ProfileBubble photo="/Images/family/maor.png" direction="left" text="מאור"/>
            <ProfileBubble photo="/Images/family/david.png" direction="right" text="דוד"/>
            <ProfileBubble photo="/Images/family/yacov.png" direction="left" text="יעקב"/>
            <ProfileBubble photo="/Images/family/pinchas.png" direction="right" text="פינחס"/>
        </div>
    )
}

export default FamilyPage;