const Awards = [
  {
    companyName: "Blippar",
    prize: "Finalist",
    icon: "workspace_premium",
    event: "Mobile World Congress",
    year: 2015,
    description: "With Pepsi",
    meta: {
      description: "Finalist at the Mobile World Congress 2015 with Pepsi.",
    },
  },
  {
    companyName: "Blippar",
    prize: "Gold Winner",
    icon: "emoji_events",
    event: "Digital Impact Award",
    year: 2015,
    description: "Best Use of Digital from the Food & Beverage Sector",
    meta: {
      description:
        "Gold Winner at the Digital Impact Award 2015 for Best Use of Digital from the Food & Beverage Sector.",
    },
  },
];

function GetAwards(companyName) {
  const output = Awards.filter(
    (item) => item.companyName.toLowerCase() === companyName.toLowerCase()
  );
  return output ? output : null;
}

export { GetAwards };
