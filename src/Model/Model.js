import React from "react";
import "./Model.css";
function Model({ handelmodel, openmodel }) {
  return (
    <div className="model">
      <ul>
        <li onClick={handelmodel}>
          <i className="fa-solid fa-xmark"></i>
        </li>
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
    </div>
  );
}

export default Model;
