// src/components/Navbar.js or Navbar.tsx
"use client"; // Needed for useEffect and DOM events in Next.js App Router

import { useEffect, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "@/styles/global.css"; // use alias for cleaner import

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const listItems = navRef.current?.querySelectorAll(".list");

    const handleClick = (e) => {
      listItems?.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };

    listItems?.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    return () => {
      listItems?.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navigation" ref={navRef}>
        <ul className="nav">
          <li className="list active">
            <a href="#home">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#about">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">About</span>
            </a>
          </li>
          <li className="list">
            <a href="#resume">
              <span className="icon">
                <ion-icon name="book-outline"></ion-icon>
              </span>
              <span className="text">Education</span>
            </a>
          </li>
          <li className="list">
            <a href="#contact">
              <span className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <li className="list toggle-item">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
