import React, { useEffect } from "react";

import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";

import MetaTags from "../../components/MetaTags";
import Crosshatch from "../../components/decorators/Crosshatch";
import ContactLinks from "../../components/molecules/ContactLinks";

import { useAppState } from "../../AppStateContext";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Contact"
        description="Contact"
        image="/social/contact.jpg"
        url="/contact"
      />

      <main>
        <Section className="contact">
          <Row>
            <Col className="py-3">
              <h1 className="hero shade">Contact</h1>
            </Col>
          </Row>
          <Crosshatch className="awards" />
        </Section>
        <Section className="contact-links">
          <Row>
            <Col className="py-2">
              <ContactLinks />
            </Col>
          </Row>
          <Crosshatch className="awards" />
        </Section>
      </main>
    </>
  );
}

export default Page;
