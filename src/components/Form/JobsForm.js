import React, { useEffect, useState , useRef} from "react";
import "./JobsForm.css"

function JobsForm(){
    const userRef = useRef();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [more, setMore] = useState("");

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    return (
        <div className="job">
            <div className="job-wrapper">
                <p>השאירו פרטים ונחזור אליכם בהקדם</p>
                <div className="form">
                    <form className="job-form">
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
                        {/* <label htmlFor="mail">מייל:</label>
                        <input
                            id="mail"
                            type="mail"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        /> */}
                        <label htmlFor="subject">מחלקה:</label>
                        <select 
                            id="subject" 
                            value={selectedOption} 
                            onChange={(e) => setSelectedOption(e.target.value)}
                            required
                        >
                            <option value=""></option>
                            <option value="ליווי ויעוץ נדל״ן">ליווי ויעוץ נדל״ן</option>
                            <option value="שיפוצים">שיפוצים</option>
                            <option value="לימודים">לימודים</option>
                            <option value="אחר">אחר</option>
                        </select>
                        <label htmlFor="more">פרטים נוספים:</label>
                        <input
                            id="more"
                            value={more}
                            onChange={(e)=> setMore(e.target.value)}
                            placeholder="כל דבר נוסף שתרצ/י לספר לנו"
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

export default JobsForm;