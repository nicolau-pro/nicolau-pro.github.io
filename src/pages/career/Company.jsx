import { Link } from "react-router";

import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Crosshatch from "../../components/decorators/Crosshatch";

import { GetCompany } from "../../data/companies";
import { GetJobs } from "../../data/jobs";
import { GetTech } from "../../data/tech";
import { GetAwards } from "../../data/awards";
import { MonthYear } from "../../data/utils";

function Page(props) {
  const { companyName } = props;

  const Company = GetCompany(companyName);
  const Jobs = GetJobs(companyName);
  const Awards = GetAwards(companyName);
  const Testimonials = Company.testimonials || [];

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
            <Section className="background-solid pt-3 pb-5">
              <Row>
                <Col>
                  <h2 className="gradient-text pb-1">Awards</h2>
                </Col>
              </Row>
              {Awards.map((award, index) => (
                <Row key={index}>
                  <details className="award ">
                    <summary>
                      <img
                        className="award-logo"
                        src={`/awards/${award.logo}`}
                        alt={`${award.prize} ${award.event} ${award.year}`}
                      />
                      <span className="text">
                        <span className="h3 gradient-text">
                          <span className="prize">{award.prize} </span>
                          <span className="material-icons">{award.icon}</span>
                        </span>
                        <span className="h4 gradient-text">
                          <span className="event"> {award.event}</span>
                          <span className="event"> {award.year}</span>
                        </span>
                        <span className="h5 gradient-text">
                          {award.description}
                        </span>
                      </span>
                    </summary>
                    <Row>
                      <Col>awards</Col>
                    </Row>
                  </details>
                </Row>
              ))}
            </Section>
          </>
        )}

        {Testimonials.length > 0 && (
          <>
            <Crosshatch />
            <Section className="pt-3 pb-5">
              <Row>
                <Col>
                  <h2>Testimonials</h2>
                </Col>
              </Row>

              {Testimonials.map((testimonial, index) => (
                <Row className="mt-2" key={index}>
                  <details className="testimonial">
                    <summary>
                      <h3>{testimonial.name}</h3>
                      <span className="p small">{testimonial.position}</span>
                      <span className="p large mt-1">
                        <em>"{testimonial.quote}"</em>
                      </span>
                    </summary>
                    <Row>
                      <Col>
                        <Link
                          to={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="portrait">
                            {[...Array(4)].map((_, index) => (
                              <div
                                key={index}
                                className={`layer-${index}`}
                                style={{
                                  backgroundImage: `url(/portraits/${testimonial.media}/${testimonial.media}-${index}.jpg)`,
                                }}
                              />
                            ))}
                          </div>
                        </Link>
                      </Col>
                      <Col className="span-3">
                        <p className="mb-2">
                          <em>{testimonial.testimonial}</em>
                        </p>
                        <Link
                          to={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{testimonial.name} on LinkedIn </span>
                          <span className="material-icons">open_in_new</span>
                        </Link>
                      </Col>
                    </Row>
                  </details>
                </Row>
              ))}
            </Section>
          </>
        )}
      </main>
    </>
  );
}

export default Page;
