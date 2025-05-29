import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import Section from "../../components/layout/Section";
import Crosshatch from "../../components/decorators/Crosshatch";
import { TechIcon } from "../../data/tech";

function Page() {
  const tech1 = [
    "3DS Max",
    "JavaScript",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Audition",
    "Adobe Premiere",
    "Python",
    "Blender",
    "HTML",
    "CSS",
    "GIT",
    "NODE",
    "iOS",
    "Android",
  ];
  const tech2 = [
    "3DS Max",
    "REACT",
    "JavaScript",
    "TypeScript",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Audition",
    "Adobe Premiere",
    "Python",
    "Blender",
    "HTML",
    "CSS",
    "GIT",
    "NODE",
    "iOS",
    "Android",
  ];
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
              <h1 className="hero">
                <span className="material-icons">token</span>BLIPPAR
              </h1>
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
            <Col className="pt-3">
              <h2>My roles at Blippar</h2>
            </Col>
          </Row>

          <Row className="mt-2">
            <details>
              <summary>
                <h3>Lead Engineer/Senior Developer/UX-UI Specialist</h3>
                <span>May 2014 - April 2018</span>
              </summary>
              <Row>
                <Col className="span-4">
                  <p className="large">
                    Directed, mentored, and supported a team of developers in
                    the UK, US, Turkey, and Japan. Significantly increased the
                    social media presence of various services and products by
                    managing key client campaigns. Initiated internal controls
                    by establishing and adhering standards for development.
                    Projected a polished and professional demeanour throughout
                    the service to successfully manage client campaigns with
                    minimal negative feedback and quick turnarounds.
                  </p>
                  <ul>
                    <li>
                      Streamlined and operationalized application
                      functionalities by developing and optimizing Blippar's
                      developer's portal, scripting front end languages
                      (React/JS), and creating demos.
                    </li>
                    <li>
                      Led development programme aimed at training, coaching, and
                      mentoring team of developers across globe, including UK,
                      USA, Turkey, Japan, and India, resulting in augmenting
                      developers' skills for UX/UI functional design alongside
                      building AR experiences.
                    </li>
                    <li>
                      Originated and launched an automation system for asset
                      compression that ensured the delivery of experiences on
                      mobile 30 times faster.
                    </li>
                    <li>
                      Commended by top management for exemplary performance and
                      won many awards for big campaigns.
                    </li>
                  </ul>
                </Col>
                <Col>
                  <article className="tech-stack">
                    <h4>TECH STACK:</h4>
                    <ul className="small no-bullets">
                      {tech2.map((tech, index) => (
                        <li key={index}>
                          <span className="material-icons">
                            {TechIcon(tech).icon}
                          </span>
                          <span> {tech}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Col>
              </Row>
            </details>
          </Row>

          <Row className="mt-2">
            <details>
              <summary>
                <h3>Mobile Augmented Reality Developer / UX-UI Designer</h3>
                <span>May 2012 - April 2018</span>
              </summary>
              <Row>
                <Col className="span-4">
                  <p className="large">
                    Directed a competent team of three, including web designer,
                    media specialist, and graphic artist and elevated the
                    expertise and skill levels of the members through coaching
                    and development activities.
                  </p>
                  <ul>
                    <li>
                      Defined UX/UI standards and supported the team with
                      hands-on approach and follow-up for development.
                    </li>
                    <li>
                      Optimized and enhanced departmental performance by
                      overseeing writing standards, documentation as well as
                      established staff induction sessions to boost staff skills
                      and expertise.
                    </li>
                    <li>
                      Attained numerous awards and countless nominations for
                      cutting-edge campaigns.
                    </li>
                  </ul>
                </Col>

                <Col>
                  <article className="tech-stack">
                    <h4>TECH STACK:</h4>
                    <ul className="small no-bullets">
                      {tech1.map((tech, index) => (
                        <li key={index}>
                          <span className="material-icons">
                            {TechIcon(tech).icon}
                          </span>
                          <span> {tech}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Col>
              </Row>
            </details>
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
