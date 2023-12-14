import React from "react";
import FindAssetCard from "../cards/FindAssetCard";
import "./FindsFrame.css"

function FindsFrame(){
    return (
        <div className="finds-frame">
            <FindAssetCard className="first" label="כותרת" text="מידע"/>
            <FindAssetCard label="כותרת" text="מידע"/>
            <FindAssetCard label="כותרת" text="מידע"/>
            <FindAssetCard label="כותרת" text="מידע"/>
            <FindAssetCard label="כותרת" text="מידע"/>
            <FindAssetCard label="כותרת" text="מידע"/>
        </div>
    )
}

export default FindsFrame;