import React, { useState, useEffect } from "react";
import { Link } from "react-router";

import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import MetaTags from "../../components/MetaTags";
import Crosshatch from "../../components/decorators/Crosshatch";
import Award from "../../components/molecules/Award";

import { API_GetCompanyById } from "../../data/companies";
import { API_GetJobsByCompanyId } from "../../data/jobs";
import { API_GetProjects, FindProjectById } from "../../data/projects";
import { API_GetTech } from "../../data/tech";
import { API_GetTestimonialsByCompanyId } from "../../data/testimonials";
import { API_GetAwardsByCompanyId } from "../../data/awards";

import { FormatMonthYear, FilterListByIds } from "../../data/utils";
import { useAppState } from "../../AppStateContext";

function Page(props) {
  const { setOutletReady } = useAppState();
  const { companyId } = props;

  const [Company, setCompany] = useState(null);
  const [Tech, setTech] = useState(null);
  const [Jobs, setJobs] = useState(null);
  const [Projects, setProjects] = useState(null);
  const [Testimonials, setTestimonials] = useState(null);
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await API_GetCompanyById(companyId);
      setCompany(data);

      const tech = await API_GetTech();
      setTech(tech);

      const companyJobs = await API_GetJobsByCompanyId(companyId);
      setJobs(companyJobs);

      const projects = await API_GetProjects();
      setProjects(projects);

      const testimonials = await API_GetTestimonialsByCompanyId(companyId);
      setTestimonials(testimonials);

      const awards = await API_GetAwardsByCompanyId(companyId);
      setAwards(awards);
    }

    fetchData();
  }, [companyId]);

  useEffect(() => {
    setOutletReady(
      Company && Projects && Tech && Jobs && Testimonials && Awards
    );
  }, [Company, Tech, Jobs, Projects, Testimonials, Awards]);

  if (!Company || !Projects || !Tech || !Jobs || !Testimonials || !Awards)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <MetaTags
        section={`Career > ${Company.name}`}
        description={`Career > ${Company.name} - ${Company.meta.description}`}
        image={`/social/${Company.theme}.jpg`}
        url={`/career/${Company.theme}`}
      />

      <main className={`theme-${Company.theme}`}>
        <Section>
          <Row>
            <Col className="py-3">
              <h1 className="hero">{Company.name.toUpperCase()}</h1>
            </Col>
          </Row>
        </Section>

        <Crosshatch className={`theme-${Company.theme}`} />

        <Section className="background-solid">
          <Row>
            <Col className="py-3">
              <h2
                className="gradient-text"
                dangerouslySetInnerHTML={{
                  __html: Company.description,
                }}
              />
              <h3
                className="pt-1 gradient-text"
                dangerouslySetInnerHTML={{
                  __html: Company.details,
                }}
              />
            </Col>
          </Row>
        </Section>

        <Crosshatch className={`theme-${Company.theme}`} />

        <Section className="pb-5">
          <Row>
            <Col className="pt-3 mobile-centered">
              <h2>
                My role{Jobs.length > 1 ? "s" : ""} at {Company.name}
              </h2>
            </Col>
          </Row>

          {Jobs.length > 0 &&
            Jobs.map((job, index) => (
              <Row className="mt-2" key={index}>
                <details>
                  <summary>
                    <h3>{job.title}</h3>
                    <span>{FormatMonthYear(job.dateFrom)}</span>
                    <span> - </span>
                    <span>{FormatMonthYear(job.dateTo)}</span>
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
                          {FilterListByIds(Tech, job.tech).map(
                            (tech, index) => (
                              <li key={index}>
                                {tech && (
                                  <span className="material-icons">
                                    {tech.icon}
                                  </span>
                                )}
                                <span> {tech.name}</span>
                              </li>
                            )
                          )}
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
            <Crosshatch className={`theme-${Company.theme}`} />
            <Section className="background-solid pt-3 pb-5">
              <Row>
                <Col className="mobile-centered">
                  <h2 className="gradient-text pt-1">Awards</h2>
                </Col>
              </Row>
              {Awards.map((award, index) => (
                <Award
                  key={index}
                  projectButton
                  Award={award}
                  Company={Company}
                  Project={FindProjectById(Projects, award.projectId)}
                />
              ))}
            </Section>
          </>
        )}

        {Testimonials.length > 0 && (
          <>
            <Crosshatch className={`theme-${Company.theme}`} />
            <Section className="pt-3 pb-12">
              <Row>
                <Col className="mobile-centered">
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
                                  backgroundImage: `url(/portraits/${testimonial.media}/${testimonial.media}-${index}.webp)`,
                                }}
                              />
                            ))}
                          </div>
                        </Link>
                      </Col>
                      <Col className="span-3">
                        <p className="mb-2">
                          <em>{testimonial.fullText}</em>
                        </p>
                        <Link
                          role="button"
                          to={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-small button-outline"
                          aria-label={`${testimonial.name} on LinkedIn. External link`}
                        >
                          <span className="mobile-hidden">
                            {testimonial.name} on
                          </span>
                          <span> LinkedIn </span>
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
