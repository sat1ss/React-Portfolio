import { NavBar } from "./components/NavBar/NavBar";
import style from "./App.module.css";
import React from "react";

function App() {
  return (
    <div className={style.app}>
      <NavBar />
    </div>
  );
}

export default App;
