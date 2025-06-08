import React from "react";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import { Contact } from "../../data/variables";

import MetaTags from "../../components/MetaTags";
import Crosshatch from "../../components/decorators/Crosshatch";
import { Link } from "react-router";
import ContactLinks from "../../components/molecules/ContactLinks";

function Page() {
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
            <Col className="py-6">
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
