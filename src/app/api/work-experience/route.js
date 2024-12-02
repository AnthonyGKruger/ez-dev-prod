export const GET = async (request) => {
  const responseData = [
    {
      id: "w6",
      company: "Osiris Trading (Pty) Ltd",
      role: "Front End Web Developer",
      summary: `As a Front-End Developer for Osiris Trading,
       I play a key role in designing and developing responsive, 
       user-friendly web applications, features and optimizations using modern JavaScript frameworks
        and best practices in UI/UX design. 
        I collaborated closely with cross-functional teams to ensure seamless integration with back-end services,
         optimized website performance, and enhanced cross-browser compatibility. My focus on mobile-first design,
          accessibility, and performance lead to improved user engagement and site efficiency, while my expertise in
          version control and Agile workflows ensure timely and high-quality project delivery.`,
      dateFrom: "October 2024",
      dateTo: "Present",
      comments: [],
    },
    {
      id: "w5",
      company: "EZdev Solutions (PTY) Ltd",
      role: "Full Stack Web Developer",
      summary:
        "I am responsible for creating dynamic and user-friendly web applications, making use of a modern tech\n" +
        "stack that includes Next.js, React.js, and Tailwind CSS. My role involves a broad spectrum of tasks,\n" +
        "ranging from front-end development and UI/UX design to CMS integration, e-commerce solutions,\n" +
        "database management, server-side development, version control, performance optimization, security,\n" +
        "testing and debugging, documentation, collaboration, and continuous learning.",
      dateFrom: "November 2020",
      dateTo: "Present - Part time / Freelance",
      comments: [],
    },
    {
      id: "w1",
      company: "DPTS (PTY) Ltd",
      role: "Full Stack Web Developer",
      summary:
        "Responsible for leading a web development team that build dynamic websites and e-commerce stores for international clients of DPTS. This includes migration of code and parameters to the quality assurance and production environments. Also, further responsible for the administration and support of the cloud hosted environments on Microsoft Azure for DPTS and its’ clients for use as web and back-office servers for the e-commerce and CRM applications. This experience has allowed me to gain hands-on experience to complement the theoretical knowledge obtained as I completed my three-year bachelor’s degree in information technology.",
      dateFrom: "November 2020",
      dateTo: "December 2022",
      comments: [
        "Successfully completed Portfolio of evidence",
        "Successful integration into corporate working environments",
      ],
    },
    {
      id: "w2",
      company: "The Lighting Warehouse: Menlyn & Centurion",
      role: "Branch Manager",
      summary:
        "Directing all operational aspects including distribution, customer service, human resources, administration and sales in accordance with the company’s objectives. Providing training, coaching, development and motivation for branch personnel. Developing forecasts and financial objectives.",
      dateFrom: "June 2018",
      dateTo: "September 2024",
      comments: ["Managing the flagship branch", "Team of the year"],
    },
    {
      id: "w3",
      company: "The Lighting Warehouse: Menlyn & Zambezi",
      role: "Sales Manager",
      summary: null,
      dateFrom: "August 2016",
      dateTo: "May 2018",
      comments: ["Proved my worth and transferred to flagship branch"],
    },
    {
      id: "w4",
      company: "The Lighting Warehouse: Centurion",
      role: "Sales Consultant",
      summary: null,
      dateFrom: "June 2014",
      dateTo: "July 2016",
      comments: [
        "Received two performance awards",
        "Reached managerial status after two years",
      ],
    },
    {
      id: "w5",
      company: "Precision Financial Services",
      role: "Administrator",
      summary: null,
      dateFrom: "January 2014",
      dateTo: "April 2014",
      comments: [
        "Successfully handled all incoming queries",
        "Managed all IT support issues",
      ],
    },
  ];
  return new Response(JSON.stringify(responseData), {
    status: 200,
  });
};
