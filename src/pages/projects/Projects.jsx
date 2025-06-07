import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Meta from "../../components/meta";
import Crosshatch from "../../components/decorators/Crosshatch";
import { API_GetProjects } from "../../data/projects";
import {
  API_GetAwards,
  CountAwardsByProjectId,
  FilterAwardsByProjectId,
} from "../../data/awards";
import { API_GetCompanies, FindCompanyById } from "../../data/companies";

function Page() {
  const [Projects, setProjects] = useState(null);
  const [Companies, setCompanies] = useState(null);
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    async function fetchAwards() {
      const projects = await API_GetProjects();
      setProjects(projects);

      const companies = await API_GetCompanies();
      setCompanies(companies);

      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchAwards();
  }, []);

  if (!Projects || !Companies || !Awards)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <Meta
        section="Projects"
        description="Award-winning Campains and Projects"
        image="/social/projects.jpg"
        url="/projects"
      />

      <main>
        <Section className="projects pb-4">
          <Row>
            <Col>
              <h1 className="hero shade">Projects</h1>
            </Col>
          </Row>
        </Section>
        {Projects.length > 0 &&
          Projects.map((project) => (
            <React.Fragment key={project.id}>
              <Section
                className={`section-career ${
                  FindCompanyById(Companies, project.companyId).theme
                } py-2`}
              >
                <Row>
                  <Col className="span-3">
                    <h2>{project.client}</h2>
                    <h3>{project.name}</h3>
                  </Col>
                  <Col className="span-2 pt-2">
                    <Link
                      role="button"
                      className={`career-read-more outline`}
                      // aria-label={`Read more about my career at ${company.name}`}
                      to={`/career/${
                        FindCompanyById(Companies, project.companyId).theme
                      }`}
                      aria-label={`To project: ${project.client} ${project.name}`}
                    >
                      <span>To Project</span>
                      <span className="material-icons">arrow_forward_ios</span>
                    </Link>
                  </Col>
                </Row>
              </Section>
              <Section
                key={project.id}
                className="background-cover"
                style={{
                  backgroundImage: `url(${project.metaImage}`,
                }}
              >
                <Row className="pt-4 pb-12 blurred-gradient">
                  <Col className="span-3">
                    <p className="large">{project.metaDescription}...</p>
                    <p className="mt-1">
                      <span>{project.year}</span>
                      <span> • </span>
                      <span>
                        {FindCompanyById(Companies, project.companyId).name}
                      </span>
                    </p>
                    <p className="small">
                      <span>{CountAwardsByProjectId(Awards, project.id)}</span>
                      <span>
                        {" "}
                        Award
                        {CountAwardsByProjectId(Awards, project.id) > 1
                          ? "s"
                          : ""}{" "}
                      </span>

                      {Array.from({
                        length: CountAwardsByProjectId(Awards, project.id),
                      }).map((_, i) => (
                        <span className="material-icons" key={i}>
                          emoji_events
                        </span>
                      ))}
                    </p>
                    <Link
                      role="button"
                      className={`mt-3 career-read-more theme-${
                        FindCompanyById(Companies, project.companyId).theme
                      }`}
                      aria-label={`Read more about my career at ${
                        FindCompanyById(Companies, project.companyId).name
                      }`}
                      to={`/career/${
                        FindCompanyById(Companies, project.companyId).theme
                      }`}
                    >
                      <span>
                        {FindCompanyById(Companies, project.companyId).name}
                      </span>
                      <span className="material-icons">arrow_forward_ios</span>
                    </Link>
                  </Col>
                </Row>
              </Section>
            </React.Fragment>
          ))}

        {/* <Section>
          {Projects.length > 0 &&
            Projects.map((project) => (
              <Row className="mb-2" key={project.id}>
                <details>
                  <summary>
                    <h3>
                      {project.client} {project.name}
                    </h3>
                    <span>
                      <span>
                        {FindCompanyById(Companies, project.companyId).name}
                      </span>
                      <span> {project.year}</span>
                      {CountAwardsByProjectId(Awards, project.id) > 0 && (
                        <>
                          <span className="material-icons">emoji_events</span>
                          <span>
                            {CountAwardsByProjectId(Awards, project.id)} Award
                            {CountAwardsByProjectId(Awards, project.id) > 1
                              ? "s"
                              : ""}
                          </span>
                        </>
                      )}
                    </span>
                  </summary>
                  <Row>
                    <Col>
                      {project.paragraphs.map((paragraph, index) => (
                        <p key={index} className="large mb-1">
                          {paragraph}
                        </p>
                      ))}
                      {FilterAwardsByProjectId(Awards, project.id).map(
                        (award) => (
                          <article className="gold-text" key={award.id}>
                            <h4 className="large mt-1">
                              <span>{award.prize} </span>
                              <span className="material-icons">
                                {award.icon}
                              </span>
                            </h4>
                            <p>{award.event}</p>
                            <p className="small">{award.description}</p>
                          </article>
                        )
                      )}
                    </Col>
                    <Col>
                      <Link
                        to={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-crossfade"
                      >
                        <div className="slides">
                          <div
                            className="slide"
                            style={{
                              backgroundImage: `url(/projects/${project.videoTheme}/0.jpg)`,
                            }}
                          />
                          <div
                            className="slide"
                            style={{
                              backgroundImage: `url(/projects/${project.videoTheme}/1.jpg)`,
                            }}
                          />
                          <div
                            className="slide"
                            style={{
                              backgroundImage: `url(/projects/${project.videoTheme}/2.jpg)`,
                            }}
                          />
                          <div
                            className="slide"
                            style={{
                              backgroundImage: `url(/projects/${project.videoTheme}/3.jpg)`,
                            }}
                          />
                          <div
                            className="slide"
                            style={{
                              backgroundImage: `url(/projects/${project.videoTheme}/4.jpg)`,
                            }}
                          />
                          <span className="material-icons">play_arrow</span>
                        </div>
                      </Link>

                      <Link
                        role="button"
                        className={`mt-2 career-read-more theme-${
                          FindCompanyById(Companies, project.companyId).theme
                        }`}
                        aria-label={`Read more about my career at ${
                          FindCompanyById(Companies, project.companyId).name
                        }`}
                        to={`/career/${
                          FindCompanyById(Companies, project.companyId).theme
                        }`}
                      >
                        <span>
                          {FindCompanyById(Companies, project.companyId).name}
                        </span>
                        <span className="material-icons">
                          arrow_forward_ios
                        </span>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                  </Row>
                </details>
              </Row>
            ))}
        </Section> */}
      </main>
    </>
  );
}

export default Page;

// {
//   client: "Stylist Magazine",
//   name: "Olympic Edition",
//   year: 2012,
//   companyId: 1,
//   paragraphs: [
//     "Stylist used the augmented reality app Blippar to present Olympic fever at its finest, with their exclusive blippable issue. Thrilling content throughout, including videos, polls, live Olympic leader boards and Blipp to Buys make this issue something really special.",
//     "My first award winning campaign!",
//   ],
//   awardIds: [2],
//   videoLink: "https://youtu.be/HXIrDGeCWNo",
//   videoTheme: "stylist",
// },
