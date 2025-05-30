import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import { Companies } from "../../data/companies";
import { GetJobs } from "../../data/jobs";
import { MonthYear, EmploymentPeriod } from "../../data/utils";

function Page() {
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
                  <li key={company.name}>
                    <Link to={`/career/${company.name.toLowerCase()}`}>
                      <h2>{company.name}</h2>
                      <p>
                        <span>
                          {MonthYear(EmploymentPeriod(company.name).from)}
                        </span>
                        <span> - </span>
                        <span>
                          {MonthYear(EmploymentPeriod(company.name).to)}
                        </span>
                      </p>
                      <p className="large mt-1">{company.description}</p>
                      <ul>
                        {GetJobs(company.name).map((job, index) => (
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
