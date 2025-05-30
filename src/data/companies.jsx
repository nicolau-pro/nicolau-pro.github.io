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
        name: "Erwan Maigret",
        position: "Lead Augmented Reality API Engineer",
        quote: "Nothing stops him",
        testimonial:
          "Radu is the swiss-army knife of 3D and AR. You can ask him to build anything and he'll manage to make it work in no time, covering all aspects from programming to 3D authoring and animation. On top of that he's got a great sense of design and provides compelling solutions ready to be used as-is. He's definitely a key contributor if you're on aggressive schedule and need to cover complex technical challenges. Nothing stops him.",
        face: [
          "https://www.r5.ro/media/people/Erwan-0.jpg",
          "https://www.r5.ro/media/people/Erwan-1.jpg",
          "https://www.r5.ro/media/people/Erwan-2.jpg",
          "https://www.r5.ro/media/people/Erwan-3.jpg",
        ],
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
