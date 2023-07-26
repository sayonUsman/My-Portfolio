import Banner from "./Banner/Banner";
import About from "./about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";

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
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-belano font-semibold">
          About Me
        </h1>
      </div>

      <About></About>
      <SectionTitle id={"skills"} title={"Field of My Skills"}></SectionTitle>
      <Skills></Skills>
      <SectionTitle id={"projects"} title={"Best Projects"}></SectionTitle>
      <Projects></Projects>
      <SectionTitle id={"gallery-section"} title={"My Gallery"}></SectionTitle>
      <Gallery></Gallery>
      <SectionTitle
        id={"contact"}
        title={"Feel free to reach out"}
      ></SectionTitle>
      <Contact></Contact>
    </>
  );
};

export default Home;
