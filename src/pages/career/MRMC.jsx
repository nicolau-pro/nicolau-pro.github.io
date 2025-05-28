import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";

function Page() {
  return (
    <>
      <title>MRMC - Radu Nicolau</title>
      <meta
        name="description"
        content="Delivering Oscar-Winning Engineering for over 50 Years! The
                leading manufacturer and cutting-edge solutions supplier for
                motion control, automation, broadcast robotics, volumetric and
                remote image capture."
      />

      <main className="theme-mrmc">
        <Section>
          <Row>
            <Col>
              <h1 className="hero">MRMC</h1>
            </Col>
          </Row>
        </Section>
        <Section>
          <div className="crosshatch"></div>
        </Section>

        <Section className="background-solid">
          <Row>
            <Col className="py-3">
              <h2 className="gradient-text">
                Delivering Oscar-Winning Engineering for over 50 Years! The
                leading manufacturer and cutting-edge solutions supplier for
                motion control, automation, broadcast robotics, volumetric and
                remote image capture.
              </h2>
            </Col>
          </Row>
        </Section>

        <Section>
          <div className="crosshatch"></div>
        </Section>

        <Section>
          <Row>
            <Col className="py-3">
              <h3>FLAIR 7</h3>
              <p className="pt-1">
                Flair is MRMC’s premier motion control software, the tool that
                trully makes your vision reality. An award winning control
                software alongside the revolutionary Bolt X robot in 2020.
              </p>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
