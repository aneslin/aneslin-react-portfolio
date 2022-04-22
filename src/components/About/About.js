import React from "react";


function About(){

    return (
        <div className="d-flex  mt-4 align-items-center">
        <div className="container pb-4">
            <h2>About me</h2>
            <div className="row align-items-center">
                <div className="col-12 col-md-6" ><img  className='container-fluid' src='../../assets/images/profile.jpg' alt="placeholder"></img></div>
                <div className="col-12 col-md-6 p-4"><p>Hi, I'm Aaron Neslin, library, programmer and aspiring web developer.  I have over seven years experience managing library systems both public
                    and academic libraries, with patron bases ranging from 5000 to 245,000. I have experience with most of the major library system on the market, including Polaris, Voyager
                    Aleph and FOLIO.  I've worked with major open-source digital repository systems such as Islandora and Hyrax, as well as vendor systems such as ContentDM and Digital Commons.
                    I am an intermediate Python programmer, which is my go to language for ETL processes, as well as a new Javascript programmer for website front ends and back ends.  I have many years of 
                    experience using SQL for data analysis.  I have worked with all major data format used in libraries, including MARC, MODS, Dublin Core and MARC-XML. </p>
                   <p> When I'm not hacking library systems or improving my programming skills, I like to garden, play table-top game and entertain my very needy rescue dog </p>
                       This page is proudly made using React.  
                       
                       </div>
            </div>

           </div>
        </div>
    )
}


export default About