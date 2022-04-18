import React, { useState } from "react";

function Nav(props) {
  const { contentSelected, setContentSelected } = props;

  return (
    <nav className="navbar navbar-expand-lg ">
      <ul className="navbar-nav me-auto flex-row ">
        <li
          className={`navbar-item mx-2 ${contentSelected === "About" && 'text-warning' }`}
          onClick={() => setContentSelected("About")}
        >
          <span>About Me</span>
        </li>
        <li
          className={`navbar-item mx-2 ${contentSelected === "Project" && 'text-warning' }`}
          onClick={() => setContentSelected("Project")}
        >
          <span>Portfolio</span>
        </li>
        <li
          className={`navbar-item mx-2 ${contentSelected === "Contact" && 'text-warning' }`}
          onClick={() => setContentSelected("Contact")}
        >
          <span>Contact</span>
        </li>
        <li
          className={`navbar-item mx-2 ${contentSelected === "Resume" && 'text-warning' }`}
          onClick={() => setContentSelected("Resume")}
        >
          <span>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
