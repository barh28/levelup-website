import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from "../buttons/Button";
import "./WhoFrame.css";
import Carousel from 'nuka-carousel';

function WhoFrame(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="who orange-color" data-color="#f88055">
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
                <Carousel>
                <div className="custom-slide">
                    <img src="/Images/family/zohar.jpg" alt="Slide 1" />
                </div>
                <div className="custom-slide">
                    <img src="/Images/family/daniel.jpg" alt="Slide 2" />
                </div>
                <div className="custom-slide">
                    <img src="/Images/family/pinchas.jpg" alt="Slide 3" />
                </div>
                </Carousel>
            </div>
        </div>
    )
}

export default WhoFrame;