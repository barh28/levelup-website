import React , {useState} from "react";
import "./Hamburger.css"

function Hamburger(){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <div class={`hamburger ${clicked? "active": ""}`} onClick={handleClick}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    )
}

export default Hamburger;