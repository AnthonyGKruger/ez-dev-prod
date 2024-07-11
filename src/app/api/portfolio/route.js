// Asynchronous function that handles the GET request
export const GET = async (request) => {
  // An array containing project data objects
  const responseData = [
    {
      id: "p3",
      title: "Digital Stream",
      description:
        "Digital marketing agency website built using Next.js and Tailwind CSS \n(the code to for this" +
        " project is unfortunately not available for public viewing)",
      link: "https://digitalstream.co.za",
      image: "/media/logos/ds-logo.png",
      sourceCode: "",
      referralLetter:
        "/media/Digital Stream Referral Letter - Anthony Kruger - web - signed.pdf",
    },
    // {
    //   id: "p2",
    //   title: "Digital Payment Transformation Services",
    //   description:
    //     "Ecommerce app built using NextJS, Tailwind and Strapi - (still under development.)",
    //   link: "https://inhonourofalegend.vercel.app",
    //   image: "/media/logos/DPTS.png",
    //   sourceCode: "https://github.com/AnthonyGKruger/dpts-prod",
    // },
    {
      id: "p1",
      title: "Mumbi Trust Administrators",
      description:
        "Accounting firm website built using Next.js and Tailwind CSS",
      link: "https://mumbi.co.za",
      image: "/media/logos/mumbi-logo.png",
      sourceCode:
        "https://github.com/AnthonyGKruger/Mumbi-Trust-Administrators",
    },

    // {
    //   id: "p5",
    //   title: "Star Wars E-commerce App",
    //   description:
    //     "Ecommerce app built NextJS and TailWind CSS - (still under development.)",
    //   link: "https://swapi-ecommerce.vercel.app/",
    //   image: "/media/logos/star-wars-logo.svg",
    //   sourceCode: "https://github.com/AnthonyGKruger/swapi-ecommerce",
    // },
    // {
    //   id: "p6",
    //   title: "Fan Catalogue",
    //   description: "Fan Catalogue built using Next.js and Tailwind CSS.",
    //   link: "https://tlwfans.vercel.app",
    //   image: "/media/logos/TLW-logo.jpg",
    //   sourceCode: "https://github.com/AnthonyGKruger/TLWfans",
    // },
    {
      id: "p4",
      title: "Smarten-Up Recruitment Assessment",
      description: "Figma mockup assessment using React.js and Tailwind CSS.",
      link: "https://smarten-up.vercel.app/",
      image:
        "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/icon.png",
      sourceCode: "https://github.com/AnthonyGKruger/smarten",
    },
  ];
  // Return a JSON response with the project data and status 200
  return new Response(JSON.stringify(responseData), {
    status: 200,
  });
};
