import React from "react";
import style from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
