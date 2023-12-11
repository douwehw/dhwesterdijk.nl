import { motion } from "framer-motion";

function SiteContainer({ children }) {
  return (
    <motion.div
      className="text-center md:w-[40%] w-[65%] mt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default SiteContainer;
