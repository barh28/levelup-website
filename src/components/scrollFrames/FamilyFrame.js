import React from "react";
import "./FamilyFrame.css"
import Button from "../buttons/Button";

function FamilyFrame(){
    return (
        <>
        <div className="family-frame orange-color" data-color="#f88055">
            <div className="wrap-all">
                <div className="text-topic">משפחת <p>LevelUP</p></div>
                <div className="text">המשפחה שלנו כוללת סוכנים ובעלי מקצוע מנוסים, יועצי משכנתאות
                מלווי משקיעים, מנהלת אדמיניסטרטיבית ומתמחים בהשבחת נכסים
                המשרד הינו זכיין של הרשת הבינלאומית <p>KW</p> ובשיתוף הרשת אנו מלווים את הסוכנים שלנו בדרך להצלחתם
                </div>
                <Button className="button-contrast-instance" text="רוצים לעבוד איתנו?" path="/jobs"/>
            </div>
        </div>
        </>
    )
}

export default FamilyFrame;