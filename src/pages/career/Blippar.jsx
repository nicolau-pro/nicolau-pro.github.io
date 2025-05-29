import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Crosshatch from "../../components/decorators/Crosshatch";

function Page() {
  return (
    <>
      <title>BLIPPAR - Radu Nicolau</title>
      <main className="theme-blippar">
        <meta
          name="description"
          content="RADU NICOLAU. A brief history of my work: the most successful projects and campaigns, the awards they brought and quotes from the team leads and product owners."
        />

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
                It was founded in 2011 and I joined as employee number 16. By
                the time of its Series D round of funding in early 2016, Blippar
                had been doubling down on its broader machine learning and AI
                efforts, with 60 engineers in its San Francisco and Mountain
                View offices, and 300 employees spread across 14 offices
                globally, reaching 500 in 2018.
              </h3>
            </Col>
          </Row>
        </Section>

        <Crosshatch />

        <Section>
          <Row>
            <Col className="pt-3 pb-1">
              <h2>My roles</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Mobile Augmented Reality Developer / UX-UI Designer</h3>
              <p>May 2012 - April 2018</p>
            </Col>
          </Row>
          <Row>
            <Col className="span-4">
              <p className="large">
                Directed, mentored, and supported a team of developers in the
                UK, US, Turkey, and Japan. Significantly increased the social
                media presence of various services and products by managing key
                client campaigns. Initiated internal controls by establishing
                and adhering standards for development. Projected a polished and
                professional demeanour throughout the service to successfully
                manage client campaigns with minimal negative feedback and quick
                turnarounds.
              </p>
              <ul>
                <li>
                  Defined UX/UI standards and supported the team with hands-on
                  approach and follow-up for development.
                </li>
                <li>
                  Optimized and enhanced departmental performance by overseeing
                  writing standards, documentation as well as established staff
                  induction sessions to boost staff skills and expertise.
                </li>
                <li>
                  Attained numerous awards and countless nominations for
                  cutting-edge campaigns.
                </li>
              </ul>
            </Col>

            <Col>
              <h4>TECH STACK:</h4>
              <ul className="small no-bullets">
                <li>3DS Max</li>
                <li>JavaScript</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Audition</li>
                <li>Adobe Premiere</li>
                <li>Python</li>
                <li>Blender</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT</li>
                <li>NODE</li>
                <li>iOS</li>
                <li>Android</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Lead Engineer/Senior Developer/UX-UI Specialist</h3>
              <p>May 2014 - April 2018</p>
            </Col>
          </Row>
          <Row>
            <Col className="span-4">
              <p className="large">
                Directed, mentored, and supported a team of developers in the
                UK, US, Turkey, and Japan. Significantly increased the social
                media presence of various services and products by managing key
                client campaigns. Initiated internal controls by establishing
                and adhering standards for development. Projected a polished and
                professional demeanour throughout the service to successfully
                manage client campaigns with minimal negative feedback and quick
                turnarounds.
              </p>
              <ul>
                <li>
                  Streamlined and operationalized application functionalities by
                  developing and optimizing Blippar's developer's portal,
                  scripting front end languages (React/JS), and creating demos.
                </li>
                <li>
                  Led development programme aimed at training, coaching, and
                  mentoring team of developers across globe, including UK, USA,
                  Turkey, Japan, and India, resulting in augmenting developers'
                  skills for UX/UI functional design alongside building AR
                  experiences.
                </li>
                <li>
                  Originated and launched an automation system for asset
                  compression that ensured the delivery of experiences on mobile
                  30 times faster.
                </li>
                <li>
                  Commended by top management for exemplary performance and won
                  many awards for big campaigns.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>TECH STACK:</h4>
              <ul className="small no-bullets">
                <li>3DS Max</li>
                <li>REACT</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Audition</li>
                <li>Adobe Premiere</li>
                <li>Python</li>
                <li>Blender</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT</li>
                <li>NODE</li>
                <li>iOS</li>
                <li>Android</li>
              </ul>
            </Col>
          </Row>
        </Section>

        <Crosshatch className="mt-5" />

        <Section className="background-solid">
          <Row>
            <Col className="py-5">
              <h2 className="gradient-text">Awards</h2>
              <ul className="gradient-text no-bullets spaced">
                <li>
                  <h3>Finalist</h3>
                  <h3>Mobile World Congress</h3>
                  <p>2015</p>
                  <h4>With Pepsi</h4>
                </li>
                <li>
                  <h3>Gold Winner</h3>
                  <h3>Digital Impact Award</h3>
                  <p>2015</p>
                  <h4>Best Use of Digital from the Food & Beverage Sector</h4>
                </li>
              </ul>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
