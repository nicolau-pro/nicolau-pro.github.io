import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import { API_GetCompanies } from "../../data/companies";
import { GetJobsByCompanyId } from "../../data/jobs";
import { MonthYear, EmploymentPeriod } from "../../data/utils";

function Page() {
  const [Companies, setCompanies] = useState(null);

  useEffect(() => {
    async function fetchCompanies() {
      const data = await API_GetCompanies();
      setCompanies(data);
    }

    fetchCompanies();
  }, []);

  if (!Companies) return <p className="my-6">Loading...</p>;

  return (
    <>
      <title>Career - Radu Nicolau</title>
      <meta name="description" content="My career" />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Career</h1>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <ul className="spaced-2 no-bullets">
                {Companies.map((company) => (
                  <li key={company.id}>
                    <Link to={`/career/${company.theme}`}>
                      <h2>{company.name}</h2>
                      <p>
                        <span>
                          {MonthYear(EmploymentPeriod(company.id).from)}
                        </span>
                        <span> - </span>
                        <span>
                          {MonthYear(EmploymentPeriod(company.id).to)}
                        </span>
                      </p>
                      <p className="large mt-1">{company.description}</p>
                      <ul>
                        {GetJobsByCompanyId(company.id).map((job, index) => (
                          <li key={index}>{job.title}</li>
                        ))}
                      </ul>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
