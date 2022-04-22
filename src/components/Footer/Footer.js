import React from "react";
import github from "../../assets/images/GitHub-Mark-Light-32px.png"
import linkedin from "../../assets/images/In-White-34.png"


const Footer =  function(){



    return(

        <div className="p-1 m-1 row d-flex">

            <div className="col">
            <a href='https://github.com/aneslin'><img src={github} alt="github logo"></img></a>
            </div>

            <div className="col">
            <a href='https://www.linkedin.com/in/aaron-neslin-69225148/'><img src={linkedin} alt="linkedin logo"></img></a>
            </div>
    </div>


    )
}

export default Footer