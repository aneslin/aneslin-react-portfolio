import React from "react";
import {Col, Row, Container} from 'react-bootstrap'
import Project from "../Project/Project";
import bb from "../../assets/images/158072422-47c10481-a06e-4f7e-a7fd-fca3b2893c26.png"
import trax from "../../assets/images/TRAX.png"
import portfolio from "../../assets/images/portfolio.jpg"
import techblog from "../../assets/images/tech-blog.jpg"
import item from "../../assets/images/item-remap.png"
import weather from "../../assets/images/weatherdashboard.jpg"
import gadgets from "../../assets/images/gadgets.jpg"
const Portfolio = function () {
  const projects = [
{name: "Grab and Go Gadgets",
      description:
        "A full MERN app that allows a user to reserve items from an equipment lender",
      image:
      gadgets,
      imageDesc: "screenshot of website",
      link: "https://group9-grab-gadget.herokuapp.com/",
      repository: "https://github.com/aneslin/grab-and-go-gadgets",
    },

    {
      name: "Mountain Lake Bed and Breakfast Website",
      description:
        "A full stack application using Handlebars,  Express.js and Squelize to create a website for a fictional bed and breakfast",
      image:
      bb,
      imageDesc: "web page screen shot of b&b website",
      link: "https://mountainlake.herokuapp.com/",
      repository: "https://github.com/aneslin/Mountain-Lake-Bed-and-Breakfast",
    },

    {
      name: "TRAX Stock and Crypto Tracker",
      image: trax,
      description:
        "HTML, CSS and Javascript front end application that uses APIs to pull data from financial data exchanges. Users can save symbols for easy access ",
      imageDesc: "Trax stock and crypto app",
      link: "https://aneslin.github.io/trax-crypto-stock-tracker/",
      repository: "https://github.com/aneslin/trax-crypto-stock-tracker",
    },

    {
      name: "Professional Portfolio",
      image: portfolio,
      description:
        "Previous iteration of professional portfolio done in HTML and CSS ",
      imageDesc: "Professional portfolio screenshot",
      link: "https://aneslin.github.io/professional-portfolio/",
      repository: "https://github.com/aneslin/professional-portfolio",
    },

    {
      name: "Tech Blog",
      image: techblog,
      description:
        "Full stack application using Mysql, Squelize, Expressjs, and Bootstrap to create a blogging platform",
      imageDesc: "Professional portfolio screenshot",
      link: "https://aneslin-tech-blog.herokuapp.com/",
      repository: "https://github.com/aneslin/tech-blog",
    },

    {
      name: "Weather Dashboard",
      image: weather,
      description:
        "HTML, Bootstrap and Javascript app that makes calls to get weather information and saves results.  API for weather is disabled",
      imageDesc: "weather app screenshot",
      link: "https://aneslin.github.io/weather-dashboard/",
      repository: "https://github.com/aneslin/weather-dashboard",
    },


    {
      name: "Item-Remap",
      description:
        "A script to extract, clean and Transform Aleph item data. Uses Python and SQL with a link to an Oracle database the cx_oracle module",
      image: item,
      imageDesc: "placeholder",
      link: "https://github.com/5-C-Folio/item-remap",
      repository: "https://github.com/5-C-Folio/item-remap",
    },
  ];

  return (
    <Container className='pb-5' >
      <h2>Projects</h2>
      <Row>
        
      {projects.map((project, i) => (
        <Col md={6} sm={12} key={i} >
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            image_desc={project.imageDesc}
            link={project.link}
            repository={project.repository}
          ></Project>
        </Col>
      ))}
      
      </Row>
    </Container>
  );
};
export default Portfolio;
