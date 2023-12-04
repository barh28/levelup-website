import React , {useState} from "react";
import Accessibility from "../accessibility/Accessibility";
import AccessibilityMenu from "../accessibility/AccessibilityMenu";
import Button from "../buttons/Button";
import DotIcon from "../../icons/DotIcom";
import "./MainFrame.css"

function MainFrame(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="main-frame">
            <div className="div-2">
                <div className="div-3">
                    <div className="text-wrapper-6">השכרה</div>
                    <DotIcon className="icon-dot"/>
                    <div className="text-wrapper-6">קנייה</div>
                    <DotIcon className="icon-dot"/>
                    <div className="text-wrapper-6">מכירה</div>
                </div>
                <div className="text-wrapper-7">LevelUP</div>
                <div className="text-wrapper-8">יועצי הנדל״ן שלכם</div>
                <Button className="button-instance" text="ליצירת קשר"></Button>
            </div>
            {/* <Who className="who-instance"/> */}
            {/* <ClientsTell className="clients-tell-instance"/> */}
            {/* <Talk className="talk-instance"/> */}
            <div className={`accessibility-instance ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
            <Accessibility className="accessibility"/>
            <div className={`accessibility-menu-wrap ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
                <AccessibilityMenu/>
            </div>
            </div>
        </div>
    )
}

export default MainFrame;