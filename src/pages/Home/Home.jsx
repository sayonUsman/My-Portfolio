import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner/Banner";
import About from "./about/About";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <SectionTitle title="About Me"></SectionTitle>
      <About></About>
    </>
  );
};

export default Home;
