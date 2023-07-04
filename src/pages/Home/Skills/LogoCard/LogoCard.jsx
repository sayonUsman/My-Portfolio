import { motion } from "framer-motion";

const LogoCard = ({ logo }) => {
  return (
    <div className="flex mx-auto">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="card card-compact w-24 h-24 bg-white shadow-md shadow-zinc-900 m-3 hover:hover:shadow-orange-400">
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
