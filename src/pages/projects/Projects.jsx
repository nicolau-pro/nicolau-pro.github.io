import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Row from "../../components/layout/Row";
import Line from "../../components/layout/Line";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import MetaTags from "../../components/MetaTags";
import { API_GetProjects, ProjectPath } from "../../data/projects";
import { API_GetAwards } from "../../data/awards";
import { API_GetCompanies, FindCompanyById } from "../../data/companies";

function Page() {
  const [Projects, setProjects] = useState(null);
  const [Companies, setCompanies] = useState(null);
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const projects = await API_GetProjects();
      setProjects(projects);

      const companies = await API_GetCompanies();
      setCompanies(companies);

      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchData();
  }, []);

  if (!Projects || !Companies || !Awards)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <MetaTags
        section="Projects"
        description="Award-winning Campains and Projects"
        image="/social/projects.jpg"
        url="/projects"
      />

      <main>
        <Section className="projects pb-4">
          <Row>
            <Col className="py-3">
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
                    <h3>
                      <span>{project.name}</span>{" "}
                      <span className="text-thin">{project.year}</span>
                    </h3>
                  </Col>
                  <Col className="span-2 pt-2"></Col>
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
                    <h4 className="large">{project.metaDescription}...</h4>

                    <Line className="mt-4">
                      <Link
                        role="button"
                        className={`button-read-more  theme-${
                          FindCompanyById(Companies, project.companyId).theme
                        }`}
                        to={`/projects/${ProjectPath(project)}`}
                        aria-label={`To project: ${project.client} ${project.name}`}
                      >
                        <span>To Project</span>
                        <span className="material-icons">
                          arrow_forward_ios
                        </span>
                      </Link>

                      <Link
                        role="button"
                        className={` button-read-more button-outline`}
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
                    </Line>
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
