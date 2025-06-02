const Companies = [
  {
    id: 1,
    name: "Blippar",
    theme: "blippar",
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
    id: 2,
    name: "MRMC",
    theme: "mrmc",
    description:
      "Mark Roberts Motion Control is a leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    details:
      "Delivering Oscar-Winning Engineering for over 50 Years! The leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    meta: {
      description:
        "Mark Roberts Motion Control (MRMC) is a leading manufacturer and cutting-edge solutions supplier for motion control, automation, broadcast robotics, volumetric and remote image capture.",
    },
  },
  {
    id: 3,
    name: "NewDay Aquacard",
    theme: "newday-aquacard",
    description:
      '<a target="_blank" rel="noopener noreferrer" href="https://www.aquacard.co.uk/">Aquacard.co.uk</a><br />Helping people move forward with credit.',
    details: `"We're proud to serve close to 5 million customers across the UK through our diverse and growing business. So our purpose is straightforward, to help people move forward with credit. Our Customer Manifesto is made up of four core principles, we're a welcoming, understanding, knowing and rewarding business. These principles bring the Manifesto to life for our customers, colleagues and retail partners."`,
    meta: {
      description: "Aquacard.co.uk Helping people move forward with credit",
    },
  },
  {
    id: 4,
    name: "Gain Credit Lending Stream",
    theme: "gain-credit-lending-stream",
    description: "A scaled global Fintech focused on responsible credit.",
    details:
      "Lending Stream is a 6-month digital loan provider in the UK. Serving as a viable alternative to payday loans since 2008, Lending Stream has been the go-to option for people in need of emergency funds; a fact acknowledged by the consistently high customer review ratings which it has received since inception. In December 2016, Lending Stream won the Alternative Lender of the Year at the F5 Awards.",
    meta: {
      description:
        "Gain Credit Lending Stream - A scaled global Fintech focused on responsible credit.",
    },
  },
  {
    id: 5,
    name: "Motorway",
    theme: "motorway",
    description: "The biggest online-only used car marketplace based in the UK",
    details:
      "Motorway uses a selling platform to allow users to sell their car directly to dealers. I assisted in a short contract for the final push of its award wining platform providing crucial accessibility touches alongside key refinements and optimisations.",
    meta: {
      description:
        "Motorway - The biggest online-only used car marketplace based in the UK",
    },
  },
];

function GetCompany(name) {
  const output = Companies.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return output ? output : null;
}

function GetCompanyById(id) {
  const output = Companies.find((item) => item.id === id);
  return output ? output : null;
}

async function API_GetCompanyById(id) {
  try {
    const response = await fetch(`http://localhost:3000/companies/${id}`);
    if (!response.ok) {
      return null;
    }
    const company = await response.json();
    console.log("✅ Fetched company:", company);
    return company;
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
}

export { Companies, GetCompany, GetCompanyById, API_GetCompanyById };
