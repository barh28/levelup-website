import React ,{useState} from "react";
import Accessibility from "./Accessibility"
import AccessibilityMenu from "./AccessibilityMenu";
import "./AccessibilityAnimation.css"

function AccessibilityAnimation(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`accessibility-instance ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
            <Accessibility className="accessibility"/>
            <div className={`accessibility-menu-wrap ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
                <AccessibilityMenu/>
            </div>
         </div>
    )
}

export default AccessibilityAnimation;