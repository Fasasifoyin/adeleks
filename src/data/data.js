import { SiFrontendmentor, SiBackendless } from "react-icons/si";
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const data = {
  links: [
    {
      id: 1,
      link: "Home",
      to: "/",
      offSet: -200,
    },
    {
      id: 2,
      link: "About & Skills",
      to: "about",
      offSet: -80,
    },
    {
      id: 3,
      link: "Projects",
      to: "projects",
      offSet: -80,
    }
  ],
  socials: [
    {
      id: 1,
      icon: FaLinkedinIn,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: FaWhatsapp,
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      icon: FaTwitter,
      link: "https://www.facebook.com",
    },
    {
      id: 4,
      icon: FaGithub,
      link: "https://www.facebook.com",
    },
    {
      id: 5,
      icon: CiMail,
      link: "mailto:adeleke@gmail.com",
    },
  ],
  hero: {
    job: "Fullstack developer",
    about:
      "I build responsive web applications and robust backend architecture.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/5d70b8150527843.Y3JvcCwxMTcxLDkxNiwxNDIsMTQ.png",
  },

  about: {
    intro: "Hi, I’m Adeleke. Nice to meet you.",
    about:
      "Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.",
    skills: [
      {
        id: 1,
        icon: SiFrontendmentor,
        title: "Frontend developer",
        short:
          " I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        languages: "HTML, CSS, Sass, Git, Javascript, Typescript",
        devTools: [
          "Tailwind CSS",
          "Bootstrap",
          "Chakra UI",
          "Github",
          "React",
          "Netlify",
          "VS Code",
        ],
      },
      {
        id: 2,
        icon: SiBackendless,
        title: "Backend developer",
        short:
          "I like to build robust backend architecture that can sustain multiple user",
        languages: "Javascript, Typescript",
        devTools: ["Node Js", "Express Js", "MongoDB", "Render"],
      },
    ],
  },
  portfolio: {
    title: "My Recent Works",
    short: "Here are a few past design projects I've worked on.",
    projects: [
      {
        id: 1,
        image:
          "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        about: "Very short writing about project",
        websiteUrl: "https://www.google.com",
      },
      {
        id: 2,
        image:
          "https://media.istockphoto.com/id/1333460374/photo/african-megacity-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Gu5TRHGNLRRF43YFMlDFnpkk7TBz00U8olxUqsoeiw8=",
        about: "Very short writing about project",
        websiteUrl: "https://www.google.com",
      },
      {
        id: 3,
        image:
          "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        about: "Very short writing about project Very very very",
        websiteUrl: "https://www.google.com",
      },
      {
        id: 4,
        image:
          "https://www.bnf.fr/sites/default/files/2019-10/btv1b8457904c_f1.jpg",
        about: "Very short writing about project",
        websiteUrl: "https://www.google.com",
      },
      {
        id: 5,
        image:
          "https://media.istockphoto.com/id/670815014/photo/tuk-tuk-drivers-and-other-road-users-travel-around-the-port-city-of-lagos.jpg?s=612x612&w=0&k=20&c=unFyeT4fZ5FQCZfzmsi4LIBmpt4k9OAbG0XDJoRdoe8=",
        about: "Very short writing about project",
        websiteUrl: "https://www.google.com",
      },
      {
        id: 6,
        image:
          "https://media.istockphoto.com/id/1333460374/photo/african-megacity-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Gu5TRHGNLRRF43YFMlDFnpkk7TBz00U8olxUqsoeiw8=",
        about: "Very short writing about project",
        websiteUrl: "https://www.google.com",
      },
    ],
  },
  footer: {
    banner: {
      first: "Start a project",
      second:
        "Interested in working together? We should queue up a time to chat. I’ll buy the coffee.",
      third: "Let's do this",
    },
  },
};
