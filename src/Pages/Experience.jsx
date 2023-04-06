import React from "react";
import Projects from "../components/projects";
import "../styles/experience.css";
function Experience() {
  return (
    <div>
      <h4 className="container m-5 d-flex flex-wrap" style={{fontSize: "1.5rem"}}>
        I have been studying at KITM since September 2022, focusing on becoming a
        Javascript developer. So far, I have gained knowledge and experience in
        various programming languages such as HTML, CSS,
        JavaScript, Node, and React. While I am relatively new to the IT field,
        I am eager to learn more and to continue to grow my skills and knowledge
        in this constantly evolving industry.
      </h4>
      <Projects></Projects>
    </div>
  );
}

export default Experience;
