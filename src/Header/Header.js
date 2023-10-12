import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "../Assets/menu.svg";

function Header({ timeline }) {
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);

  useEffect(() => {
    timeline.from([li1, li2, li3, li4], {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: 20,
      stagger: {
        amount: 0.6,
      },
    });
  });
  return (
    <div>
      <header>
        <div id="logo"></div>
        <div className="toggle-menu">
          <img src={MenuIcon} alt="" />
        </div>
        <ul className="menu-items">
          <li ref={(el) => (li1 = el)}>
            <Link to="/" className="li">
              Home
            </Link>
          </li>
          <li ref={(el) => (li2 = el)}>
            <Link to="/about" className="li">
              About
            </Link>
          </li>
          <li ref={(el) => (li3 = el)}>
            <Link to="/projects" className="li">
              Projects
            </Link>
          </li>
          <li ref={(el) => (li4 = el)}>
            <a
              href="https://www.linkedin.com/in/harsh-tondak-a75742202/"
              className="li"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
