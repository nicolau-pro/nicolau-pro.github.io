import React, { useState, useEffect } from "react";
import Section from "../layout/Section";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";

import { API_GetCompanies } from "../../data/companies";
import { API_GetProjects, ProjectPath } from "../../data/projects";
import { Contact, FooterProjectIds } from "../../data/variables";

const Footer = () => {
  const [Companies, setCompanies] = useState(null);
  const [Projects, setProjects] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const companies = await API_GetCompanies();
      setCompanies(companies);

      const projects = await API_GetProjects();
      const footerProjects = projects.filter((project) =>
        FooterProjectIds.includes(project.id)
      );
      setProjects(footerProjects);
    }

    fetchData();
  }, []);

  if (!Companies || !Projects)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <footer>
      <Section className="py-2">
        <Row>
          <Col>
            <Link to="/career">
              <h2 className="h3 text-thin">
                <span>CAREER </span>
                <span className="material-icons">timeline</span>
              </h2>
            </Link>
            {Companies.map((company) => (
              <Link key={company.id} to={`/career/${company.theme}`}>
                {company.name}
              </Link>
            ))}
          </Col>
          <Col>
            <Link to="/projects">
              <h2 className="h3 text-thin">
                <span>PROJECTS </span>
                <span className="material-icons">view_in_ar</span>
              </h2>
            </Link>
            {Projects.map((project) => (
              <Link key={project.id} to={`/projects/${ProjectPath(project)}`}>
                {project.client} {project.name}
              </Link>
            ))}
            <Link to="/projects" className="text-thin">
              more projects...
            </Link>
          </Col>
          <Col>
            <Link to="/awards">
              <h2 className="h3 text-thin">
                <span>AWARDS </span>
                <span className="material-icons">emoji_events</span>
              </h2>
            </Link>

            <Link to="/awards">My Awards...</Link>

            <h2 className="h3 text-thin mt-2">Contact</h2>

            <Link
              to={`https://www.linkedin.com/in/${Contact.LinkedIn}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="h4 text-thin">
                <span className="material-icons">open_in_new</span>
                <span> Linked-in</span>
              </h3>
            </Link>

            <Link to={Contact.CV}>
              <h3 className="h4 text-thin">
                <span className="material-icons">picture_as_pdf</span>
                <span> C.V.</span>
              </h3>
            </Link>

            <Link to={`tel:${Contact.Phone}`}>
              <h3 className="h4 text-thin">
                <span className="material-icons">perm_phone_msg</span>
                <span> Call/SMS</span>
              </h3>
            </Link>

            <Link to={`mailto:${Contact.Email}`}>
              <h3 className="h4 text-thin">
                <span className="material-icons">email</span>
                <span> Email</span>
              </h3>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>© 2025 Radu Nicolau</p>
            <p className="small">
              All brands, logos, images and videos are copyright to their
              respective owners.
            </p>
          </Col>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
