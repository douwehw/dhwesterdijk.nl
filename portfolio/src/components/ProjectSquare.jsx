import React from "react";
import { motion } from "framer-motion";
import { AiOutlineTrophy } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { languages } from "../util/languageColors";

function ProjectSquare({ href, name, description, language, rating, hours }) {
	return (
		<motion.a
			whileHover={{
				scale: 1.03,
				transition: { duration: 0.2 },
			}}
			href={href}
			rel="noreferrer"
			target="_blank"
		>
			<div className="flex flex-col h-36 p-4 bg-black/10 rounded-md border border-slate-800 hover:border-slate-600 transition-colors duration-75 cursor-pointer">
				<h1 className="font-semibold mb-1">{name}</h1>
				<p className="text-sm text-gray-100/70">{description}</p>
				<div className="mt-auto flex flex-row gap-4 text-gray-300 text-sm">
					<p className="flex flex-row items-center">
						<motion.div
							className="w-3 h-3 rounded-full mr-1"
							style={{ background: languages[language], border: `solid 3px ${languages[language]}}` }}
						/>
						{language}
					</p>

					<p className="flex flex-row items-center justify-center">
						<AiOutlineTrophy className="mr-1 w-4 h-4" /> {rating}/10
					</p>
					<p className="flex flex-row items-center justify-center">
						<CgSandClock className="mr-1 w-4 h-4" /> {hours}
					</p>
				</div>
			</div>
		</motion.a>
	);
}

export default ProjectSquare;
