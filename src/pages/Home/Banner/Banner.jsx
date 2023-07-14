import Typewriter from "typewriter-effect";
import image from "../../../assets/image.png";
import { IconContext } from "react-icons";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/Fa";

const Banner = () => {
  AOS.init();

  return (
    <div className="flex justify-center items-center px-7 sm:px-0">
      <div className="flex mx-auto">
        <div className="mt-24 md:mt-32 lg:mt-40 2xl:mt-48 w-full card rounded lg:card-side">
          <figure
            data-aos="fade-down"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <img src={image} alt="Image" className="w-96 rounded" />
          </figure>

          <div className="card-body pl-0 lg:pl-16">
            <div className="flex my-auto">
              <div className="font-belano">
                <h3
                  className="text-2xl xl:text-3xl font-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  &lt; Hello World! &#47;&gt;
                </h3>

                <h1
                  className="text-3xl sm:text-4xl xl:text-5xl font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  I&apos;m Sayon Usman
                </h1>

                <h3
                  className="text-xl sm:text-2xl xl:text-3xl font-semibold mt-1"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  <Typewriter
                    options={{
                      strings: ["Front-End Developer", "MERN Stack Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>

                <p
                  className="text-sm sm:text-md xl:text-lg font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="2300"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  Interested to Learn Something New.
                </p>

                <p
                  className="text-xl font-semibold mt-2 lg:mt-3 mb-2"
                  data-aos="fade-up"
                  data-aos-duration="2400"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  Get in Touch
                </p>

                <div
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sayon-usman-7526821b2/"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <IconContext.Provider value={{ size: "37px" }}>
                        <FaLinkedin></FaLinkedin>
                      </IconContext.Provider>
                    </motion.div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sayonUsman/"
                    className="pl-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <IconContext.Provider value={{ size: "37px" }}>
                        <FaGithubSquare></FaGithubSquare>
                      </IconContext.Provider>
                    </motion.div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/sayon.usman.9"
                    className="pl-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <IconContext.Provider value={{ size: "37px" }}>
                        <FaFacebookSquare></FaFacebookSquare>
                      </IconContext.Provider>
                    </motion.div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/sayonusman/"
                    className="pl-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <IconContext.Provider value={{ size: "37px" }}>
                        <FaInstagramSquare></FaInstagramSquare>
                      </IconContext.Provider>
                    </motion.div>
                  </a>
                </div>

                <div
                  className="flex mt-9 lg:mt-10"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <a
                      href="./sayon-resume.pdf"
                      className="btn text-black bg-white hover:bg-white rounded-md shadow-md shadow-zinc-900 hover:text-orange-500 hover:shadow-orange-400 dark:text-[#14940c] dark:hover:text-[#bd8e42] dark:bg-[#0A0A0A] dark:hover:bg-[#0A0A0A] dark:shadow-[#14940c] dark:hover:shadow-[#bd8e42] border-none"
                      download
                    >
                      Download Resume
                    </a>
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.8 }}>
                    <a
                      href="mailto:sayonusman.ma@gmail.com"
                      className="btn text-black bg-white hover:bg-white rounded-md shadow-md shadow-zinc-900 hover:text-orange-500 hover:shadow-orange-400 dark:text-[#14940c] dark:hover:text-[#bd8e42] dark:bg-[#0A0A0A] dark:hover:bg-[#0A0A0A] dark:shadow-[#14940c] dark:hover:shadow-[#bd8e42] ml-2 sm:ml-5 lg:ml-9 border-none"
                    >
                      Contact Me
                    </a>
                  </motion.div>
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
