import React from "react";
import Button from "../buttons/Button";
import "./WhoFrame.css"

function WhoFrame(){
    return (
        <div className="who">
            <div className="who-text">
                <div className="div">
                    מי אנחנו?
                </div>
                <p className="levelup-kw-israel">
                    נעים מאוד, אנחנו חברת LevelUP
                    <br/>
                    מבית kw-israel.
                    <br/>
                    חברתנו מונה כ10 סוכנים ומתמחה <br/>
                    במכירת, קניית והשכרת נכסים
                    <br/>
                    בנוסף, אנו ליווינו עשרות משקיעים <br/>
                    בתהליך הרכישה והשבחת הנכס
                    <br/>
                    <br/>
                    נשמח להכיר אתכם, ולתת לכם <br/>
                    את השירות הטוב ביותר!
                    <br/>
                    לשיחת ייעוץ והכוונה, ללא כל התחייבות
                </p>
                <Button className="button-contrast-instance" text="ליצירת קשר"/>
            </div>
            <div className="frame-beside">
            </div>
        </div>
    )
}

export default WhoFrame;