import React, { useEffect } from "react";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Section from "../components/layout/Section";
import Crosshatch from "../components/decorators/Crosshatch";
import MetaTags from "../components/MetaTags";

import { useAppState } from "../AppStateContext";
import { Link } from "react-router";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="RADU NICOLAU - Welcome!"
        description="A brief history of my work in the UK, some of the most
                successful projects and campaigns with the awards they brought
                alongside the testimonials from the CEOs, team leads and
                brand/product owners"
        image="/social/radu-nicolau.jpg"
        url="/"
      />

      <main>
        <Section className="home">
          <Row>
            <Col className="py-5 span-4">
              <h1 className="hero">Welcome</h1>
              <h2>I'm Radu Nicolau</h2>
              <h3 className="mt-2 text-thin">
                Here's a brief history of my work in the UK, some of the most
                successful projects and campaigns with the awards they brought
                alongside the testimonials from the CEOs, team leads and
                brand/product owners.
              </h3>
            </Col>

            <Col className="span-3" />
          </Row>
          <Crosshatch />
        </Section>

        <Section className="home-career">
          <Row className="pt-6 pb-8 blurred-gradient">
            <Col className="span-4">
              <h2 className="hero">Career</h2>
              <h3 className="mt-1 text-thin">
                Since 2012, I've built a successful UK career, leading
                award-winning projects in AR, mobile, and web, consistently
                delivering innovative, high-impact solutions through strong
                technical skills and creative problem-solving.
              </h3>
              <Link
                to="/career"
                role="button"
                className="mt-2 button-read-more button-outline"
              >
                <h2 className="h3 text-thin">
                  <span>CAREER </span>
                  <span className="material-icons">arrow_forward_ios</span>
                </h2>
              </Link>
            </Col>
            <Col />
          </Row>
        </Section>

        <Section className="home-projects">
          <Crosshatch />
          <Row className="pt-6 pb-8 blurred-gradient">
            <Col className="span-4">
              <h2 className="hero">Projects</h2>
              <h3 className="mt-1 text-thin">
                Among my most important award-winning projects are interactive
                AR campaigns for Pepsi Max and Covergirl, the high-performance
                Lending Stream platform for Gain Credit, and building Blippar’s
                global developer portal, including its comprehensive
                documentation and demos.
              </h3>
              <Link
                to="/projects"
                role="button"
                className="mt-2 button-read-more button-outline"
              >
                <h2 className="h3 text-thin">
                  <span>PROJECTS </span>
                  <span className="material-icons">arrow_forward_ios</span>
                </h2>
              </Link>
            </Col>
            <Col />
          </Row>
        </Section>

        <Section className="home-awards">
          <Crosshatch />
          <Row className="pt-6 pb-8 blurred-gradient">
            <Col className="span-4">
              <h2 className="hero">Awards</h2>
              <h3 className="mt-1 text-thin">
                Here's a brief history of my work in the UK, some of the most
                successful projects and campaigns with the awards they brought
                and testimonials from the team leads and product owners.
              </h3>
              <Link
                to="/awards"
                role="button"
                className="mt-2 button-read-more button-outline"
              >
                <h2 className="h3 text-thin">
                  <span>AWARDS </span>
                  <span className="material-icons">arrow_forward_ios</span>
                </h2>
              </Link>
            </Col>
            <Col />
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
