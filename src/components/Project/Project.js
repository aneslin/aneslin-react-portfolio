import React from "react";
import {Card} from 'react-bootstrap'
function Project(props) {
  const { name, description, image, image_desc, link, repository } = props;

  console.log(description);

  return (
    <Card className='m-2'  style ={{width: '24rem', height:"500px"}} key={link}>
     
        <a href={link}><img className="card-img-top img-fluid" src={image} alt={image_desc} /></a>
        <Card.Body >
           <h5 className="card-title ">{name}</h5>
           <div className="d-flex flex-column">
           <span className="align-bottom">
          <p className="card-text mt-auto">{description}</p>
          </span>
          </div>
          <Card.Footer>
          <a href={repository}>Github Link</a>
          </Card.Footer>
        </Card.Body>
      
    </Card>
  );
}
export default Project;
