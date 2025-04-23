import React, { useState } from "react";
import "./SideBar.css";
import { IoDocumentTextOutline, IoGridOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuFilePen } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { CgBrowser } from "react-icons/cg";
import { FiFilter } from "react-icons/fi";
import { LiaSitemapSolid } from "react-icons/lia";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const navigation = useNavigate();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    navigation("/login")
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div
          className={`sidebar-item ${
            activeItem === "document" ? "active" : ""
          }`}
          onClick={() => handleItemClick("document")}
        >
          <IoDocumentTextOutline className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "users" ? "active" : ""}`}
          onClick={() => handleItemClick("users")}
        >
          <LuUsersRound className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "grid" ? "active" : ""}`}
          onClick={() => handleItemClick("grid")}
        >
          <IoGridOutline className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "userGroup" ? "active" : ""
          }`}
          onClick={() => handleItemClick("userGroup")}
        >
          <HiOutlineUserGroup className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "graduation" ? "active" : ""
          }`}
          onClick={() => handleItemClick("graduation")}
        >
          <RiGraduationCapLine className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "filePen" ? "active" : ""}`}
          onClick={() => handleItemClick("filePen")}
        >
          <LuFilePen className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "star" ? "active" : ""}`}
          onClick={() => handleItemClick("star")}
        >
          <FaRegStar className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "share" ? "active" : ""}`}
          onClick={() => handleItemClick("share")}
        >
          <RxShare2 className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "browser" ? "active" : ""}`}
          onClick={() => handleItemClick("browser")}
        >
          <CgBrowser className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "filter" ? "active" : ""}`}
          onClick={() => handleItemClick("filter")}
        >
          <FiFilter className="sidebar-icon" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "sitemap" ? "active" : ""}`}
          onClick={() => handleItemClick("sitemap")}
        >
          <LiaSitemapSolid className="sidebar-icon" />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <HiOutlineLogout className="sidebar-icon"  onClick={() => handleLogout()} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
