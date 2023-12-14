import React from "react";
import Button from "../buttons/Button";
import "./FindAssetCard.css"

function FindAssetCard({label, text}) {
    return (
        <div className="finds-asset">
            <div className="image">
            </div>
            <div className="text-container">
                    <div className="label">
                        <div className="label-div">{label}</div>
                    </div>
                    <div className="info">
                        <div className="info-div">{text}</div>
                    </div>
                    <div className="bottom">
                        <p>רוצים לדעת למה זו מציאה?</p>
                        <Button className="button-instance" text="לחצו כאן"/>
                    </div>
                </div>
        </div>
    )
}

export default FindAssetCard;