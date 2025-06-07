import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import MetaTags from "../../components/MetaTags";
import { API_GetCompanies } from "../../data/companies";
import { API_GetJobs } from "../../data/jobs";
import { FormatMonthYear, EmploymentPeriod } from "../../data/utils";

function Page() {
  const [Companies, setCompanies] = useState(null);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const companies = await API_GetCompanies();
      setCompanies(companies);

      const jobs = await API_GetJobs();
      setJobs(jobs);
    }

    fetchData();
  }, []);

  if (!Companies || !Jobs)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <MetaTags
        section="Career"
        description="Career"
        image="/social/career.jpg"
        url="/career"
      />

      <main>
        <Section className="career pb-4">
          <Row>
            <Col className="py-3">
              <h1 className="hero shade ">Career</h1>
            </Col>
          </Row>
        </Section>
        {Companies.map((company) => (
          <React.Fragment key={company.id}>
            <Section className={`section-career ${company.theme} py-2`}>
              <Row>
                <Col>
                  <h2>{company.name}</h2>
                  {Jobs.length > 0 && (
                    <p className="text-thin h3">
                      <span>
                        {FormatMonthYear(
                          EmploymentPeriod(Jobs, company.id).from
                        )}
                      </span>
                      <span> - </span>
                      <span>
                        {FormatMonthYear(EmploymentPeriod(Jobs, company.id).to)}
                      </span>
                    </p>
                  )}
                </Col>
              </Row>
            </Section>
            <Section
              key={company.id}
              className={`section-career ${company.theme}-jobs`}
            >
              <Row className="pt-4 pb-12 blurred-gradient">
                <Col>
                  {Jobs.filter((job) => job.companyId === company.id).map(
                    (job, index) => (
                      <h3 key={index} className="mt-1">
                        {job.title}
                      </h3>
                    )
                  )}

                  <Link
                    role="button"
                    className={`mt-4 button-read-more theme-${company.theme}`}
                    aria-label={`Read more about my career at ${company.name}`}
                    to={`/career/${company.theme}`}
                  >
                    <span>Details</span>
                    <span className="material-icons">arrow_forward_ios</span>
                  </Link>
                </Col>
              </Row>
            </Section>
          </React.Fragment>
        ))}
      </main>
    </>
  );
}

export default Page;
