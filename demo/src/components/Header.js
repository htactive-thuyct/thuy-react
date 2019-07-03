import React from "react";

const Header = ({ title, menu }) => {
  return (
    <ul className="nav nav-tabs">
      {menu.map(item => (
        <li key={item} className="nav-item">
          <a className="nav-link active" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Header;
