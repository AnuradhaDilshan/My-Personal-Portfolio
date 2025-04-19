export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Education", link: "#education" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I Analyze Tech to Optimize and Evolve",
    description: "Technology tells a Story",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./assets/background/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with Time Zone Communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a Passion for Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./assets/background/grid.svg",
    spareImg: "./assets/background/b4.svg",
  },

  {
    id: 5,
    title: "Smart Asset Transfer via Blockchain",
    description: "Bringing to Life",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./assets/background/b5.png",
    spareImg: "./assets/background/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Driving School Management System",
    des: "Manage Driving Schools with ease using this full-featured Web Application built on the MERN Stack. Driving School Management System that handles registrations, lesson scheduling, instructor allocation, and payment tracking with an intuitive UI.",
    img: "/assets/works/p1.webp",
    iconLists: [
      "/assets/skills/react.svg",
      "/assets/skills/express.svg",
      "/assets/skills/nodejs.svg",
      "/assets/skills/mongodb.svg",
      "/assets/skills/bootstrap.svg",
    ],
  },
  {
    id: 2,
    title: "LRDC Boat Reservation System",
    des: "Effortlessly book and manage boat rides with streamlined reservation system built for LRDC Services (Pvt) Limited. Designed for smooth scheduling, availability tracking, and user-friendly booking.",
    img: "/assets/works/p2.webp",
    iconLists: [
      "/assets/skills/react.svg",
      "/assets/skills/bootstrap.svg",
      "/assets/skills/firebase.svg",
    ],
  },
  {
    id: 3,
    title: "My Personal Portfolio",
    des: "A Modern, Responsive Portfolio Website designed to showcase My Projects, Skills, and Experience. Built to reflect my passion for clean design and efficient development.",
    img: "/assets/works/p3.webp",
    iconLists: [
      "/assets/skills/next.svg",
      "/assets/skills/tailwind.svg",
      "/assets/skills/framer.svg",
      "/assets/skills/motion.webp",
      "/assets/skills/aceternity.webp",
    ],
  },
  {
    id: 4,
    title: "Inventory Management System",
    des: "A powerful web-based Inventory Management System designed to track stock levels, manage product data, and streamline inventory operations with ease.",
    img: "/assets/works/p4.png",
    iconLists: [
      "/assets/skills/react.svg",
      "/assets/skills/express.svg",
      "/assets/skills/nodejs.svg",
      "/assets/skills/mongodb.svg",
      "/assets/skills/bootstrap.svg",
    ],
  },
  {
    id: 5,
    title: "KDU Club Management System",
    des: "To manage KDU club memberships, events, and communications, designed to simplify administrative tasks and enhance member engagement.",
    img: "/assets/works/p5.webp",
    iconLists: ["/assets/skills/c-sharp.svg", "/assets/skills/mysql.svg"],
  },
  {
    id: 6,
    title: "Travel Tour Website",
    des: "A seamless travel tour website offering tour packages, booking options, and detailed itineraries to make planning your next getaway simple and exciting.",
    img: "/assets/works/p6.webp",
    iconLists: ["/assets/skills/react.svg", "/assets/skills/sass.svg"],
  },
];

export const project_data = [
  {
    id: 1,
    title: "Driving School Management System",
    des: "Manage driving schools with ease using this full-featured web application built on the MERN stack. The system handles student registrations, lesson scheduling, instructor allocation, and payment tracking. It includes role-based access control for secure authorization, real-time notifications, and an intuitive interface tailored for admins, instructors, and students alike.",
    img: "/assets/works/p1.webp",
    iconLists: [
      { icon: "/assets/skills/react.svg", name: "React" },
      { icon: "/assets/skills/express.svg", name: "Express" },
      { icon: "/assets/skills/nodejs.svg", name: "Node.js" },
      { icon: "/assets/skills/mongodb.svg", name: "MongoDB" },
      { icon: "/assets/skills/bootstrap.svg", name: "Bootstrap" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/Driving-School-Management-System",
      },
      { icon: "/assets/visit/google_docs.png", link: "https:/www.google.com" },
      {
        icon: "/assets/visit/google_slides.png",
        link: "https:/www.google.com",
      },
    ],
    image: "/assets/works/p1_full.webp",
    image_ui: "/assets/works/p1_ui.webp",
    readme:
      "https://github.com/AnuradhaDilshan/Driving-School-Management-System/blob/main/README.md",
  },
  {
    id: 2,
    title: "LRDC Boat Reservation System",
    des: "Effortlessly book and manage boat rides with streamlined reservation system built for LRDC Services (Pvt) Limited. This web-based application was developed to digitize and optimize the boat ride booking process. Designed for smooth scheduling, availability tracking, and user-friendly booking. The system features are conflict-free booking calendar and dynamic ride slot management.",
    img: "/assets/works/p2.webp",
    iconLists: [
      { icon: "/assets/skills/react.svg", name: "React" },
      { icon: "/assets/skills/bootstrap.svg", name: "Bootstrap" },
      { icon: "/assets/skills/firebase.svg", name: "Firebase" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/LRDC-Boat-Reservation-System",
      },
    ],
    image: "/assets/works/p2_full.webp",
    image_ui: "/assets/works/p2_ui.webp",
    readme:
      "https://github.com/AnuradhaDilshan/LRDC-Boat-Reservation-System/blob/main/README.md",
  },
  {
    id: 3,
    title: "My Personal Portfolio",
    des: "A Modern, Responsive Portfolio Website designed to showcase My Projects, Skills, and Experience. Built to reflect my passion for clean design and efficient development. Built with Next.js and Tailwind CSS, the site reflects my passion for clean UI/UX, modular component-based architecture, and efficient front-end development. It includes sections for my education, featured projects, a dynamic tech stack, and contact. All animated UI components and motions optimized for ehnanced performance and accessibility.",
    img: "/assets/works/p3.webp",
    iconLists: [
      { icon: "/assets/skills/next.svg", name: "Next.js" },
      { icon: "/assets/skills/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/skills/framer.svg", name: "Framer" },
      { icon: "/assets/skills/motion.webp", name: "Motion" },
      { icon: "/assets/skills/aceternity.webp", name: "Aceternity UI" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/My-Personal-Portfolio",
      },
    ],
    image: "/assets/works/p3_full.webp",
    readme:
      "https://github.com/AnuradhaDilshan/My-Personal-Portfolio/blob/main/README.md",
  },
  {
    id: 4,
    title: "Inventory Management System",
    des: "A powerful web-based Inventory Management System designed to track stock levels, manage product data, and streamline inventory operations with ease. It features a role-based access control system. This solution empowers businesses to make data-driven decisions, reduce inventory errors, and maintain seamless control over stock and finances from a centralized platform.",
    img: "/assets/works/p4.png",
    iconLists: [
      { icon: "/assets/skills/react.svg", name: "React" },
      { icon: "/assets/skills/express.svg", name: "Express" },
      { icon: "/assets/skills/nodejs.svg", name: "Node.js" },
      { icon: "/assets/skills/mongodb.svg", name: "MongoDB" },
      { icon: "/assets/skills/bootstrap.svg", name: "Bootstrap" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/Inventory-Management-System",
      },
      { icon: "/assets/visit/google_docs.png", link: "https:/www.google.com" },
      {
        icon: "/assets/visit/google_slides.png",
        link: "https:/www.google.com",
      },
    ],
    image: "/assets/works/p4_ui.png",
    readme:
      "https://github.com/AnuradhaDilshan/Inventory-Management-System/blob/main/README.md",
  },
  {
    id: 5,
    title: "KDU Club Management System",
    des: "To manage KDU club memberships, events, and communications, designed to simplify administrative tasks and enhance member engagement. Built using C-Sharp and MySQL, this desktop-based application simplifies club administration by automating processes and this system supports efficient club operations in academic environments.",
    img: "/assets/works/p5.webp",
    iconLists: [
      { icon: "/assets/skills/c-sharp.svg", name: "C-Sharp" },
      { icon: "/assets/skills/mysql.svg", name: "MySQL" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/KDU-Club-Management-System",
      },
      { icon: "/assets/visit/google_docs.png", link: "https:/www.google.com" },
      {
        icon: "/assets/visit/google_slides.png",
        link: "https:/www.google.com",
      },
    ],
    image: "/assets/works/p5_full.png",
    readme:
      "https://github.com/AnuradhaDilshan/KDU-Club-Management-System/blob/main/README.md",
  },
  {
    id: 6,
    title: "Travel Tour Website",
    des: "A seamless travel tour website offering tour packages, booking options, and detailed itineraries to make planning your next getaway simple and exciting. Developed using React.js and styled with SASS, this web application enables users to explore curated tour packages, view detailed itineraries, and complete bookings through a clean and intuitive interface. The site features dynamic routing, interactive UI components, and modular architecture for easy scalability. also, Tour package listing with filterable categories. (e.g., destination, price range, duration)",
    img: "/assets/works/p6.webp",
    iconLists: [
      { icon: "/assets/skills/react.svg", name: "React" },
      { icon: "/assets/skills/sass.svg", name: "Sass" },
    ],
    visit: [
      {
        icon: "/assets/visit/github_logo.webp",
        link: "https://github.com/AnuradhaDilshan/Travel-Tour-Website",
      },
      { icon: "/assets/visit/google_docs.png", link: "https:/www.google.com" },
      {
        icon: "/assets/visit/google_slides.png",
        link: "https:/www.google.com",
      },
    ],
    image: "/assets/works/p6_full.webp",
    readme:
      "https://github.com/AnuradhaDilshan/Travel-Tour-Website/blob/main/README.md",
  },
];

export const softwares = [
  {
    id: 1,
    name: "Adobe Photoshop",
    img: "/assets/creative/Adobe_Photoshop.svg",
    nameImg: "/assets/creative/Adobe_Photoshop_Name.png",
  },
  {
    id: 2,
    name: "Adobe Illustrator",
    img: "/assets/creative/Adobe_Illustrator.svg",
    nameImg: "/assets/creative/Adobe_Illustrator_Name.png",
  },
  {
    id: 3,
    name: "Adobe Lightroom",
    img: "/assets/creative/Adobe_Lightroom.svg",
    nameImg: "/assets/creative/Adobe_Lightroom_Name.png",
  },
  {
    id: 4,
    name: "Adobe InDesign",
    img: "/assets/creative/Adobe_InDesign.png",
    nameImg: "/assets/creative/Adobe_InDesign_Name.png",
  },
  {
    id: 5,
    name: "Adobe After Effects",
    img: "/assets/creative/Adobe_AfterEffects.svg",
    nameImg: "/assets/creative/Adobe_AfterEffects_Name.png",
  },
  {
    id: 6,
    name: "Adobe Premiere Pro",
    img: "/assets/creative/Adobe_Premiere_Pro.svg",
    nameImg: "/assets/creative/Adobe_Premiere_Pro_Name.png",
  },
  {
    id: 7,
    name: "DaVinci Resolve",
    img: "/assets/creative/DaVinci_Resolve.png",
    nameImg: "/assets/creative/DaVinci_Resolve_Name.png",
  },
  {
    id: 8,
    name: "OBS Studio",
    img: "/assets/creative/OBS_Studio.png",
    nameImg: "/assets/creative/OBS_Studio_Name.png",
  },
  {
    id: 9,
    name: "vMix",
    img: "/assets/creative/vMix.png",
    nameImg: "/assets/creative/vMix_Name.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Graphic Designer",
    desc: "Designing eye-catching flyers and posters that capture the essence of the brand, enhancing visual communication.",
    className: "md:col-span-2",
    thumbnail: "/assets/elements/exp1.png",
  },
  {
    id: 2,
    title: "Video Editor",
    desc: "Crafting engaging videos that tell compelling stories, enhancing brand presence through dynamic editing.",
    className: "md:col-span-2",
    thumbnail: "/assets/elements/exp2.png",
  },
  {
    id: 3,
    title: "Magazine Designer",
    desc: "Designing visually striking magazine layouts that captivate readers and enhance content presentation.",
    className: "md:col-span-2",
    thumbnail: "/assets/elements/exp3.png",
  },
  {
    id: 4,
    title: "Broadcast Operator",
    desc: "Managing live broadcast operations, ensuring seamless transmission and high-quality audio visual output.",
    className: "md:col-span-2",
    thumbnail: "/assets/elements/exp4.png",
  },
];

export const skills = [
  {
    title: "React",
    img: "/assets/technologies/react.svg",
  },
  {
    title: "Next.Js",
    img: "/assets/technologies/nextjs.svg",
  },
  {
    title: "Tailwind CSS",
    img: "/assets/technologies/tailwindcss.svg",
  },
  {
    title: "Node.Js",
    img: "/assets/technologies/nodejs.svg",
  },
  {
    title: "Express",
    img: "/assets/technologies/express.svg",
  },
  {
    title: "MongoDB",
    img: "/assets/technologies/mongodb.svg",
  },
  {
    title: "Firebase",
    img: "/assets/technologies/firebase.svg",
  },
  {
    title: "MySQL",
    img: "/assets/technologies/mysql.svg",
  },
  {
    title: "HTML",
    img: "/assets/technologies/html-5.svg",
  },
  {
    title: "CSS",
    img: "/assets/technologies/css-3.svg",
  },
  {
    title: "Javascript",
    img: "/assets/technologies/javascript.svg",
  },
  {
    title: "Python",
    img: "/assets/technologies/python.svg",
  },
  {
    title: "PHP",
    img: "/assets/technologies/php.svg",
  },
  {
    title: "Solidity",
    img: "/assets/technologies/solidity.svg",
  },
  {
    title: "Ethereum",
    img: "/assets/technologies/ethereum.svg",
  },
  {
    title: "Git",
    img: "/assets/technologies/git.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/assets/social media/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=100009510139695",
  },
  {
    id: 2,
    img: "/assets/social media/instagram.svg",
    link: "https://www.instagram.com/anuradha_dilshan/",
  },
  {
    id: 3,
    img: "/assets/social media/youtube.svg",
    link: "https://www.youtube.com/@anuradhadilshan0/",
  },
  {
    id: 4,
    img: "/assets/social media/x.svg",
    link: "https://x.com/AnuradhaDi68825",
  },
  {
    id: 5,
    img: "/assets/social media/linkedin.svg",
    link: "https://www.linkedin.com/in/anuradhadilshan",
  },
  {
    id: 6,
    img: "/assets/social media/medium.svg",
    link: "https://medium.com/@anuradha.dilshan",
  },
  {
    id: 7,
    img: "/assets/social media/github.svg",
    link: "https://github.com/AnuradhaDilshan",
  },
];
