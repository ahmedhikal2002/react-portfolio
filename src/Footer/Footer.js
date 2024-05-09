import React from "react";
import "./Footer.css";
function Footer() {
  const date = new Date();
  return (
    <footer>
      <ul>
        <li>
          <a href="##"> About</a>
          <a href="##"> Projects</a>
          <a href="##"> Speaking</a>
          <a href="##"> Users</a>
        </li>
      </ul>
      <div className="copyright">
        <i className="fa-regular fa-copyright"></i>
        {date.getFullYear()}Ahmed Sharp.All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
