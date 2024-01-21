import React, { useEffect } from "react";
import blue from "../../images/blue.png";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthPage }) => {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname !== "/auth" &&
        pathname !== "/checkout-success" &&
        pathname !== "/checkout-cancel" &&
        pathname !== "/chat" &&
        !isAuthPage && (
          <div className="container">
            <Link to="/">
              <img className="logoImg" src={blue} alt={<h1>CampusEase</h1>} />
            </Link>
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
              <li>
                <a className="link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
    </>
  );
};

export default Navbar;
