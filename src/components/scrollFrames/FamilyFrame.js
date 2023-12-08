import React, { useState, useEffect , useRef} from 'react';
import "./FamilyFrame.css";

function FamilyFrame() {
    const [visibility, setVisibility] = useState(0);
    const frameRef = useRef(null);

    function calculateVisibility() {
        if (!frameRef.current) return;
    
        const rect = frameRef.current.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
    
        // Check if the element is in the viewport
        let isVisible = 0;
        if (elemTop < window.innerHeight && elemBottom >= 0) {
            const elemHeight = elemBottom - elemTop;
            isVisible = Math.min(1, (window.innerHeight - elemTop) / elemHeight);
        }
    
        setVisibility(isVisible);
    }

    // function calculateVisibility() {
    //     if (!frameRef.current) return;
    
    //     const rect = frameRef.current.getBoundingClientRect();
    //     const elemTop = rect.top;
    //     const elemBottom = rect.bottom;
    
    //     // Height of the element
    //     const elemHeight = rect.height;
    
    //     // Start the animation when the top of the element is at the bottom of the viewport
    //     // and end it when the bottom of the element is at the top of the viewport
    //     let isVisible = 0;
    //     if (elemTop < window.innerHeight && elemBottom >= 0) {
    //         if (elemTop > 0) {
    //             isVisible = 1 - Math.min(1, elemTop / window.innerHeight);
    //         } else {
    //             isVisible = Math.min(1, elemBottom / elemHeight);
    //         }
    //     }
    
    //     setVisibility(isVisible);
    // }
    
    

    useEffect(() => {
        window.addEventListener('scroll', calculateVisibility);
        calculateVisibility(); // Initial check
        return () => {
            window.removeEventListener('scroll', calculateVisibility);
        };
    }, []);

    return (
        <div className='famframe'>
        <div ref={frameRef} className="fam-agent" style={{ 
            transform: `translateX(${(1 - visibility) * 100}%)` 
        }}>
            <img src="/Images/logo.png" alt="logo"></img>
        </div>
        </div>
    );
}

export default FamilyFrame;
