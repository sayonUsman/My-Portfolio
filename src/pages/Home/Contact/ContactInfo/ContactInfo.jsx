import { motion } from "framer-motion";

const ContactInfo = ({ info }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <span className="text-lg font-semibold ml-3">{info}</span>
    </motion.div>
  );
};

export default ContactInfo;
