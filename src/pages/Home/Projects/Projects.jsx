import art from "../../../assets/projects/art-craft.png";
import bistro from "../../../assets/projects/bistro-boss.png";
import hunter from "../../../assets/projects/house-hunter.png";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    name: "House Hunter",
    demo: hunter,
    client: "https://github.com/sayonUsman/house-hunter",
    server: "https://github.com/sayonUsman/house-hunter-Server",
    live: "https://house-hunter-89d95.web.app/",
    tt: "React, Tailwind CSS, DaisyUI, Express.js, MongoDB, Firebase, Git.",
  },

  {
    name: "Fun with Art & Craft",
    demo: art,
    client: "https://github.com/sayonUsman/Fun-with-Art-Craft",
    server: "https://github.com/sayonUsman/Fun-with-Art-Craft-Server",
    live: "https://fun-with-art-craft.web.app/",
    tt: "React, Tailwind CSS, DaisyUI, Express.js, MongoDB, Firebase, Git, Stripe.",
  },

  {
    name: "Bistro Boss Restaurant",
    demo: bistro,
    client: "https://github.com/sayonUsman/Bistro-Boss-Restaurant",
    server: "https://github.com/sayonUsman/Bistro-Boss-Restaurant-Server",
    live: "https://bistro-boss-restaurant-2cd47.web.app/",
    tt: "React, Tailwind CSS, DaisyUI, Express.js, MongoDB, Firebase, Git, Stripe.",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
      {projects.map((project) => (
        <ProjectCard
          key={projects.indexOf(project)}
          project={project}
        ></ProjectCard>
      ))}
    </div>
  );
};

export default Projects;
