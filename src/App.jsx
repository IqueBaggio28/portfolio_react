import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  const [navBarOpen, setNavBarOpen] = useState(false);


  return (
    <>
      <Header setNavBarOpen={setNavBarOpen} />
      <Navbar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
    </>
  );
}

export default App;
