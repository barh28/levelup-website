import React, { useEffect, useState , useRef} from "react";
import "./ContactFrame.css"

function ContactFrame(){
    const userRef = useRef();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [more, setMore] = useState("");

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    return (
        <div className="contact">
            <div className="contant-wrapper">
            <p>השאירו פרטים ונחזור אליכם בהקדם</p>
                <div className="form">
                    <form className="contact-form">
                        <label htmlFor="full-name">שם מלא:</label>
                        <input 
                            id="full-name" 
                            type="text" 
                            ref= {userRef}
                            value={fullName}
                            onChange={(e)=> setFullName(e.target.value)}
                            required
                        />
                        <label htmlFor="phone">מספר טלפון:</label>
                        <input
                            id="phone"
                            type="number"
                            value={phoneNumber}
                            onChange={(e)=> setPhoneNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="subject">נושא הפנייה:</label>
                        <select 
                            id="dropdown" 
                            value={selectedOption} 
                            onChange={(e) => setSelectedOption(e.target.value)}
                            placeholder="בחר את נושא פנייתך"
                            required
                        >
                            <option value=""></option>
                            <option value="מכירה">מכירה</option>
                            <option value="קנייה">קנייה</option>
                            <option value="שכירות">שכירות</option>
                            <option value="עבודה">מעוניינ/ת לעבוד אצלכם</option>
                        </select>
                        <label htmlFor="more">פרטים נוספים:</label>
                        <input
                            id="more"
                            value={more}
                            onChange={(e)=> setMore(e.target.value)}
                            placeholder="ספר/י לנו בקצרה איך נוכל לעזור"
                            required
                        />
                        <div className="button-div">
                            <button type="submit">שליחת הטופס</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactFrame;