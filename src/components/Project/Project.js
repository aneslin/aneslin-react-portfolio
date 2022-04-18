import React from "react";

function Project(props) {
  const {  name, description, image, image_desc, link } = props;

  console.log(description);

  return (
    <div className="card " key={link}>
      <a href={link}>
        <img className="card-img-top img-fluid" src={image} alt={image_desc} />
    <div className="card-body">
    <h5 className="card-title ">{name}</h5>
    <p className="card-text">{description}</p>
    

    </div>

      </a>
    </div>
  );
}
export default Project;
