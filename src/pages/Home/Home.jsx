import Banner from "./Banner/Banner";
import About from "./About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const Home = () => {
  AOS.init();

  return (
    <>
      <Banner></Banner>

      <div
        id="about"
        className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 pl-7 sm:pl-9"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          About Me
        </h1>
      </div>

      <About></About>

      <div
        id="skills"
        className="mt-10 md:mt-12 lg:mt-14 pl-7 sm:pl-9"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          Field of My Skills
        </h1>
      </div>

      <Skills></Skills>

      <div
        id="projects"
        className="mt-10 md:mt-12 lg:mt-14 pl-7 sm:pl-9"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          Projects
        </h1>
      </div>

      <Projects></Projects>
    </>
  );
};

export default Home;
