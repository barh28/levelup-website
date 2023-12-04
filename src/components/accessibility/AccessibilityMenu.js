import React from "react";
import "./AccessibilityMenu.css"
import ContrastIcon from "../../icons/ContrastIcon";
import ReverseContrastIcon from "../../icons/ReverseContrastIcon";
import LightIcon from "../../icons/LightIcon";
import LinkIcon from "../../icons/LinkIcon";
import BarcodeIcon from "../../icons/BarcodeIcon";
import AIcon from "../../icons/AIcon";
import ResetIcon from "../../icons/ResetIcon";
import PlusGlassIcon from "../../icons/PlusGlassIcon";
import MinusGlassIcon from "../../icons/MinusGlassIcon";

function AccessibilityMenu(){
    return (
        <div className="accessibility-menu">
            <div className="frame">
                <div className="text-wrapper">הגדל טקסט</div>
                <PlusGlassIcon className="icon-magnifying"/>
            </div>
            <div className="frame">
                <div className="text-wrapper">הקטן טקסט</div>
                <MinusGlassIcon className="img"/>
            </div>
            <div className="div">
                <div className="text-wrapper">גווני אפור</div>
                <BarcodeIcon className="icon-barcode"/>
            </div>
            <div className="div">
                <div className="text-wrapper">ניגודיות</div>
                <ContrastIcon className="img-2"/>
            </div>
            <div className="div">
                <div className="text-wrapper">ניגודיות הפוכה</div>
                <ReverseContrastIcon className="icon-reverse-contrast"/>
            </div>
            <div className="frame-2">
                <div className="text-wrapper">רקע בהיר</div>
                <LightIcon className="emoji-light"/>
            </div>
            <div className="div">
                <div className="text-wrapper">פונט קריא</div>
                <AIcon className="img-2"/>
            </div>
            <div className="div">
                <div className="text-wrapper">הדגשת קישורים</div>
                <LinkIcon className="img-2"/>
            </div>
            <div className="div">
                <div className="text-wrapper">איפוס</div>
                <ResetIcon className="img-2"/>
            </div>
        </div>
    )
}

export default AccessibilityMenu;