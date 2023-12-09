import React from "react";
import "./FamilyPage.css"
import ProfileBubble from "../family/ProfileBubble";
import FamilyFrame from "../scrollFrames/FamilyFrame";

function FamilyPage(){
    return (
        <div className="family-page-frame">
            <FamilyFrame/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="left" name="דניאל לנדר" text="מנכ״ל ויועץ נדל״ן ב-LevelUp"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="right" name="זוהר טישלר"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="left" name="מילנה"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="right" name="דניאל פיניין"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="left" name="פלינה"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="right" name="יהודה"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="left" name="מאור"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="right" name="דוד"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="left" name="יעקב"/>
            <ProfileBubble photo="/Images/family/daniel.jpeg" direction="right" name="פינחס"/>
        </div>
    )
}

export default FamilyPage;