import { React, useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer"
import Contact from './components/Contact/Contact'
//import "./App.css";

function App() {
  const [contentSelected, setContentSelected] = useState("About");

  console.log(contentSelected);

  const handlepage = function (page) {
    switch (page) {
      case "About":
        return <About></About>;

      case "Project":
        return <Portfolio></Portfolio>;


        case "Contact":
        return <Contact></Contact>
      default:
        break;
    }
  };

  return (
    <div className="main min-vh-100">
      <Header
        contentSelected={contentSelected}
        setContentSelected={setContentSelected}
      ></Header>
      <main>
      <div className="container"
      >{handlepage(contentSelected)}</div>
      </main>
      <footer className="footer fixed-bottom">
      <Footer></Footer>
      </footer>

    </div>
  );
}
export default App;
