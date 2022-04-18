import React from "react";
import Project from "../Project/Project";

const Portfolio = function () {
  const projects = [
    {name:"Item-Remap", description: "A Python script to extract, clean and Transform Aleph item data", 
    image:'http://placekitten.com/200/200', imageDesc:"placeholder", link:"https://github.com/5-C-Folio/item-remap" },
    {name:"Item-Remap", description: "A Python script to extract, clean and Transform Aleph item data", 
    image:'http://placekitten.com/200/200', imageDesc:"placeholder", link:"https://github.com/5-C-Folio/item-remap" },
    {name:"Item-Remap", description: "A Python script to extract, clean and Transform Aleph item data", 
    image:'http://placekitten.com/200/200', imageDesc:"placeholder", link:"https://github.com/5-C-Folio/item-remap" }
  ];




//const projeMap = function(array){
    //array.map(project, i) => 
  //  {}
//}


  return (
    <div className="row d-flex flex-row mt-4 card-deck">
      
      {projects.map((project,i) => 
      <div key = {i}  className="col-sm-12 col-md-6 col-lg-4 mb-3">
       <Project
       name = {project.name}
       description={project.description}
       image={project.image}
       image_desc={project.imageDesc}
       link = {project.link}


       ></Project>
        </div>
      )}



</div>

     

  );
};
export default Portfolio