import React, { useState, useEffect } from "react";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
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

  if (Awards.length === 0) return <p className="my-6">Loading...</p>;

  const social = {
    author: "Radu Nicolau",
    description: `RADU NICOLAU > Awards`,
    article: `Awards`,
    image: `/social/awards.jpg`,
    imageAlt: `RADU NICOLAU - Awards`,
  };

  return (
    <>
      <title>Awards - Radu Nicolau</title>
      <meta name="description" content="My awards" />

      <meta property="article:author" content={social.author} />
      <meta property="article:publisher" content={social.author} />
      <meta property="article:section" content={social.article} />

      <meta property="fb:app_id" content="966242223397117" />
      <meta property="og:title" content={social.description} />
      <meta property="og:description" content={social.description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />

      <meta property="og:url" content="/" />
      <meta property="og:site_name" content={social.author} />
      <meta property="og:image" content={social.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={social.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={social.description} />
      <meta name="twitter:description" content={social.description} />
      <meta name="twitter:image" content={social.image} />
      <meta name="twitter:image:alt" content={social.imageAlt} />
      <meta name="twitter:domain" content="r5.ro" />

      <main>
        <Section className="awards">
          <Row>
            <Col>
              <h1 className="hero">Awards</h1>
            </Col>
          </Row>
          <Crosshatch className="awards" />
        </Section>
        <Section>
          <Row>
            <Col>
              <h2 className="hero mt-1">My Awards</h2>
              <p className="large mb-1">
                With the corrsponding companies {/*and projects */}
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
