const Companies = [
  {
    name: "Blippar",
    description:
      "One of the UK's first tech unicorns, specialises in Augmented Reality (AR) content creation and publishing to any smart phone, tablet and the web.",
    details:
      "It was founded in 2011 and I joined as employee number 16. By the time of its Series D round of funding in early 2016, Blippar had been doubling down on its broader machine learning and AI efforts, with 60 engineers in its San Francisco and Mountain View offices, and 300 employees spread across 14 offices globally, reaching 500 in 2018.",
    meta: {
      description:
        "One of the UK's first tech unicorns, specialises in Augmented Reality (AR) content creation and publishing to any smart phone, tablet and the web.",
    },
    testimonials: [
      {
        name: "Erwan Maigret",
        position: "Lead Augmented Reality API Engineer",
        link: "https://www.linkedin.com/in/erwanmaigret/",
        quote: "Nothing stops him",
        testimonial:
          "Radu is the swiss-army knife of 3D and AR. You can ask him to build anything and he'll manage to make it work in no time, covering all aspects from programming to 3D authoring and animation. On top of that he's got a great sense of design and provides compelling solutions ready to be used as-is. He's definitely a key contributor if you're on aggressive schedule and need to cover complex technical challenges. Nothing stops him.",
        media: "Erwan",
      },
      {
        name: "Hermes Frangoudis",
        position: "Augmented Reality Solutions engineer",
        link: "https://www.linkedin.com/in/hermesfrangoudis/",
        quote: "Never ceased to impress",
        testimonial:
          "Worked with Radu on various projects over the years at Blippar. It was a pleasure getting to work with Radu, he never ceased to impress me with his deep graphics and 3D knowledge. Every project that we worked on Radu always managed to show me something new.",
        media: "Hermes",
      },
      {
        name: "Can Saner",
        position: "Senior JS/AR Developer - Team Lead",
        link: "https://www.linkedin.com/in/cansaner/",
        quote: "Always impressed with his remarkable problem solving ability",
        testimonial:
          "Radu worked with me at Blippar in many customer projects, on different fields such as managing image assets, 3D modelling, developing animations and coding pure Javascript. Radu takes a great deal of pride in making any digital scene and asset as realistic as it can be and he works very hard to achieve this through creative and innovative ways that no other can think of. He often offered to help other members in their projects and always impressed me with his remarkable problem solving ability.",
        media: "Can",
      },
    ],
  },
  {
    name: "MRMC",
    description:
      "Mark Roberts Motion Control is a leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    details:
      "Delivering Oscar-Winning Engineering for over 50 Years! The leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    meta: {
      description:
        "Mark Roberts Motion Control (MRMC) is a leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    },
    testimonials: [
      {
        name: "Assaff Rawner",
        position: "CEO at Mark Roberts Motion Control",
        link: "https://www.linkedin.com/in/assaff-rawner-08371626/",
        quote: "Better than anyone I have ever met before or since",
        testimonial:
          "Radu did some amazing UI/UX work for us at MRMC. Not only is he skilled at easily understand and breaking down complex software tasks into fantastic and beautiful UIs for our desktop robotic control software, he is also a very skilled developer and programmer in his own right and seemed to understand front-end website and web-app development better than anyone I have ever met before or since. It was a sad day when he left.",
        media: "Assaff",
      },
      {
        name: "Rashad Kabbara",
        position: "Director of eCommerce Robotics / Head of Embedded Systems",
        link: "https://www.linkedin.com/in/assaff-rawner-08371626/",
        quote: "Produced amazing results in half the time I was expecting",
        testimonial:
          "I had the pleasure to work with Radu on two cutting-edge robotic projects, in which he was responsible for the design, implementation and maintenance of the UI of a highly complex Software solution. Radu produced amazing results in often half the time I was expecting, showed a high degree of design integrity and attention to detail. I highly recommend Radu for any UI/UX, and hope to cross paths with him again on future projects!",
        media: "Rashad",
      },
    ],
  },
];

const CompaniesList = Companies.map((item) => item.name.toLowerCase());

function GetCompany(name) {
  const output = Companies.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return output ? output : null;
}

export { Companies, CompaniesList, GetCompany };
