import Banner from "./Banner/Banner";
import About from "./About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills/Skills";

const Home = () => {
  AOS.init();

  return (
    <>
      <Banner></Banner>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mt-16 sm:mt-20 md:mt-24 lg:mt-32 pl-7 sm:pl-9">
          About Me
        </h1>
      </div>

      <About></About>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mt-10 md:mt-12 lg:mt-14 pl-7 sm:pl-9">
          Skills
        </h1>
      </div>

      <Skills></Skills>
    </>
  );
};

export default Home;
