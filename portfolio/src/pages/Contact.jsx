import React, { useState } from "react";
import SiteContainer from "../components/SiteContainer";

function Contact(siteLang) {
	const ContactNL = () => {
		const [mailTitle, setmailTitle] = useState("");
		const [mailBody, setmailBody] = useState("");
		return (
			<SiteContainer>
				<>
					<div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">ONDERWERP</h1>
						<input
							placeholder="Hoe gaat het?"
							type="text"
							onChange={() => {
								setmailTitle(event.target.value);
							}}
							className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
						/>

						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">BERICHT</h1>
						<textarea
							onChange={() => {
								setmailBody(event.target.value);
							}}
							placeholder="Ik zou je graag spreken."
							className="w-full p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
						/>

						<div className="w-full flex flex-row justify-between items-center">
							<p className="text-gray-900 dark:text-gray-300 text-sm"></p>

							<a
								target="_blank"
								href={`mailto:westerdijk@pm.me?subject=${mailTitle}&body=${mailBody}`}
								className="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
							>
								<span className="mt-[2px]">Stuur</span>
							</a>
						</div>
					</div>
				</>
			</SiteContainer>
		);
	};

	const ContactEN = () => {
		const [mailTitle, setmailTitle] = useState("");
		const [mailBody, setmailBody] = useState("");
		return (
			<SiteContainer>
				<>
					<div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">SUBJECT</h1>
						<input
							placeholder="How's it going?"
							type="text"
							onChange={() => {
								setmailTitle(event.target.value);
							}}
							className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
						/>

						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">BODY</h1>
						<textarea
							onChange={() => {
								setmailBody(event.target.value);
							}}
							placeholder="Tell me about your day."
							className="w-full p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
						/>

						<div className="w-full flex flex-row justify-between items-center">
							<p className="text-gray-900 dark:text-gray-300 text-sm"></p>

							<a
								target="_blank"
								href={`mailto:westerdijk@pm.me?subject=${mailTitle}&body=${mailBody}`}
								className="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
							>
								<span className="mt-[2px]">Send</span>
							</a>
						</div>
					</div>
				</>
			</SiteContainer>
		);
	};

	if (siteLang.siteLang === "NL") return <ContactNL />;
	else return <ContactEN />;
}

export default Contact;
