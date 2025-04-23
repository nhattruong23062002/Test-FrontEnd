import React from "react";
import "./Header.css";
import { BiBell } from "react-icons/bi";
import { FiSettings, FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo-header.png" alt="Logo" className="logo-img" />
            </div>

            <div className="search-container">
                <div className="search-bar">
                    <div className="search-icon">
                        <FiSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher dans Metaforma"
                        className="search-input"
                    />
                </div>
                <button className="add-btn">+</button>
            </div>

            <div className="user-profile">
                <BiBell className="icon-profile" />
                <AiOutlineQuestionCircle className="icon-profile" />
                <FiSettings className="icon-profile" />
                <div className="user-info">
                    <div className="user-avatar">
                        <img
                            src="/avatar-profile.png"
                            alt="User Avatar"
                            className="avatar-img"
                        />
                    </div>
                    <div className="user-text">
                        <span className="user-name">Sébastien Hanouna</span>
                        <span className="user-role">CEO, Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
