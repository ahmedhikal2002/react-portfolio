import { useState } from "react";
import data from "../data/data.json";
import { AnimatePresence, motion } from "framer-motion";
import "./Main.css";
function Main() {
  const [btnactive, setBtnactive] = useState("all");
  const [projects, setProjects] = useState(data);
  const handelclik = (val) => {
    setBtnactive(val);
    const myProjects = data.filter((project) => {
      return project.category.find((cat) => {
        return cat === val;
      });
    });
    setProjects(myProjects);
  };

  return (
    <div className="main">
      <section className="btn-list">
        <button
          onClick={() => {
            setBtnactive("all");
            setProjects(data);
          }}
          className={`${btnactive === "all" && "active"} btn`}
        >
          All Projects
        </button>
        <button
          onClick={() => handelclik("js")}
          className={`${btnactive === "js" && "active"} btn`}
        >
          JavaScript
        </button>
        <button
          onClick={() => handelclik("css")}
          className={`${btnactive === "css" && "active"} btn`}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handelclik("react")}
          className={`${btnactive === "react" && "active"} btn`}
        >
          React & MUI
        </button>
        <button
          onClick={() => handelclik("node")}
          className={`${btnactive === "node" && "active"} btn`}
        >
          Node & Express
        </button>
      </section>
      <AnimatePresence>
        <section className="projects-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1, damping: 5, stiffness: 100 }}
              className="box"
            >
              <img src={project.img} alt={project.title} />
              <div className="desc">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <div className="links">
                  <div>
                    <i className="fa-brands fa-github"></i>
                    <i
                      style={{ marginLeft: "8px" }}
                      className="fa-solid fa-link"
                    ></i>
                  </div>
                  <div>
                    <a href="##">
                      Mero
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </AnimatePresence>
    </div>
  );
}

export default Main;
