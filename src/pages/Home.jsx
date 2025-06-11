import React, { useEffect } from "react";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Section from "../components/layout/Section";

import { useAppState } from "../AppStateContext";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <title>Home - Radu Nicolau</title>
      <meta name="description" content="My career" />

      <main>
        <Section>
          <Row>
            <Col className="py-3">
              <h1 className="hero">Home</h1>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
