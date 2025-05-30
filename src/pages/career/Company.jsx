import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Crosshatch from "../../components/decorators/Crosshatch";

import { GetCompany } from "../../data/companies";
import { GetJobs } from "../../data/jobs";
import { GetTech } from "../../data/tech";
import { GetAwards } from "../../data/awards";
import { MonthYear, EmploymentPeriod } from "../../data/utils";

function Page(props) {
  const { companyName } = props;

  const Company = GetCompany(companyName);
  const Jobs = GetJobs(companyName);
  const Awards = GetAwards(companyName);

  return (
    <>
      <title>{`RADU NICOLAU > Careers > ${Company.name}`}</title>
      <main className={`theme-${companyName.toLowerCase()}`}>
        <meta
          name="description"
          content={`RADU NICOLAU > Careers > ${Company.name} - ${Company.meta.description}`}
        />

        <Section>
          <Row>
            <Col>
              <h1 className="hero">{Company.name.toUpperCase()}</h1>
            </Col>
          </Row>
        </Section>

        <Crosshatch />

        <Section className="background-solid">
          <Row>
            <Col className="py-3">
              <h2 className="gradient-text">{Company.description}</h2>
              <h3 className="pt-1 gradient-text">{Company.details}</h3>
            </Col>
          </Row>
        </Section>

        <Crosshatch />

        <Section className="pb-5">
          <Row>
            <Col className="pt-3">
              <h2>
                My role{Jobs.length > 1 ? "s" : ""} at {Company.name}
              </h2>
            </Col>
          </Row>

          {Jobs.map((job, index) => (
            <Row className="mt-2" key={index}>
              <details>
                <summary>
                  <h3>{job.title}</h3>
                  <span>{MonthYear(job.dates.from)}</span>
                  <span> - </span>
                  <span>{MonthYear(job.dates.to)}</span>
                </summary>
                <Row>
                  <Col className="span-4">
                    <p className="large">{job.description}</p>
                    <ul>
                      {job.bulletpoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col>
                    <article className="tech-stack">
                      <h4>TECH STACK:</h4>
                      <ul className="small no-bullets">
                        {job.tech.map((tech, index) => (
                          <li key={index}>
                            <span className="material-icons">
                              {GetTech(tech).icon}
                            </span>
                            <span> {tech}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Col>
                </Row>
              </details>
            </Row>
          ))}
        </Section>

        {Awards.length > 0 && (
          <>
            <Crosshatch />
            <Section className="background-solid">
              <Row>
                <Col className="py-5">
                  <h2 className="gradient-text">Awards</h2>
                  <ul className="gradient-text no-bullets spaced-2 mt-2">
                    {Awards.map((award, index) => (
                      <li key={index}>
                        <h3 className="award">
                          <span className="prize">{award.prize} </span>
                          <span className="material-icons">{award.icon}</span>
                          <span className="event"> {award.event}</span>
                          <span className="event"> {award.year}</span>
                        </h3>
                        <h4 className="description">{award.description}</h4>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Section>
          </>
        )}
      </main>
    </>
  );
}

export default Page;
