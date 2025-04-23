import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { LiaAddressBook } from "react-icons/lia";
import { TiTag } from "react-icons/ti";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("contacts"); 

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); 
  };

  return (
    <div className="navbar">
      <div
        className={`navbar-item ${activeTab === "contacts" ? "active" : ""}`}
        onClick={() => handleTabClick("contacts")}
      >
        <LiaAddressBook className="icon-navbar"/>
        <Link to="/contacts">Contacts</Link>
      </div>
      <div
        className={`navbar-item ${activeTab === "etiquettes" ? "active" : ""}`}
        onClick={() => handleTabClick("etiquettes")}
      >
        <TiTag className="icon-navbar"/>
        <Link to="/etiquettes">Etiquettes</Link>
      </div>
      <div
        className={`navbar-item ${activeTab === "opportunities" ? "active" : ""}`}
        onClick={() => handleTabClick("opportunities")}
      >
        <RiMoneyDollarBoxLine className="icon-navbar"/>
        <Link to="/opportunities">Opportunities</Link>
      </div>
      <div
        className={`navbar-item ${activeTab === "taches" ? "active" : ""}`}
        onClick={() => handleTabClick("taches")}
      >
        <FaTasks className="icon-navbar"/>
        <Link to="/taches">Tâches</Link>
      </div>
    </div>
  );
};

export default NavBar;
