import { motion } from "framer-motion";
import AOS from "aos";
import { IconContext } from "react-icons";
import { RiUserLocationFill, RiWhatsappFill } from "react-icons/Ri";
import { MdEmail } from "react-icons/Md";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/Fa";
import ContactInfo from "./ContactInfo/ContactInfo";
import MessageCard from "./MessageCard/MessageCard";

const Contact = () => {
  AOS.init();

  return (
    <div className="flex mt-3 md:mt-7 mb-24">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="flex my-auto md:w-1/2">
          <div>
            <IconContext.Provider value={{ size: "25px" }}>
              <div
                className="flex mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <RiUserLocationFill></RiUserLocationFill>
                <ContactInfo info={"Riyadh, Saudi Arabia."}></ContactInfo>
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: "25px" }}>
              <div
                className="flex my-2"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <RiWhatsappFill></RiWhatsappFill>
                <ContactInfo info={"+966552798357"}></ContactInfo>
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: "25px" }}>
              <div
                className="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <MdEmail></MdEmail>
                <ContactInfo info={"sayonusman.ma@gmail.com"}></ContactInfo>
              </div>
            </IconContext.Provider>

            <div
              className="flex mt-5"
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
          </div>
        </div>

        <MessageCard></MessageCard>
      </div>
    </div>
  );
};

export default Contact;
