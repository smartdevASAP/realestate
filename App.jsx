import Header from "./Components/Header/Header";
import React from "react";
import Value from "./Components/Value/Value";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
