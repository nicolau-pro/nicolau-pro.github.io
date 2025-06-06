import React, { useState, useEffect } from "react";
// import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Meta from "../../components/meta";

import { Projects } from "../../data/projects";
import { Link } from "react-router";
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
            <Col className="pb-4">
              <h1 className="hero shade">Projects</h1>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col className="pb-4">
              <h2>Award-winning Campains and Projects</h2>
            </Col>
          </Row>
        </Section>
        <Section>
          {Projects.length > 0 &&
            Projects.map((project) => (
              <Row className="mt-2" key={project.id}>
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
                      <span className="material-icons">emoji_events</span>
                      <span>
                        {CountAwardsByProjectId(Awards, project.id)} Award
                        {CountAwardsByProjectId(Awards, project.id) > 1
                          ? "s"
                          : ""}
                      </span>
                    </span>
                  </summary>
                  <Row>
                    <Col>
                      {project.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </Col>
                    <Col>
                      <Link
                        href={project.videoLink}
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
                          <p>play</p>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4>Awards</h4>
                      {FilterAwardsByProjectId(Awards, project.id).map(
                        (award) => (
                          <p key={award.id}>{award.prize}</p>
                        )
                      )}
                    </Col>
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
