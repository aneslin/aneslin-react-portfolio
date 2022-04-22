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
      repository: "https://github.com/aneslin/Mountain-Lake-Bed-and-Breakfast",
    },

    {
      name: "TRAX Stock and Crypto Tracker",
      image: "../../assets/images/TRAX.png",
      description:
        "HTML, CSS and Javascript front end application that uses APIs to pull data from financial data exchanges. Users can save symbols for easy access ",
      imageDesc: "Trax stock and crypto app",
      link: "https://aneslin.github.io/trax-crypto-stock-tracker/",
      repository: "https://github.com/aneslin/trax-crypto-stock-tracker",
    },

    {
      name: "Professional Portfolio",
      image: "../../assets/images/portfolio.jpg",
      description:
        "Previous iteration of professional portfolio done in HTML and CSS ",
      imageDesc: "Professional portfolio screenshot",
      link: "https://aneslin.github.io/professional-portfolio/",
      repository: "https://github.com/aneslin/professional-portfolio",
    },

    {
      name: "Tech Blog",
      image: "../../assets/images/tech-blog.jpg",
      description:
        "Full stack application using Mysql, Squelize, Expressjs, and Bootstrap to create a blogging platform",
      imageDesc: "Professional portfolio screenshot",
      link: "https://aneslin-tech-blog.herokuapp.com/",
      repository: "https://github.com/aneslin/tech-blog",
    },

    {
      name: "Weather Dashboard",
      image: "../../assets/images/weatherdashboard.jpg",
      description:
        "HTML, Bootstrap and Javascript app that makes calls to get weather information and saves results.  API for weather is disabled",
      imageDesc: "Professional portfolio screenshot",
      link: "https://aneslin.github.io/weather-dashboard/",
      repository: "https://github.com/aneslin/weather-dashboard",
    },


    {
      name: "Item-Remap",
      description:
        "A script to extract, clean and Transform Aleph item data. Uses Python and SQL with a link to an Oracle database the cx_oracle module",
      image: "../../assets/images/item-remap.png",
      imageDesc: "placeholder",
      link: "https://github.com/5-C-Folio/item-remap",
      repository: "https://github.com/5-C-Folio/item-remap",
    },
  ];

  return (
    <div className="row d-flex flex-row my-4">
      <h2>Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-2">
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            image_desc={project.imageDesc}
            link={project.link}
            repository={project.repository}
          ></Project>
        </div>
      ))}
    </div>
  );
};
export default Portfolio;
