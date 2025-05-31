const Jobs = [
  {
    companyId: 1,
    title: "Lead Engineer/Senior Developer/UX-UI Specialist",
    dates: {
      from: { month: 5, year: 2014 },
      to: { month: 4, year: 2018 },
    },
    description:
      "Directed, mentored, and supported a team of developers in the UK, US, Turkey, and Japan. Significantly increased the social media presence of various services and products by managing key client campaigns. Initiated internal controls by establishing and adhering standards for development. Projected a polished and professional demeanour throughout the service to successfully manage client campaigns with minimal negative feedback and quick turnarounds.",
    bulletpoints: [
      "Streamlined and operationalized application functionalities by developing and optimizing Blippar's developer's portal, scripting front end languages (React/JS), and creating demos.",
      "Led development programme aimed at training, coaching, and mentoring team of developers across globe, including UK, USA, Turkey, Japan, and India, resulting in augmenting developers' skills for UX/UI functional design alongside building AR experiences.",
      "Originated and launched an automation system for asset compression that ensured the delivery of experiences on mobile 30 times faster.",
      "Commended by top management for exemplary performance and won many awards for big campaigns.",
    ],
    tech: [
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
    ],
  },
  {
    companyId: 1,
    title: "Mobile Augmented Reality Developer / UX-UI Designer",
    dates: {
      from: { month: 5, year: 2012 },
      to: { month: 4, year: 2018 },
    },
    description:
      "Directed a competent team of three, including web designer, media specialist, and graphic artist and elevated the expertise and skill levels of the members through coaching and development activities.",
    bulletpoints: [
      "Defined UX/UI standards and supported the team with hands-on approach and follow-up for development.",
      "Optimized and enhanced departmental performance by overseeing writing standards, documentation as well as established staff induction sessions to boost staff skills and expertise.",
      "Attained numerous awards and countless nominations for cutting-edge campaigns.",
    ],
    tech: [
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
    ],
  },
  {
    companyId: 2,
    title: "UX/UI Designer",
    dates: {
      from: { month: 4, year: 2018 },
      to: { month: 10, year: 2018 },
    },
    description:
      "Directed all UX/UI components including 3D models and full documentation for implementation with Flair, MRMC's premier motion control software. This involved extensive expert user and client feedback gathering and loopback.",
    bulletpoints: [
      "Designed exceptional command features over camera movement. Flair precisely controls up to 500 axes of motion, is fully compatible with all motion control rigs, heads and accessories. Interfaces seamlessly with CGI packages. “Flair is the tool that makes your vision reality.”",
      "Created UX/UI for new websites and company web presence aligned with modern trends and fully responsive. Developing email signature, newsletter templates, and publishing creative standards to accommodate for limitations due to email sharing.",
    ],
    tech: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "3DS Max",
      "Three.js",
      "WebGL",
    ],
  },
  {
    companyId: 3,
    title: "UX UI Front End Developer",
    dates: {
      from: { month: 10, year: 2018 },
      to: { month: 9, year: 2019 },
    },
    description:
      "Developed https://www.aquacard.co.uk/ in a team of two developers along with many UX/UI design tasks. The website surpassed expected sales by 30% and got multiple awards! With fast loading on any device - far ahead of similar websites.",
    bulletpoints: [
      "Used React for rapid prototyping and fragment creation/testing/AMP validation and Umbraco CMS with ASP.net, passes all WCAG 2.0 accessibility standards, AMP ready and SEO friendly.",
    ],
    tech: [
      "REACT",
      "HTML",
      "Umbraco CMS",
      "C#",
      "ASP .NET",
      "SCSS",
      "JavaScript",
      "SEO",
      "Accessibility",
      "PWA",
      "GIT",
      "NODE",
      "AZURE",
    ],
  },
  {
    companyId: 4,
    title: "Senior Front End Developer",
    dates: {
      from: { month: 10, year: 2019 },
      to: { month: 2, year: 2021 },
    },
    description:
      "Leading the front end development for the main products' websites in a complex international team.",
    bulletpoints: [
      "My role is to set standards for React driven pages, SASS modular/flexible styles and integrate in a CMS solution.",
      "The results are 100% responsive, accessible, performant, SEO friendly and PWA/AMP ready websites.",
    ],
    tech: [
      "REACT",
      "HTML",
      "Freemarker",
      "CMS",
      "SCSS",
      "JaveScript",
      "SEO",
      "Accessibility",
      "PWA",
      "AMP",
      "GIT",
      "WEBPACK",
      "NODE",
    ],
  },
  {
    companyId: 5,
    title: "Senior Front End Engineer",
    dates: {
      from: { month: 2, year: 2021 },
      to: { month: 4, year: 2021 },
    },
    description:
      "Tasked with developing and augmenting the dealer's website https://pro.motorway.co.uk/.",
    bulletpoints: [
      "Adding new components, improving on the existing architecture and creating unit / snapshot tests for all the modules involved, working on both Mac and Windows machines for impeccable cross-browser support.",
    ],
    tech: [
      "REACT",
      "HTML",
      "JEST",
      "Unit Testing",
      "Storybook",
      "SCSS",
      "TypeScript",
      "SEO",
      "Accessibility",
      "GIT",
      "WEBPACK",
      "NODE",
      "PM2",
    ],
  },
];

function GetJobsByCompanyId(id) {
  const output = Jobs.filter((item) => item.companyId === id);
  return output ? output : null;
}

export { GetJobsByCompanyId };
