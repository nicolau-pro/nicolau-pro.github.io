import React, { useState, useEffect } from "react";
import Section from "../layout/Section";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";

import { API_GetCompanies } from "../../data/companies";
import { API_GetProjects, ProjectPath } from "../../data/projects";
import { FooterProjectIds } from "../../data/variables";
import ContactLinks from "./ContactLinks";

import { useAppState } from "../../AppStateContext";
import Icon from "../atoms/Icon";

const Footer = () => {
  const { setFooterReady } = useAppState();

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

  useEffect(() => {
    setFooterReady(Companies && Projects);
  }, [Companies, Projects]);

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
                <Icon>timeline</Icon>
              </h2>
            </Link>
            {Companies.map((company) => (
              <Link key={company.id} to={`/career/${company.theme}`}>
                {company.name}
              </Link>
            ))}
          </Col>
          <Col className="span-4">
            <Link to="/projects">
              <h2 className="h3 text-thin">
                <span>PROJECTS </span>
                <Icon>view_in_ar</Icon>
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
                <Icon>emoji_events</Icon>
              </h2>
            </Link>

            <Link to="/awards" className="mb-1">
              My Awards...
            </Link>

            <div className="mt-2 de"></div>

            <Link to="/contact">
              <h2 className="h3 text-thin">
                <span>CONTACT </span>
                <Icon>account_circle</Icon>
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
