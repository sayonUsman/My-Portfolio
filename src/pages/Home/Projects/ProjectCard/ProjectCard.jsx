import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  AOS.init();

  return (
    <div className="flex mx-auto">
      <div className="my-5">
        <div className="flex justify-center items-center">
          <div
            className="card rounded-md w-72 md:w-[335px] lg:w-96 bg-white shadow-md shadow-zinc-900 hover:shadow-orange-400"
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
          >
            <figure>
              <img src={project.demo} alt="Project Demo" />
            </figure>

            <div className="card-body font-belano p-0 pl-5 md:pl-7 lg:pl-9">
              <h2 className="card-title">{project.name}</h2>
              <h2 className="text-lg font-semibold">Technology & Tools:</h2>

              <span>
                <p>{project.tt}</p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.client}
                  className="text-primary link link-hover"
                >
                  Client
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.server}
                  className="text-primary link link-hover px-4"
                >
                  Server
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.live}
                  className="inline-block text-primary link link-hover pt-5 pb-3"
                >
                  Live Link
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
