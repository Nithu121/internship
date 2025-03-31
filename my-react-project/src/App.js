


import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;

