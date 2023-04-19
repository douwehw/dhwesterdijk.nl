import { Tooltip } from "react-tippy";
import { motion } from "framer-motion";

function ExperienceIcon({ name, icon }) {
  return (
    <motion.li
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      className="flex p-2"
    >
      <Tooltip
        title={name}
        animation="shift"
        duration="150"
        delay="0"
        position="bottom"
        distance="5"
        theme="dark"
        inertia="true"
        useContext="true"
      >
        <span>{icon({ className: "h-6 w-6" })}</span>
      </Tooltip>
    </motion.li>
  );
}

export default ExperienceIcon;
