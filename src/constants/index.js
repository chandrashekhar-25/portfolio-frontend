import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const BASIC_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2022 - Present",
    role: "MERN Full Stack Developer",
    company: "Cheers Interactive",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js", "Node.js", "Next.js", "Express.js", "MongoDB", "MySQL", "Sql"],
  },
  {
    year: "Jun 2022 - Aug 2022",
    role: "MERN Full Stack Developer",
    company: "Prism I.T. Systems · Part-time",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Node.js", "Next.js", "Express.js", "MySQL", "PostgreSQL", "AWS"],
  },
  {
    year: "Jun 2021 - May 2022",
    role: "MERN FULL STACK DEVELOPER",
    company: "Fahm Technologies Private Limited",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website (Buyamia)",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "Next.js", "MySQL", "AWS", "MongoDB"],
    link: 'https://buyamia.com/'
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Node.js", "MySQL", "MongoDB"],
    link: '#'
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Node.js", "MySQL", "Vercel"],
    link: 'https://portfolio-git-master-abdullashaikhs-projects.vercel.app?_vercel_share=YvcP1I502Z13TzL4xDGjPOC6NMyo28Yg'
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Vue.js", "Express", "mySQL"],
    link: '#'
  },
];

export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "+91 9110192762 ",
  email: "chandrashekhar2500@gmail.com",
};
