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
