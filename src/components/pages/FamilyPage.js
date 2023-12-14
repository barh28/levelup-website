import React from "react";
import "./FamilyPage.css"
import ProfileBubble from "../family/ProfileBubble";
import FamilyFrame from "../scrollFrames/FamilyFrame";

function FamilyPage(){
    return (
        <div className="family-page-frame">
            <FamilyFrame/>
            <ProfileBubble photo="/Images/family/daniel.jpg" direction="left" name="דניאל לנדר" text="מנכ״ל ויועץ נדל״ן ב-LevelUp"/>
            <ProfileBubble photo="/Images/family/zohar.jpg" direction="right" name="זוהר טישלר" text="מנכ״ל ויועץ נדל״ן ב-LevelUp"/>
            <ProfileBubble photo="/Images/family/milena.jpg" direction="left" name="מילנה" text="מנהלת אדמיניסטרטיבית"/>
            <ProfileBubble photo="/Images/family/danielp.jpg" direction="right" name="דניאל פיניין" text="סוכן נדל״ן"/>
            <ProfileBubble photo="/Images/family/palina.jpg" direction="left" name="פלינה" text="סוכנת נדל״ן"/>
            <ProfileBubble photo="/Images/family/yehuda.jpg" direction="right" name="יהודה" text="סוכן נדל״ן"/>
            <ProfileBubble photo="/Images/family/maor.jpg" direction="left" name="מאור" text="סוכנת נדל״ן"/>
            <ProfileBubble photo="/Images/family/david.jpg" direction="right" name="דוד" text="סוכן נדל״ן"/>
            <ProfileBubble photo="/Images/family/yacov.jpg" direction="left" name="יעקב" text="סוכן נדל״ן"/>
            <ProfileBubble photo="/Images/family/pinchas.jpg" direction="right" name="פינחס" text="סוכן נדל״ן"/>
        </div>
    )
}

export default FamilyPage;