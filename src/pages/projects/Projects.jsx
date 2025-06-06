import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Meta from "../../components/meta";
import Crosshatch from "../../components/decorators/Crosshatch";
import { Projects } from "../../data/projects";
import {
  API_GetAwards,
  CountAwardsByProjectId,
  FilterAwardsByProjectId,
} from "../../data/awards";
import { API_GetCompanies, FindCompanyById } from "../../data/companies";

function Page() {
  const [Companies, setCompanies] = useState(null);
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    async function fetchAwards() {
      const companies = await API_GetCompanies();
      setCompanies(companies);

      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchAwards();
  }, []);

  if (!Companies || !Awards)
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
        <Section className="projects">
          <Row>
            <Col>
              <h1 className="hero shade">Projects</h1>
            </Col>
          </Row>
          <Crosshatch className="projects" />
        </Section>
        <Section>
          <Row>
            <Col className="pt-3 pb-2">
              <h2>Award-winning Campains and Projects</h2>
              {/* <p className="large">
                Alongside the corresponding companies and projects 
              </p> */}
            </Col>
          </Row>
        </Section>
        <Section>
          {Projects.length > 0 &&
            Projects.map((project) => (
              <Row className="mb-2" key={project.id}>
                <details open>
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
                          <article className="gold-text">
                            <h4 key={award.id} className="large mt-1">
                              <span>{award.prize} </span>
                              <span className="material-icons">
                                {award.icon}
                              </span>
                            </h4>
                            <p key={award.id}>{award.event}</p>
                            <p key={award.id} className="small">
                              {award.description}
                            </p>
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
        </Section>
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
