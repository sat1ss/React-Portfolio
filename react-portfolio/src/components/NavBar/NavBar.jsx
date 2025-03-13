import React, { useState } from "react";
import style from "./NavBar.module.css";
import { getImageUrl } from "../../utils";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <a className={style.navbarTitle} href="/">
        Swantech
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
            <a href="#about">O Nas</a>
          </li>
          <li>
            <a href="#experience">Doświadczenie</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
