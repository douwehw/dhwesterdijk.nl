import React from "react";
import scrollToTop from "../util/scrollToTop";
import SiteContainer from "../components/SiteContainer";

export default function Music(siteLang) {
	const MusicNL = () => {
		return (
			<SiteContainer>
				<h1 className="font-bold text-5xl mb-4">Hoi daar!</h1>
				<p className="text-gray-300 text-lg leading-6 mb-4">
					Dit gedeelte van de website is helaas nog onder constructie 👷
				</p>
			</SiteContainer>
		);
	};
	const MusicEN = () => {
		return (
			<SiteContainer>
				<h1 className="font-bold text-5xl mb-4">Hello there!</h1>
				<p className="text-gray-300 text-lg leading-6 mb-4">
					This part of the website is sadly still under construction 👷
				</p>
			</SiteContainer>
		);
	};

	scrollToTop();

	if (siteLang.siteLang === "NL") return <MusicNL />;
	else return <MusicEN />;
}
