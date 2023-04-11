import { motion } from "framer-motion";

function SiteContainer({ children }) {
  return (
    <motion.div
      className="text-center md:w-[50%] w-[65%]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeInOut", duration: 0.20 }}
    >
      {children}
    </motion.div>
  );
}

export default SiteContainer;
