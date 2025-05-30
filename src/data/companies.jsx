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
];

function GetCompany(name) {
  const output = Companies.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return output ? output : null;
}

export { GetCompany };
