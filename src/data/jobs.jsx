const Jobs = [
  {
    companyId: 1,
    title: "Lead Engineer/Senior Developer/UX-UI Specialist",
    dateFrom: "2014-05-01",
    dateTo: "2018-04-01",
    description:
      "Directed, mentored, and supported a team of developers in the UK, US, Turkey, and Japan. Significantly increased the social media presence of various services and products by managing key client campaigns. Initiated internal controls by establishing and adhering standards for development. Projected a polished and professional demeanour throughout the service to successfully manage client campaigns with minimal negative feedback and quick turnarounds.",
    bulletpoints: [
      "Streamlined and operationalized application functionalities by developing and optimizing Blippar's developer's portal, scripting front end languages (React/JS), and creating demos.",
      "Led development programme aimed at training, coaching, and mentoring team of developers across globe, including UK, USA, Turkey, Japan, and India, resulting in augmenting developers' skills for UX/UI functional design alongside building AR experiences.",
      "Originated and launched an automation system for asset compression that ensured the delivery of experiences on mobile 30 times faster.",
      "Commended by top management for exemplary performance and won many awards for big campaigns.",
    ],
    tech: [1, 20, 16, 24, 5, 4, 3, 6, 19, 10, 14, 12, 13, 17, 15, 7],
  },
  {
    companyId: 1,
    title: "Mobile Augmented Reality Developer / UX-UI Designer",
    dateFrom: "2012-05-01",
    dateTo: "2018-04-01",
    description:
      "Directed a competent team of three, including web designer, media specialist, and graphic artist and elevated the expertise and skill levels of the members through coaching and development activities.",
    bulletpoints: [
      "Defined UX/UI standards and supported the team with hands-on approach and follow-up for development.",
      "Optimized and enhanced departmental performance by overseeing writing standards, documentation as well as established staff induction sessions to boost staff skills and expertise.",
      "Attained numerous awards and countless nominations for cutting-edge campaigns.",
    ],
    tech: [1, 16, 5, 4, 3, 6, 19, 10, 14, 12, 13, 17, 15, 7],
  },
  {
    companyId: 2,
    title: "UX/UI Designer",
    dateFrom: "2018-04-01",
    dateTo: "2018-10-01",
    description:
      "Directed all UX/UI components including 3D models and full documentation for implementation with Flair, MRMC's premier motion control software. This involved extensive expert user and client feedback gathering and loopback.",
    bulletpoints: [
      "Designed exceptional command features over camera movement. Flair precisely controls up to 500 axes of motion, is fully compatible with all motion control rigs, heads and accessories. Interfaces seamlessly with CGI packages. “Flair is the tool that makes your vision reality.”",
      "Created UX/UI for new websites and company web presence aligned with modern trends and fully responsive. Developing email signature, newsletter templates, and publishing creative standards to accommodate for limitations due to email sharing.",
    ],
    tech: [4, 5, 1, 13, 26],
  },
  {
    companyId: 3,
    title: "UX UI Front End Developer",
    dateFrom: "2018-10-01",
    dateTo: "2019-09-01",
    description:
      "Developed https://www.aquacard.co.uk/ in a team of two developers along with many UX/UI design tasks. The website surpassed expected sales by 30% and got multiple awards! With fast loading on any device - far ahead of similar websites.",
    bulletpoints: [
      "Used React for rapid prototyping and fragment creation/testing/AMP validation and Umbraco CMS with ASP.net, passes all WCAG 2.0 accessibility standards, AMP ready and SEO friendly.",
    ],
    tech: [20, 14, 25, 11, 8, 21, 16, 22, 2, 18, 13, 17, 9],
  },
  {
    companyId: 4,
    title: "Senior Front End Developer",
    dates: {
      from: "2019-10-01",
      to: "2021-02-01",
    },
    description:
      "Leading the front end development for the main products' websites in a complex international team.",
    bulletpoints: [
      "My role is to set standards for React driven pages, SASS modular/flexible styles and integrate in a CMS solution.",
      "The results are 100% responsive, accessible, performant, SEO friendly and PWA/AMP ready websites.",
    ],
    tech: [20, 14, 27, 28, 21, 16, 22, 2, 18, 29, 13, 30, 17],
  },
  {
    companyId: 5,
    title: "Senior Front End Engineer",
    dateFrom: "2021-02-01",
    dateTo: "2021-04-01",
    description:
      "Tasked with developing and augmenting the dealer's website https://pro.motorway.co.uk/.",
    bulletpoints: [
      "Adding new components, improving on the existing architecture and creating unit / snapshot tests for all the modules involved, working on both Mac and Windows machines for impeccable cross-browser support.",
    ],
    tech: [20, 14, 31, 32, 33, 21, 24, 22, 2, 13, 30, 17, 34],
  },
];

function GetJobsByCompanyId(id) {
  const output = Jobs.filter((item) => item.companyId === id);
  return output ? output : null;
}

async function API_GetJobById(id) {
  try {
    const response = await fetch(`http://localhost:3000/jobs/${id}`);
    if (!response.ok) {
      return null;
    }
    const job = await response.json();
    return job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

async function API_GetJobs() {
  try {
    const response = await fetch(`http://localhost:3000/jobs`);
    if (!response.ok) {
      return null;
    }
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}

async function API_GetJobsByCompanyId(companyId) {
  try {
    const response = await fetch(`http://localhost:3000/jobs`);
    if (!response.ok) {
      return null;
    }
    const jobs = await response.json();
    const companyJobs = jobs.filter((job) => job.companyId === companyId);
    console.log(companyJobs);
    return companyJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}

export {
  GetJobsByCompanyId,
  API_GetJobs,
  API_GetJobById,
  API_GetJobsByCompanyId,
};
