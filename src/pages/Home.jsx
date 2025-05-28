import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Section from "../components/layout/Section";

function Page() {
  return (
    <>
      <title>Home - Radu Nicolau</title>
      <meta name="description" content="My career" />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Home</h1>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
