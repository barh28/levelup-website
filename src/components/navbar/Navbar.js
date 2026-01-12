import React, { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import "./Navbar.css";
import UserIcon from "../../icons/User";
import WhatsappIcon from "../../icons/Whatsapp";
import FacbookIcon from "../../icons/Facebook";
import LocationIcon from "../../icons/Location";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";

export const Navbar = ({ className }) => {
  const location = useLocation();
  const [dropDownOpenUser, setDropDownOpenUser] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    console.log("Route changed to: " + location.pathname);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    setDropDownOpenUser(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`navbar`}>
      {!isMobile && (
        <div className="icons-container">
          <LocationIcon className="icon-location" />
          <FacbookIcon className="icon-facebook-fill" />
          <WhatsappIcon className="icon-whatsapp" />
        </div>
      )}
      {!isMobile && (
        <div className="links-container">
          <NavLink text="צור קשר" path="/contact" />
          <NavLink text="המלצות" path="/ourFamily" />
          <NavLink text="פרויקטים" path="/finds" />
          <NavLink text="אודותינו" path="/aboutUs" />
        </div>
      )}
      {isMobile && <Hamburger />}
      <div className="logo-containter">
        <UserIcon dropDown={dropDownOpenUser} setDropDown={setDropDownOpenUser} />
        <Link to="/">
          <img className="logo" alt="LevelUp" src="/Images/logo.png" />
        </Link>
      </div>
    </div>
  );
};
