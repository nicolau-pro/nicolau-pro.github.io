import React from "react";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";
import { ProjectPath } from "../../data/projects";
import Line from "../layout/Line";
import Icon from "../atoms/Icon";

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
    <Row className="my-1 mobile-no-gap" {...rest}>
      <Col className="mobile-centered">
        <img
          loading="lazy"
          className="award-logo"
          src={`/awards/${Award.logo}`}
          alt={`${Award.prize} ${Award.event} ${Award.year}`}
        />
      </Col>
      <Col className="span-6 mobile-centered">
        <h3 className="gradient-text">
          <span className="prize">{Award.prize} </span>
          <Icon>{Award.icon}</Icon>
        </h3>
        <h4 className="gradient-text">
          <span className="event"> {Award.event}</span>
          <span className="event"> {Award.year}</span>
        </h4>
        <h5 className="gradient-text">{Award.description}</h5>

        {(companyButton || projectButton) && (
          <Line className="links mt-1 mobile-centered">
            {projectButton && Project && (
              <Link
                role="button"
                className={`button-small button-award ${Company.theme}`}
                to={`/projects/${ProjectPath(Project)}`}
                aria-label={`Read more about my career at ${Company.name}`}
              >
                TO PROJECT
                <Icon>arrow_forward_ios</Icon>
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
                <Icon>arrow_forward_ios</Icon>
              </Link>
            )}
          </Line>
        )}
      </Col>
    </Row>
  );
};

export default Award;
