const Awards = [
  {
    companyName: "Blippar",
    prize: "Grand Prix WINNER",
    icon: "star",
    event: "The Drum Marketing Awards",
    year: 2013,
    description: "Best Augmented Reality Experience",
    meta: {
      description:
        "Grand Prix Winner at The Drum Marketing Awards 2013 for Best Augmented Reality Experience.",
    },
    logo: "dma-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Effective Mobile Marketing Awards",
    year: 2012,
    description: "Best Mobile Augmented Reality Campaign / Solution",
    meta: {
      description:
        "Gold Winner at the Effective Mobile Marketing Awards 2012 for Best Mobile Augmented Reality Campaign / Solution.",
    },
    logo: "effective-mobile-marketing-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Beverage Innovation Awards @ Drinktec",
    year: 2013,
    description: "Best Technology Innovation",
    meta: {
      description:
        "Gold Winner at the Beverage Innovation Awards 2013 for Best Technology Innovation.",
    },
    logo: "beverige-innovation-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Corpcomms Digi Awards",
    year: 2013,
    description: "Best Use Of Mobile",
    meta: {
      description:
        "Gold Winner at the Corpcomms Digi Awards 2013 for Best Use Of Mobile.",
    },
    logo: "compcomms-digi-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "The Drum Network Awards",
    year: 2014,
    description: "Mobile Marketing Campaign / Strategy of the Year",
    meta: {
      description:
        "Gold Winner at The Drum Network Awards 2014 for Mobile Marketing Campaign / Strategy of the Year.",
    },
    logo: "the-drum-network-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Digital Impact Award",
    year: 2015,
    description: "Best Use of Digital from the Food & Beverage Sector",
    meta: {
      description:
        "Gold Winner at the Digital Impact Award 2015 for Best Use of Digital from the Food & Beverage Sector.",
    },
    logo: "digital-impact-awards.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "APAC Effie",
    year: 2018,
    description: "Best Media Campaign",
    meta: {
      description:
        "Gold Winner at the APAC Effie 2018 for Best Media Campaign.",
    },
    logo: "apac-effie.png",
  },
  {
    companyName: "Blippar",
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Iab MIXX Awards",
    year: 2014,
    description: "Best Cross-Media Integration",
    meta: {
      description:
        "Gold Winner at the Iab MIXX Awards 2014 for Best Cross-Media Integration.",
    },
    logo: "iab-mixx-gold.png",
  },
  {
    companyName: "Blippar",
    prize: "SILVER",
    icon: "workspace_premium",
    event: "iab MIXX Awards Turkey",
    year: 2014,
    description: "Best Augmented Reality",
    meta: {
      description:
        "Silver Winner at the iab MIXX Awards Turkey 2014 for Best Augmented Reality.",
    },
    logo: "iab-mixx-silver.png",
  },
  {
    companyName: "Blippar",
    prize: "BRONZE",
    icon: "workspace_premium",
    event: "iab MIXX Awards Turkey",
    year: 2014,
    description: "Best Mobile Campaign",
    meta: {
      description:
        "Bronze Winner at the iab MIXX Awards Turkey 2014 for Best Mobile Campaign.",
    },
    logo: "iab-mixx-bronze.png",
  },
  {
    companyName: "Blippar",
    prize: "Finalist",
    icon: "verified",
    event: "Mobile World Congress",
    year: 2015,
    description: "Global Mobile Awards - Best Mobile Advertising or Marketing",
    meta: {
      description:
        "Finalist at the Mobile World Congress 2015 for Best Mobile Advertising or Marketing.",
    },
    logo: "global-mobile-awards.png",
  },
];

function GetAwards(companyName) {
  const output = Awards.filter(
    (item) => item.companyName.toLowerCase() === companyName.toLowerCase()
  );
  return output ? output : null;
}

export { GetAwards };
