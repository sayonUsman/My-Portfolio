import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ title }) => {
  AOS.init();

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mt-16 sm:mt-24 lg:mt-28 xl:mt-32 pl-7 sm:pl-9">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
