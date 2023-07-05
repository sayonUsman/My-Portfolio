import AOS from "aos";
import { motion } from "framer-motion";

const MessageCard = () => {
  AOS.init();

  return (
    <div className="sm:w-96 lg:ml-7">
      <h3
        className="text-2xl font-semibold mt-12 md:mt-0"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        Tell Me Your Request
      </h3>

      <div
        className="card rounded-lg card-compact w-72 sm:w-full shadow-md shadow-zinc-900 mt-4 px-5 py-4"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <input type="text" placeholder="Name" className="input input-md mb-5" />

        <input
          type="email"
          placeholder="Email"
          className="input input-md mb-7"
        />

        <textarea
          placeholder="Message"
          className="textarea textarea-lg"
        ></textarea>

        <div className="flex mt-7">
          <div className="flex mx-auto">
            <motion.div whileTap={{ scale: 0.8 }}>
              <button className="h-10 w-36 rounded-md shadow-md shadow-zinc-900 hover:text-orange-500 hover:shadow-orange-400">
                SENT
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;