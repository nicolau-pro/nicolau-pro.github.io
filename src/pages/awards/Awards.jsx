import React, { useState, useEffect } from "react";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Meta from "../../components/meta";
import Award from "../../components/molecules/Award";
import Crosshatch from "../../components/decorators/Crosshatch";

import { API_GetAwards } from "../../data/awards";

function Page() {
  const [Awards, setAwards] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchCompanies();
  }, []);

  if (Awards.length === 0) return;
  <p className="my-6" id="Loading">
    Loading...
  </p>;

  return (
    <>
      <Meta
        section="Awards"
        description="Awards"
        image="/social/awards.jpg"
        url="/awards"
      />

      <main>
        <Section className="awards">
          <Row>
            <Col>
              <h1 className="hero shade">Awards</h1>
            </Col>
          </Row>
          <Crosshatch className="awards" />
        </Section>
        <Section>
          <Row>
            <Col className="pt-3 pb-2">
              <h2 className="hero">My Awards</h2>
              <p className="large">
                Alongside the corresponding companies {/*and projects */}
              </p>
            </Col>
          </Row>
        </Section>
        {Awards.length > 0 && (
          <Section className="pb-12">
            {Awards.map((award) => (
              <Award key={award.id} award={award} links={{ company: true }} />
            ))}
          </Section>
        )}
      </main>
    </>
  );
}

export default Page;
