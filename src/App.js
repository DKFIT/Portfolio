// import firebase from './firebase';
import "./styles/App.css";

import ContactForm from "./Pages/contactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import NavBar from "./Navbar/NavBar"
import Footer from "./components/footer";


function App() {
  return (
    <div className="app">
      
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
        <Footer></Footer>
      </Router>
   
    </div>
  );
}

export default App;
