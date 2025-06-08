import React, { useState, useEffect } from "react";
import Section from "../layout/Section";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";

import { API_GetCompanies } from "../../data/companies";
import { API_GetProjects, ProjectPath } from "../../data/projects";
import { FooterProjectIds } from "../../data/variables";
import ContactLinks from "./ContactLinks";

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
      <Section className="py-3">
        <Row>
          <Col className="span-3">
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

            <Link
              className="text-thin"
              target="_blank"
              rel="noopener noreferrer"
              to="https://colibridigital.io/"
            >
              Colibri Digital <em>(coming soon)</em>
            </Link>
          </Col>
          <Col className="span-4">
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
          <Col className="span-2">
            <Link to="/awards">
              <h2 className="h3 text-thin">
                <span>AWARDS </span>
                <span className="material-icons">emoji_events</span>
              </h2>
            </Link>

            <Link to="/awards" className="mb-1">
              My Awards...
            </Link>

            <Link to="/contact">
              <h2 className="h3 text-thin">
                <span>CONTACT </span>
                <span className="material-icons">account_circle</span>
              </h2>
            </Link>

            <ContactLinks />
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
