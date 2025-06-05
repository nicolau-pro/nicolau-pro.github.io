import React, { useState, useEffect } from "react";
import Row from "../layout/Row";
import Col from "../layout/Col";
import { Link } from "react-router";

import { API_GetCompanyById } from "../../data/companies";

const Award = (props) => {
  const { award, links, ...rest } = props;
  const [Company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany(companyId) {
      const company = await API_GetCompanyById(companyId);
      setCompany(company);
    }

    if (links?.company) fetchCompany(award.companyId);
  }, []);

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

        <div className="links mt-1">
          {Company && (
            <Link
              className={`button-small button-award ${Company.theme}`}
              to={`/career/${Company.theme}`}
              aria-label={`Read more about my career at ${Company.name}`}
            >
              {Company.name}
            </Link>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Award;
