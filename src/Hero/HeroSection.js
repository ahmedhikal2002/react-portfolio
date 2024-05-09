import React, { useRef } from "react";
import "./HeroSection.css";
import MyImg from "../imgs/ahmed1.jpg";
import Lottie from "lottie-react";
import Dev from "../../src/Animation/Dev.json";
function HeroSection() {
  const lottieRef = useRef();
  return (
    <div className="hero flex">
      <div>
        <div className="my-image">
          <img src={MyImg} alt="myimage" />
        </div>
        <h2>Reactjs Develober</h2>
        <p>
          I’m Ahmed, a Front-End Reactjs Develober based in Egypt. where we
          develop websites that empower regular people to explore many services
        </p>
        <div className="social">
          <a href="https://twitter.com/ahmedhikal2002">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.facebook.com/ahmed.hikal.7127">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/ahmedhikal2002">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/ahmed.heikal.1447/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="my-animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => lottieRef.current.setSpeed(0.8)}
          animationData={Dev}
        />
      </div>
    </div>
  );
}

export default HeroSection;
