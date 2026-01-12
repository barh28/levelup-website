import React from "react";
import "./MainFrame.css";

function MainFrame() {
  return (
    <section className="main-frame" id="home">
      <div className="main-frame__container">
        <div className="main-frame__grid">
          {/* Text */}
          <div className="main-frame__text">
            <h1 className="hero-title">
              נדל״ן מבוסס
              <br />
              <span className="hero-title-accent">אמון ובהירות</span>
            </h1>

            <p className="hero-subtitle">
              אנו מלווים משקיעים ורוכשים פרטיים בתהליך רכישת נדל״ן באופן מקצועי, שקוף ומותאם אישית.
              בלי לחץ, בלי התחייבות - רק ליווי מומחים.
            </p>

            <div className="hero-actions">
              <a className="hero-btn hero-btn-primary" href="/contact">
                תיאום שיחת היכרות
              </a>
              <a className="hero-btn hero-btn-secondary" href="/finds">
                הפרויקטים שלנו
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="main-frame__image-wrap">
            <div className="main-frame__image-card">
              <img
                src="/Images/hero-team-enhanced.png"
                alt="צוות LevelUP"
                className="hero-image"
              />
              <div className="hero-badge">
                <div className="hero-badge-icon">+15</div>
                <div className="hero-badge-text">
                  <div className="hero-badge-title">שנות ניסיון</div>
                  <div className="hero-badge-sub">בשוק הנדל״ן</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFrame;