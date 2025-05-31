const Awards = [
  // Blippar
  {
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
    companyId: 1,
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
  // MRMC
  {
    companyId: 2,
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "NAB Show",
    year: 2020,
    description:
      "Product of the Year - Camera Support, Control and Accessories",
    meta: {
      description:
        "NAB Show 2020 Product of the Year - Camera Support, Control and Accessories.",
    },
    logo: "nab-show.png",
  },
  // NewDay Aquacard
  {
    companyId: 3,
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "The UK Digital Experience Awards",
    year: 2020,
    description: "Digital Change & Transformation",
    meta: {
      description:
        "The UK Digital Experience Awards 2020 for Digital Change & Transformation.",
    },
    logo: "the-uk-digital-experience-awards.png",
  },
  {
    companyId: 3,
    prize: "Finalist",
    icon: "verified",
    event: "Card and Payments Awards",
    year: 2020,
    description: "Best Marketing Campaign of the Year",
    meta: {
      description:
        "Card and Payments Awards 2020 for Best Marketing Campaign of the Year.",
    },
    logo: "the-card-payments-awards.png",
  },
  {
    companyId: 3,
    prize: "Finalist",
    icon: "verified",
    event: "Card and Payments Awards",
    year: 2020,
    description: "Best Design of the Year",
    meta: {
      description: "Card and Payments Awards 2020 for Best Design of the Year.",
    },
    logo: "the-card-payments-awards.png",
  },
  // Gain Credit Lending Stream
  {
    companyId: 4,
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "The Credit Excellence Awards",
    year: 2021,
    description: "Responsible Lender",
    meta: {
      description: "The Credit Excellence Awards 2021 for Responsible Lender.",
    },
    logo: "credit-excellence-awards.png",
  },
  // Motorway
  {
    companyId: 5,
    prize: "GOLD Winner",
    icon: "emoji_events",
    event: "Motor Trader Industry Awards",
    year: 2021,
    description: "Online Used Car Trading Platform",
    meta: {
      description:
        "Motor Trader Industry Awards 2021 for Online Used Car Trading Platform.",
    },
    logo: "motor-trader-industry-awards.png",
  },
];

function GetAwardsByCompanyId(id) {
  const output = Awards.filter((item) => item.companyId === id);
  return output ? output : null;
}

export { GetAwardsByCompanyId };
