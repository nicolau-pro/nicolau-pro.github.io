import React, { useState, useEffect } from "react";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import MetaTags from "../../components/MetaTags";
import Award from "../../components/molecules/Award";
import Crosshatch from "../../components/decorators/Crosshatch";
import { API_GetAwards } from "../../data/awards";
import { useAppState } from "../../AppStateContext";

function Page() {
  const { setOutletReady } = useAppState();
  const [Awards, setAwards] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const awards = await API_GetAwards();
      setAwards(awards);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setOutletReady(Awards);
  }, [Awards]);

  if (!Awards)
    return (
      <p className="my-6" id="Loading">
        Loading...
      </p>
    );

  return (
    <>
      <MetaTags
        section="Awards"
        description="Awards"
        image="/social/awards.jpg"
        url="/awards"
      />

      <main>
        <Section className="awards">
          <Row>
            <Col className="py-3">
              <h1 className="hero shade">Awards</h1>
            </Col>
          </Row>
          <Crosshatch className="awards" />
        </Section>
        <Section>
          <Row>
            <Col className="pt-3 pb-2">
              <h2>My Awards</h2>
              <p className="large">
                Alongside the corresponding projects and companies
              </p>
            </Col>
          </Row>
        </Section>
        {Awards.length > 0 && (
          <Section className="pb-12">
            {Awards.map((award) => (
              <Award
                projectButton
                companyButton
                className="mb-2"
                key={award.id}
                award={award}
                links={{ company: true }}
              />
            ))}
          </Section>
        )}
      </main>
    </>
  );
}

export default Page;
