import React from "react";
import "./Sidebar.css";
import { FaHome, FaProductHunt, FaUsers, FaDollarSign, FaRocket, FaQuestionCircle, FaAngleRight } from "react-icons/fa"; // Importing specific icons
import { useMediaQuery } from 'react-responsive'

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
  return (
    <div className={isMobile ? "sidebar-mobile" : "sidebar"}>
      <h2 className={isMobile ? "sidebar-title-mobile" : "sidebar-title"}>
        {" "}
        <FaHome className={isMobile ? "icon-mobile" : "icon"} />
        Dashboard
      </h2>
      <ul className={isMobile ? "sidebar-list-mobile" : "sidebar-list"}>
        <li className={isMobile ? "active-mobile" : "active"}>
         <span> <FaHome className={isMobile ? "icon-mobile" : "icon"} /> Dashboard</span>  <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>
        <li>
          <span> <FaProductHunt className={isMobile ? "icon-mobile" : "icon"} /> Product</span> <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>

        <li>
          <span> <FaUsers className={isMobile ? "icon-mobile" : "icon"} /> Customers</span> <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>
        <li>
          <span> <FaDollarSign className={isMobile ? "icon-mobile" : "icon"} /> Income</span> <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>
        <li>
          <span> <FaRocket className={isMobile ? "icon-mobile" : "icon"} /> Promote</span> <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>
        <li>
          <span> <FaQuestionCircle className={isMobile ? "icon-mobile" : "icon"} /> Help</span> <FaAngleRight className={isMobile ? "nav-icon-mobile" : "nav-icon"} />
        </li>
      </ul>
      <div className={isMobile ? "profile-mobile" : "profile"}>
        <img src="https://via.placeholder.com/150" alt="Profile" className={isMobile ? "profile-pic-mobile" : "profile-pic"} />
        <div>
          <span className={isMobile ? "profile-name-mobile" : "profile-name"}>Evano</span>
          <span className={isMobile ? "profile-role-mobile" : "profile-role"}>Project Manager</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
