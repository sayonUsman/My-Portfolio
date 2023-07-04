import art from "../../../assets/projects/art-craft.png";
import bistro from "../../../assets/projects/bistro-boss.png";
import disney from "../../../assets/projects/disney-empire.png";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    name: "Fun with Art & Craft",
    demo: art,
    client: "https://github.com/sayonUsman/Fun-with-Art-Craft",
    server: "https://github.com/sayonUsman/Fun-with-Art-Craft-Server",
    live: "https://fun-with-art-craft.web.app/",
    tt: "React, Tailwind CSS, DaisyUI, Express.js, MongoDB, Firebase, Git, Stripe.",
  },

  {
    name: "Disney Empire",
    demo: disney,
    client: "https://github.com/sayonUsman/Disney-Empire",
    server: "https://github.com/sayonUsman/Disney-Empire-Server",
    live: "https://disney-empire.web.app/",
    tt: "React, Tailwind CSS, DaisyUI, Express.js, MongoDB, Firebase, Git",
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
