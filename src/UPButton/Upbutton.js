import React from "react";

function Upbutton() {
  const up = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="up" onClick={up}>
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
}

export default Upbutton;
