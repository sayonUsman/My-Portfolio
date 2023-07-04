import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  AOS.init();

  return (
    <div className="flex mx-auto">
      <div className="my-5">
        <div className="flex justify-center items-center">
          <div
            className="card rounded-md w-72 md:w-[335px] lg:w-96 h-[425px] lg:h-[475px] bg-white border border-black"
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
          >
            <figure>
              <img src={project.demo} alt="Project Demo" />
            </figure>

            <div className="card-body p-0">
              <h2 className="card-title pl-3 pt-5">{project.name}</h2>
              <h2 className="text-lg font-semibold pl-3 pt-3">
                Technology & Tools:
              </h2>
              <p className="pl-3">{project.tt}</p>

              <div className="card-actions justify-center text-primary pb-3">
                <a href={project.client} className="link link-hover">
                  Client
                </a>

                <a href={project.server} className="link link-hover px-4">
                  Server
                </a>

                <a href={project.live} className="link link-hover">
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
