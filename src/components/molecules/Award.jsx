import React from "react";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";
import { ProjectPath } from "../../data/projects";
import Line from "../layout/Line";

const Award = (props) => {
  const {
    Award,
    Company,
    Project,
    links,
    companyButton,
    projectButton,
    ...rest
  } = props;

  return (
    <Row {...rest}>
      <Col>
        <img
          loading="lazy"
          className="award-logo"
          src={`/awards/${Award.logo}`}
          alt={`${Award.prize} ${Award.event} ${Award.year}`}
        />
      </Col>
      <Col className="span-6">
        <h3 className="gradient-text">
          <span className="prize">{Award.prize} </span>
          <span className="material-icons">{Award.icon}</span>
        </h3>
        <h4 className="gradient-text">
          <span className="event"> {Award.event}</span>
          <span className="event"> {Award.year}</span>
        </h4>
        <h5 className="gradient-text">{Award.description}</h5>

        {(companyButton || projectButton) && (
          <Line className="links mt-2">
            {projectButton && Project && (
              <Link
                role="button"
                className={`button-small button-award ${Company.theme}`}
                to={`/projects/${ProjectPath(Project)}`}
                aria-label={`Read more about my career at ${Company.name}`}
              >
                TO PROJECT
                <span className="material-icons">arrow_forward_ios</span>
              </Link>
            )}
            {companyButton && (
              <Link
                role="button"
                className={`button-small button-award ${Company.theme}`}
                to={`/career/${Company.theme}`}
                aria-label={`Read more about my career at ${Company.name}`}
              >
                {Company.name}
                <span className="material-icons">arrow_forward_ios</span>
              </Link>
            )}
          </Line>
        )}
      </Col>
    </Row>
  );
};

export default Award;
