import React from "react";
import logo from "./almogwer-logo.png";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${isSidebarOpen ? "sidebar show-sidebar" : " sidebar "}`}
    >
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { url, icon, text, id } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((soc) => {
          const { id, url, icon } = soc;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
