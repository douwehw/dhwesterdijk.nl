import React, { useState } from "react";
import SiteContainer from "../components/SiteContainer";
import ContactIcon from "../components/ContactIcon";
import { SiGithub, SiTwitter, SiStackoverflow, SiLinkedin, SiInstagram } from "react-icons/si";
import scrollToTop from "../util/scrollToTop";

function Contact(siteLang) {
	const ContactNL = () => {
		const [mailTitle, setmailTitle] = useState("");
		const [mailBody, setmailBody] = useState("");
		return (
			<SiteContainer>
				<>
					<h1 className="font-bold text-5xl mb-4">Stuur mij een email 📬</h1>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Heb je een vraag over iets of wil je contact opnemen voor iets? Stuur mij gerust een email! ik probeer altijd zo snel mogelijk
						te reageren.
					</p>

					<div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white/5 rounded-md p-4 border border-zinc-800/50 mb-10">
						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">ONDERWERP</h1>
						<input
							placeholder="Hallo!"
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
							placeholder="Hoe gaat het?"
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

					<h2 className="text-4xl mb-4">Liever contact op een andere manier?</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Ik ben te vinden op deze platforms, ik reageer hier mogelijk minder snel op. Als het dringend is stuur dan een email. Als je een
						casual gesprek wil kan je mij misschien hier beter bereiken
					</p>
					<div className="w-100% flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-black/10 mb-12">
						<ContactIcon icon={SiGithub} name="GitHub" link="https://github.com/48exa" />
						<ContactIcon icon={SiTwitter} name="Twitter" link="https://twitter.com/48exa" />
						<ContactIcon icon={SiStackoverflow} name="StackOverflow" link="https://stackoverflow.com/users/21626728/48exa" />
						<ContactIcon icon={SiLinkedin} name="LinkedIn" link="https://www.linkedin.com/in/douwe-westerdijk-263091276/" />
						<ContactIcon icon={SiInstagram} name="Instagram" link="https://www.instagram.com/dhwdijk/" />
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
					<h1 className="font-bold text-5xl mb-4">Send me an email 📬</h1>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Do you have a question or do you want to get in conact about something else? Feel free to send me an email! I try to respond as
						fast as I possibly can.
					</p>

					<div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white/5 rounded-md p-4 border border-zinc-800/50 mb-10">
						<h1 className="font-bold text-sm dark:text-slate-500 mb-1">SUBJECT</h1>
						<input
							placeholder="Hi!"
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
							placeholder="How's it going?"
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

					<h2 className="text-4xl mb-4">Would you rather get in contact another way?</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						You can find me on these platforms, I might respond less quickly on here. If you are need a quick respond it is best to send an
						email. If you want a more casual conversation than feel free to hit me up here.
					</p>
					<div className="w-100% flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-black/10 mb-12">
						<ContactIcon icon={SiGithub} name="GitHub" link="https://github.com/48exa" />
						<ContactIcon icon={SiTwitter} name="Twitter" link="https://twitter.com/48exa" />
						<ContactIcon icon={SiStackoverflow} name="StackOverflow" link="https://stackoverflow.com/users/21626728/48exa" />
						<ContactIcon icon={SiLinkedin} name="LinkedIn" link="https://www.linkedin.com/in/douwe-westerdijk-263091276/" />
						<ContactIcon icon={SiInstagram} name="Instagram" link="https://www.instagram.com/dhwdijk/" />
					</div>
				</>
			</SiteContainer>
		);
	};

	scrollToTop();
	if (siteLang.siteLang === "NL") return <ContactNL />;
	else return <ContactEN />;
}

export default Contact;
