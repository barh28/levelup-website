import React, { useRef, useEffect, useState } from 'react';
import './ProfileBubble.css';

function ProfileBubble({ photo, text, direction }) {
    const bubbleRef = useRef(null);
    const [visibility, setVisibility] = useState(0);
    const [hasBecomeFullyVisible, setHasBecomeFullyVisible] = useState(false);

    function calculateVisibility() {
        if (!bubbleRef.current) return;
    
        const rect = bubbleRef.current.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
    
        // Check if the element is in the viewport
        if (elemTop < window.innerHeight && elemBottom >= 0) {
            const elemHeight = elemBottom - elemTop;
            const newVisibility = Math.min(1, (window.innerHeight - elemTop) / elemHeight);
    
            if (newVisibility === 1) {
                setHasBecomeFullyVisible(true);
            }
    
            if (!hasBecomeFullyVisible || (hasBecomeFullyVisible && elemTop > window.innerHeight)) {
                setVisibility(newVisibility);
            }
        } else if (hasBecomeFullyVisible && elemBottom < 0) {
            setVisibility(0);
            setHasBecomeFullyVisible(false);
        }
    }
    

    useEffect(() => {
        window.addEventListener('scroll', calculateVisibility);
        calculateVisibility(); // Initial check
        return () => {
            window.removeEventListener('scroll', calculateVisibility);
        };
    }, []);

    return (
        <div ref={bubbleRef} className={`profile-bubble ${direction === 'left' ? 'end-left' : 'end-right'}`} style={{ 
            transform: `translateX(${direction === 'left' ? -10 + (1 - visibility) * -30 : 10 + (1 - visibility) * 30}%)`
        }}>
            {direction === "left" ? <>
            <img src={photo} alt="Profile" className="profile-photo"/>
            <div className="profile-text">{text}</div> 
            </> :
            <>
            <div className="profile-text">{text}</div>
            <img src={photo} alt="Profile" className="profile-photo"/>
            </>}
        </div>
    );
}

export default ProfileBubble;
