import React from "react";
import Intro from "../components/autotype/intro";
import myimg from "../IMG/1.png";
import "../styles/home.css";
function Home() {
  return (
    <div className="container mt-5">
      <div className="">
       <div className=""><h1>Donatas Kusleika</h1></div>
       <div className="homeImg">  <img src={myimg} alt="" /></div>
       
      </div>


      <div className="mt-5">
        <Intro></Intro>
      </div>
    </div>
  );
}

export default Home;
