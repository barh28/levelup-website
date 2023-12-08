import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from "../buttons/Button";
import "./WhoFrame.css";

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
            <Slider {...settings}>
                    <img src="/Images/buildings.jpg" alt="building" className="slide"/>
                    <div>Your Component Here</div> 
                </Slider>
            </div>
        </div>
    )
}

export default WhoFrame;