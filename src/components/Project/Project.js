import React from "react";

function Project(props) {
  const { name, description, image, image_desc, link, repository } = props;

  console.log(description);

  return (
    <div className="card pd-2  " key={link}>
     
        <a href={link}><img className="card-img-top img-fluid" src={image} alt={image_desc} /></a>
        <div className="card-body">
           <h5 className="card-title ">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={repository}>Github Link</a>
        </div>
      
    </div>
  );
}
export default Project;
