import React, { useEffect, useState } from "react";
import "./Header.css";
import Model from "../Model/Model";
import { createPortal } from "react-dom";
function Header() {
  const [openmodel, setOpenmodel] = useState(false);
  const model = document.getElementById("my-model");
  const handelmodel = () => {
    setOpenmodel(!openmodel);
  };
  const protal = createPortal(
    <Model handelmodel={handelmodel} openmodel={openmodel} />,
    model
  );
  const storedThem = localStorage.getItem("currentMode");

  const [theme, setTheme] = useState(storedThem || "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    localStorage.setItem("currentMode", theme);
  }, [theme]);
  useEffect(() => {
    if (openmodel === true) {
      document.querySelector("#my-model").classList.add("model-bg");
    } else {
      document.querySelector("#my-model").classList.remove("model-bg");
    }
  }, [openmodel]);
  return (
    <header>
      <div className="menue flex" onClick={handelmodel}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div />
      {openmodel ? protal : ""}
      <nav className="navs">
        <ul>
          <li>
            <a href="##">About</a>
          </li>
          <li>
            <a href="##">Articles</a>
          </li>
          <li>
            <a href="##">Projects</a>
          </li>
          <li>
            <a href="##">Users</a>
          </li>
        </ul>
      </nav>
      <div
        className="header-icon flex"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-regular fa-sun"></i>
        )}
      </div>
    </header>
  );
}

export default Header;
