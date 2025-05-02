import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
function App() {

  const [navBarOpen, setNavBarOpen] = useState(false);


  return (
    <>
        <Navbar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />

        <Header setNavBarOpen={setNavBarOpen} />
        <Hero />
        <About sectionHeader="About Me"/>
        <Experience sectionHeader="Experience"/>
    </>
  );
}

export default App;
