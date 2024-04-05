import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="menu_header">{header}</div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
            <NavLink to={item.path}>{item.value}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
