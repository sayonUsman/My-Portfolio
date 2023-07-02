import AOS from "aos";
import "aos/dist/aos.css";

const LogoCard = ({ logo, title }) => {
  AOS.init();

  return (
    <div className="flex mx-auto mt-5">
      <div
        className="card card-compact w-40 h-40 sm:w-64 sm:h-64 bg-white border border-black mb-5"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex justify-center items-center h-full">
          <figure className="flex mx-auto my-auto">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-24 h-24 sm:w-36 sm:h-36"
              />
              <h2 className="text-lg text-center font-semibold pt-1">
                {title}
              </h2>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
