import React from "react";

const Resume = function () {
  return (
    <div className="container pb-5  mb-3 ">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="border-bottom border-dark p-1 col-12">Resume</h2>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              <h5>Relevant Skills: </h5>Aleph ILS, Alma LSP, Fedora Commons,
              FOLIO LSP, GraphQL, Javascript, Linux, MARC, OCLC Connexion,
              Polaris ILS, Primo, Python, React, Solr, SPARQL, SQL, Web application development, XML,
              Voyager ILS{" "}
            </p>
          </div>
          <section>
          <h5 className="border-bottom border-dark">Experience</h5>
          <div>
            <p className="mb-0">
              <strong>Five Colleges Library Consortium</strong>, Amherst, MA
            </p>
            <ul className="mb-0">
              Five Colleges Library System Coordinator
              <li>
                Coordinate implementation of the Five Colleges FOLIO Project
              </li>
              <li>
                Extract and transform data from legacy ILS for ingestion into
                FOLIO
              </li>
              <li>
                Communicate with vendors on behalf of the Five Colleges FOLIO
                Project
              </li>
              <li>Plan and evaluate library system upgrade</li>
              <li>
                Provide leadership and expertise to Five Colleges FOLIO working
                groups
              </li>
              <li>Assist consortium members with data and workflows</li>
              <li>Plan integrations with external systems</li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="mb-0">
              <strong>Worcester Polytechnic Institute</strong>, Worcester, MA
            </p>
            <ul className="mb-0">
              Librarian for Academic Digital Strategies
              <li>Coordinated migration to Alma and Primo discovery service</li>
              <li>Served as administrator for Alma, Primo and EZProxy</li>
              <li>Investigated e-resource problems</li>
              <li>
                Developed and executed plans to add student work to modern
                repository software
              </li>
              <li>
                Collaborated with applications developers to construct a Hyrax
                Repository
              </li>
              <li>
                Worked with colleagues to improve functionality of library
                website
              </li>
              <li>Provided training on library systems and workflows</li>
            </ul>
          </div>
          <div className="mt-4 mb-3">
            <p className="mb-0">
              <strong>Hamilton College</strong>, Clinton, NY
            </p>
            <ul className="mb-0">
              Discovery and Delivery Systems Analyst
              <li>Coordinated migration to Alma and Primo discovery service</li>
              <li>
                Managed and enhanced Library systems including Alma, Voyager,
                Summon and EZProxy
              </li>
              <li>
                Integrated library systems with campus and INN-Reach consortia
                lending systems
              </li>
              <li>
                Maintained Islandora digital collections software and optimized
                Solr{" "}
              </li>
              <li>
                Authored scripts to automate and enhanced library workflows
              </li>
              <li>
                Designed digital preservation solutions and drafted policy
                statements{" "}
              </li>
            </ul>
          </div>
          <div className="my-4">
            <p className="mb-0">
              <strong>Onondaga County Public Library</strong>, Syracuse, NY
            </p>
            <ul className="mb-0">
              Integrated Technologies Librarian/Administrative Intern
              <li>Administered Polaris ILS in library consortium </li>
              <li>Managed staff permissions and circulation policy in ILS</li>
              <li>Provided technical support and instruction for all ILS functions</li>
              <li>Utilized software and TSQL to automate and optimize library workflows</li>
              <li>Produced statistical summaries using SQL</li>
              <li>Communicated with vendors to resolve software and hardware issues with library technology</li>
            </ul>
          </div>
</section>
<section>
          <h5 className="border-bottom border-dark">Education</h5>
        <p className="mb-0"><strong>Syracuse University</strong></p>
        <ul>
            <li>Masters of Library and Information Science</li>
            <li>Certificate of Advanced Study: Digital Libraries</li>

        </ul>
        <p className="mb-0"><strong>University Of Connecticut/Trilogy Learning</strong></p>
        <ul>
            <li>Certificate of Completion- Full-Stack Developer Bootcamp- prospective date May 2022</li>
        </ul>
        <ul>
            <p className="mb-0"><strong>Utica College</strong></p>
            <li>B.A.  in Philosophy</li>
        </ul>
</section>



        </div>
      </div>
    </div>
  );
};

export default Resume;
