import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import { API_GetCompanies } from "../../data/companies";
import { API_GetJobs } from "../../data/jobs";
import { FormatMonthYear, EmploymentPeriod } from "../../data/utils";
// import Crosshatch from "../../components/decorators/Crosshatch";

function Page() {
  const [Companies, setCompanies] = useState(null);
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const companies = await API_GetCompanies();
      setCompanies(companies);

      const jobs = await API_GetJobs();
      setJobs(jobs);
    }

    fetchCompanies();
  }, []);

  if (!Companies) return <p className="my-6">Loading...</p>;

  const social = {
    author: "Radu Nicolau",
    description: `RADU NICOLAU > Career`,
    article: `Career`,
    image: `/social/career.jpg`,
    imageAlt: `RADU NICOLAU - Career`,
  };

  return (
    <>
      <title>Career - Radu Nicolau</title>
      <meta name="description" content="My career" />

      <meta property="article:author" content={social.author} />
      <meta property="article:publisher" content={social.author} />
      <meta property="article:section" content={social.article} />

      <meta property="fb:app_id" content="966242223397117" />
      <meta property="og:title" content={social.description} />
      <meta property="og:description" content={social.description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />

      <meta property="og:url" content="/" />
      <meta property="og:site_name" content={social.author} />
      <meta property="og:image" content={social.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={social.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={social.description} />
      <meta name="twitter:description" content={social.description} />
      <meta name="twitter:image" content={social.image} />
      <meta name="twitter:image:alt" content={social.imageAlt} />
      <meta name="twitter:domain" content="r5.ro" />

      <main>
        <Section className="career">
          <Row>
            <Col className="pb-4">
              <h1 className="hero">Career</h1>
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
                    <p>
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
              className={`section-career ${company.theme}-jobs pt-3 pb-12`}
            >
              <Row>
                <Col>
                  {Jobs.filter((job) => job.companyId === company.id).map(
                    (job, index) => (
                      <h3 key={index}>{job.title}</h3>
                    )
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link
                    role="button"
                    className={`career-read-more theme-${company.theme}`}
                    aria-label={`Read more about my career at ${company.name}`}
                    to={`/career/${company.theme}`}
                  >
                    <span>Read more</span>
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
