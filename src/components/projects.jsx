import React from "react";
import "../styles/project.css";
import store from "../IMG/2.jpg";
import movie from "../IMG/3.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

function Projects() {
  const handleButtonClickStore = () => {
    window.location.href = "https://react-e-shop-beryl.vercel.app/";
  };
  const handleButtonClickMovie = () => {
    window.location.href = "https://react-movie-menu.vercel.app/";
  };

  return (
    <div className="container ">
      <h1>My current projects</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        <MDBCard className="card">
          <MDBCardBody>
            <MDBCardTitle>Movie API</MDBCardTitle>
            <MDBCardText>
              <div className="">
                {" "}
                <img src={movie} alt="" />
              </div>
            </MDBCardText>
            <MDBCardText>
              <MDBBtn onClick={handleButtonClickStore}>Go to Store</MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="card">
          <MDBCardBody>
            <MDBCardTitle>Online store</MDBCardTitle>
            <MDBCardText>
              <div className="">
                {" "}
                <img src={store} alt="" />
              </div>
            </MDBCardText>
            <MDBCardText>
              <MDBBtn onClick={handleButtonClickStore}>Go to Store</MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Projects;
