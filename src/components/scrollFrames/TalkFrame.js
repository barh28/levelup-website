import React from "react";
import "./TalkFrame.css"

function TalkFrame(){
    return (
        <div className="talk">
            <div className="talk-frame">
                <div className="text-wrapper-talk">בואו נדבר</div>
                <p className="p-div">לכל שאלה מוזמנים לפנות אלינו עוד היום:</p>
                <div className="talk-frame-down">
                <div className="inner-icons">
                <img className="img img-address" alt="address" src="/Images/icons/Compass.svg"></img>
                <img className="img" alt="mail" src="/Images/icons/envelope.svg"></img>
                <img className="img" alt="phone" src="/Images/icons/phone.svg"></img>
                </div>
                    <div className="inner">
                        <div className="address">
                            בכתובת:
                            <br/>
                            המלאכה 25, דימונה
                        </div>
                        <div className="mail">
                            &nbsp;&nbsp;&nbsp;&nbsp;במייל:
                            <br/>
                            kwLevelUp@gmail.com
                        </div>
                        <div className="phone">
                            בטלפון:
                            <br/>
                            054-2282313
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalkFrame;