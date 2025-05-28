import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Crosshatch from "../../components/decorators/Crosshatch";

function Page() {
  return (
    <main className="theme-blippar">
      <Section>
        <Row>
          <Col>
            <h1 className="hero">BLIPPAR</h1>
          </Col>
        </Row>
      </Section>

      <Crosshatch />

      <Section className="background-solid">
        <Row>
          <Col className="py-3">
            <h2 className="gradient-text">
              One of the UK's first tech unicorns, specialises in Augmented
              Reality (AR) content creation and publishing to any smart phone,
              tablet and the web.
            </h2>
            <h3 className="pt-1 gradient-text">
              It was founded in 2011 and I joined as employee number 16. By the
              time of its Series D round of funding in early 2016, Blippar had
              been doubling down on its broader machine learning and AI efforts,
              with 60 engineers in its San Francisco and Mountain View offices,
              and 300 employees spread across 14 offices globally, reaching 500
              in 2018.
            </h3>
          </Col>
        </Row>
      </Section>

      <Crosshatch />

      <Section>
        <Row>
          <Col className="py-3">
            <p className="pt-1">
              Stylist used the augmented reality app Blippar to present Olympic
              fever at its finest, with their exclusive blippable issue.
              Thrilling content throughout, including videos, polls, live
              Olympic leader boards and Blipp to Buys make this issue something
              really special. My first award winning campaign!
            </p>
          </Col>
        </Row>
      </Section>
    </main>
  );
}

export default Page;
