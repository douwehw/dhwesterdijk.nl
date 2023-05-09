import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";

function ContactIcon({ name, link, icon }) {
	return (
		<motion.li
			whileHover={{
				scale: 1.2,
				transition: { duration: 0.2 },
			}}
			className="flex p-2"
		>
			<a href={link} target="_blank">
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
			</a>
		</motion.li>
	);
}

export default ContactIcon;
