import { motion } from "framer-motion";

const LogoCard = ({ logo }) => {
  return (
    <div className="flex mx-auto">
      <motion.div whileTap={{ scale: 0.8 }}>
        <div className="card card-compact w-24 h-24 m-3 bg-white shadow-md shadow-zinc-900 hover:shadow-orange-400 dark:shadow-[#14940c] dark:hover:shadow-[#bd8e42]">
          <div className="flex justify-center items-center h-full">
            <figure className="flex mx-auto my-auto">
              <img src={logo} alt="logo" className="w-16 h-16" />
            </figure>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LogoCard;
