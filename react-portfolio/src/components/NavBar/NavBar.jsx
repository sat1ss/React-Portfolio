import React, { useState } from "react";
import style from "./NavBar.module.css";
import { getImageUrl } from "../../utils";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <a className={style.navbarTitle} href="/">
        Portfolio
      </a>
      <div className={style.navbarMenu}>
        <img
          className={style.navbarBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <ul
          className={`${style.navbarItem} ${menuOpen && style.menuOpen}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
