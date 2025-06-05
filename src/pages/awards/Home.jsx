import React, { useState, useEffect } from "react";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Award from "../../components/molecules/Award";

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

  if (Awards.length === 0) return <p className="my-6">Loading...</p>;

  return (
    <>
      <title>Awards - Radu Nicolau</title>
      <meta name="description" content="My awards" />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Awards</h1>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2 className="hero">
                Awards with respective companies and projects
              </h2>
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
