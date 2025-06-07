import React, { useState, useEffect } from "react";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";

import { API_GetProjectById, ProjectPath } from "../../data/projects";
import { API_GetCompanyById } from "../../data/companies";
import Line from "../layout/Line";

const Award = (props) => {
  const { award, links, ...rest } = props;
  const [Company, setCompany] = useState(null);
  const [Project, setProject] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const company = await API_GetCompanyById(award.companyId);
      setCompany(company);

      const project = await API_GetProjectById(award.projectId);
      setProject(project);
    }

    fetchData();
  }, []);

  if (!Company || !Project)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <Row {...rest}>
      <Col>
        <img
          loading="lazy"
          className="award-logo"
          src={`/awards/${award.logo}`}
          alt={`${award.prize} ${award.event} ${award.year}`}
        />
      </Col>
      <Col className="span-6">
        <h3 className="gradient-text">
          <span className="prize">{award.prize} </span>
          <span className="material-icons">{award.icon}</span>
        </h3>
        <h4 className="gradient-text">
          <span className="event"> {award.event}</span>
          <span className="event"> {award.year}</span>
        </h4>
        <h5 className="gradient-text">{award.description}</h5>

        <Line className="links mt-2">
          <Link
            role="button"
            className={`button-small button-outline button-award ${Company.theme}`}
            to={`/projects/${ProjectPath(Project)}`}
            aria-label={`Read more about my career at ${Company.name}`}
          >
            TO PROJECT
            <span className="material-icons">arrow_forward_ios</span>
          </Link>
          <Link
            role="button"
            className={`button-small  button-award ${Company.theme}`}
            to={`/career/${Company.theme}`}
            aria-label={`Read more about my career at ${Company.name}`}
          >
            {Company.name}
            <span className="material-icons">arrow_forward_ios</span>
          </Link>
        </Line>
      </Col>
    </Row>
  );
};

export default Award;
