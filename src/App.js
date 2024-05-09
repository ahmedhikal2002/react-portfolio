import "./App.css";
import Header from "./Header/Header";
import HeroSeaction from "./Hero/HeroSection";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Upbutton from "./UPButton/Upbutton";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isvisiable, setIsvisiable] = useState(false);
  const handelbtn = () => {
    if (window.scrollY >= 800) {
      setIsvisiable(true);
    } else {
      setIsvisiable(false);
    }
  };
  useEffect(() => {
    const scroll = window.addEventListener("scroll", handelbtn);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <HeroSeaction />
        <Main />
        <Contact />
        <Footer />
      </div>
      {isvisiable && <Upbutton />}
    </>
  );
}

export default App;
