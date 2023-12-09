import React, { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import "./Navbar.css";
import UserIcon from "../../icons/User";
import WhatsappIcon from "../../icons/Whatsapp";
import FacbookIcon from "../../icons/Facebook";
import LocationIcon from "../../icons/Location";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Hamburger from "./Hamburger";

export const Navbar = ({ className }) => {
  const location = useLocation();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(()=>{
    setDropDownOpen(false);
  }, [location])

  useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className={`navbar`}>
      {/* <img className="icons-container" alt="Icons container" src="icons-container.svg" /> */}
      {!isMobile && <div className="icons-container">
        <LocationIcon className="icon-location"/>
        <FacbookIcon className="icon-facebook-fill"/>
        <WhatsappIcon className="icon-whatsapp"/>
      </div>}
      {!isMobile && <div className="links-container">
        <NavLink className="nav-link-instance" divClassName="design-component-instance-node" text="צרו קשר" path="/contact"/>
        <NavLink className="nav-link-instance" divClassName="design-component-instance-node" text="משפחת" textEn="LevelUP" path="/ourFamily"/>
        <NavLink className="nav-link-instance" divClassName="design-component-instance-node" text="השירותים שלנו" dropdown={true} dropDownOpen={dropDownOpen} setDropDownOpen={setDropDownOpen} path="/"/>
        <NavLink className="nav-link-2" divClassName="nav-link-3" text="דרושים" path="/jobs"/>
        <NavLink text="קצת עלינו" path="aboutUs"/>
        <NavLink text="מציאות" path="finds"/>
      </div>}
      {isMobile && <Hamburger/>}
      <div className="logo-containter">
        <UserIcon/>
        <div className="line" />
        <Link to="/">
        <img className="logo" alt="LevelUp" src="/Images/logo.png" />
        </Link>
      </div>
    </div>
  );
};
