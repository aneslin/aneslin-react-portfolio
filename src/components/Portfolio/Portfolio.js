import React from "react";
import Project from "../Project/Project";

const Portfolio = function () {
  const projects = [
    {
      name: "Mountain Lake Bed and Breakfast Website",
      description:
        "A full stack application using Handlebars,  Express.js and Squelize to create a website for a fictional bed and breakfast",
      image:
        "../../assets/images/158072422-47c10481-a06e-4f7e-a7fd-fca3b2893c26.png",
      imageDesc: "web page screen shot of b&b website",
      link: "https://mountainlake.herokuapp.com/",
    },

    {
      name: "TRAX Stock and Crypto Tracker",
      image: "../../assets/images/TRAX.png",
      description: "HTML, CSS and Javascript front end application that uses APIs to pull data from financial data exchanges. Users can save symbols for easy access ",
      imageDesc: "Trax stock and crypto app",
      link: "https://aneslin.github.io/trax-crypto-stock-tracker/",
    },
    {
      name: "Item-Remap",
      description:
        "A script to extract, clean and Transform Aleph item data. Uses Python and SQL with a link to an Oracle database the cx_oracle module",
      image: "../../assets/images/item-remap.png",
      imageDesc: "placeholder",
      link: "https://github.com/5-C-Folio/item-remap",
    },
  ];



  return (
    <div className="row d-flex flex-row mt-4">
      <h2>Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-3">
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            image_desc={project.imageDesc}
            link={project.link}
          ></Project>
        </div>
      ))}
    </div>
  );
};
export default Portfolio;
