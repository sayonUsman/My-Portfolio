import Typewriter from "typewriter-effect";
import image from "../../../assets/image.png";
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/Fa";

const Banner = () => {
  return (
    <div className="flex justify-center items-center px-9">
      <div className="flex mx-auto">
        <div className="mt-24 md:mt-32 lg:mt-40 2xl:mt-48 w-full card rounded lg:card-side">
          <figure>
            <img src={image} alt="Image" className="w-96 rounded" />
          </figure>

          <div className="card-body pl-0 lg:pl-16">
            <div className="flex my-auto">
              <div>
                <h3 className="text-2xl xl:text-3xl font-bold">
                  &lt; Hello World! &#47;&gt;
                </h3>

                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
                  I&apos;m Sayon Usman
                </h1>

                <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold mt-1">
                  <Typewriter
                    options={{
                      strings: ["Front-End Developer", "MERN Stack Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>

                <p className="text-lg font-semibold">
                  Interested to Learn Something New.
                </p>

                <p className="text-xl font-semibold mt-2 lg:mt-3 mb-2">
                  Get in Touch
                </p>

                <div className="flex">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sayon-usman-7526821b2/"
                  >
                    <IconContext.Provider value={{ size: "37px" }}>
                      <FaLinkedin></FaLinkedin>
                    </IconContext.Provider>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sayonUsman/"
                    className="pl-4"
                  >
                    <IconContext.Provider value={{ size: "37px" }}>
                      <FaGithubSquare></FaGithubSquare>
                    </IconContext.Provider>
                  </a>

                  <a className="pl-4">
                    <IconContext.Provider value={{ size: "37px" }}>
                      <FaFacebookSquare></FaFacebookSquare>
                    </IconContext.Provider>
                  </a>

                  <a className="pl-4">
                    <IconContext.Provider value={{ size: "37px" }}>
                      <FaInstagramSquare></FaInstagramSquare>
                    </IconContext.Provider>
                  </a>
                </div>

                <div className="mt-9 lg:mt-10">
                  <button className="btn rounded-md bg-black text-white hover:text-black">
                    Download Resume
                  </button>

                  <button className="btn rounded-md bg-black text-white hover:text-black ml-2 sm:ml-5 lg:ml-9">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
