import React, { useEffect } from "react";
import blue from "../../images/blue.png";
import "./styles.css";

const Navbar = ({ isAuthPage }) => {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname !== "/auth" && !isAuthPage && (
        <div className="container">
          <img className="logoImg" src={blue} alt={<h1>CampusEase</h1>} />
          <ul className="subContainer">
            <li>
              <a className="link" href="/trade">
                Trade
              </a>
            </li>
            <li>
              <a className="link" href="/lost">
                Lost and Found
              </a>
            </li>
            <li>
              <a className="link" href="/events">
                Events
              </a>
            </li>
            <li>
              <a className="link" href="/community">
                Community
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
