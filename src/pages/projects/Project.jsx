import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Meta from "../../components/meta";
import Crosshatch from "../../components/decorators/Crosshatch";
import { API_GetProjectById, ProjectPath } from "../../data/projects";
import { API_GetAwards, FilterAwardsByProjectId } from "../../data/awards";
import { API_GetCompanyById } from "../../data/companies";

function Page(props) {
  const [Project, setProject] = useState(null);
  const [Company, setCompany] = useState(null);
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    const { projectId } = props;

    async function fetchData() {
      const project = await API_GetProjectById(projectId);
      setProject(project);

      const company = await API_GetCompanyById(project.companyId);
      setCompany(company);

      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchData();
  }, []);

  if (!Project || !Company || !Awards)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <Meta
        section={`Projects > ${Project.client} ${Project.name}`}
        description={`Projects > ${Project.client} ${Project.name} - ${Project.metaDescription}`}
        image={Project.metaImage}
        url={`/projects/${ProjectPath(Project)}`}
      />

      <main className={`theme-${Company.theme}`}>
        <Section className="pb-2">
          <Row className="py-4">
            <Col>
              <h1 className="hero">{Project.client}</h1>
              <h2>{Project.name}</h2>
            </Col>
          </Row>
        </Section>

        <Crosshatch className={`theme-${Company.theme}`} />

        <Section className="py-6 background-solid">
          <Row>
            <Col>
              <h3 className="mb-1 gradient-text">{Project.year}</h3>
              {Project.paragraphs.map((paragraph, index) => (
                <p key={index} className="large mb-1 gradient-text">
                  {paragraph}
                </p>
              ))}
            </Col>
            <Col>
              <Link
                to={Project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="video-crossfade"
              >
                <div className="slides">
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `url(/projects/${Project.videoTheme}/0.jpg)`,
                    }}
                  />
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `url(/projects/${Project.videoTheme}/1.jpg)`,
                    }}
                  />
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `url(/projects/${Project.videoTheme}/2.jpg)`,
                    }}
                  />
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `url(/projects/${Project.videoTheme}/3.jpg)`,
                    }}
                  />
                  <div
                    className="slide"
                    style={{
                      backgroundImage: `url(/projects/${Project.videoTheme}/4.jpg)`,
                    }}
                  />
                  <span className="material-icons">play_arrow</span>
                </div>
              </Link>

              {FilterAwardsByProjectId(Awards, Project.id).map((award) => (
                <article className="gold-text" key={award.id}>
                  <h4 className="large mt-1">
                    <span>{award.prize} </span>
                    <span className="material-icons">{award.icon}</span>
                  </h4>
                  <p>{award.event}</p>
                  <p className="small">{award.description}</p>
                </article>
              ))}
            </Col>
          </Row>
        </Section>

        <Crosshatch className={`theme-${Company.theme}`} />

        <Section className="pt-4 pb-10">
          <Row>
            <Col>
              <h3 className="hero">
                Read more about my career at {Company.name}
              </h3>
              <Link
                role="button"
                className={`mt-2 button-read-more outline theme-${Company.theme}`}
                aria-label={`Read more about my career at ${Company.name}`}
                to={`/career/${Company.theme}`}
              >
                <span>{Company.name}</span>
                <span className="material-icons">arrow_forward_ios</span>
              </Link>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
