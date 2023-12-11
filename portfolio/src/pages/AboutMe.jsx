import SiteContainer from "../components/SiteContainer";
import ItalicLink from "../components/ItalicLink";
import getAge from "../util/getAge";
import scrollToTop from "../util/scrollToTop";
import { Link } from "react-router-dom";

function AboutMe(siteLang) {
	const AboutMeNL = () => {
		return (
			<SiteContainer>
				<>
					<h1 className="font-bold text-5xl mb-4">Hallo, ik ben Douwe 👋</h1>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Ik ben student aan het Alfa-College als Software Developer. Ik ben {getAge("2004/11/26")} jaar oud en ik
						woon in in Assen. Ik hou van muziek en ik heb al sinds een jonge leeftijd een gezonde obsessie met
						technologie.
					</p>

					<h2 className="text-4xl mb-4">Wat ik doe 😶‍🌫️</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Naast programmeren doe ik nog meer dingen. Ik wandel graag en ik hou heel erg van muziek.
					</p>

					<h2 className="text-4xl mb-4">Waarom Software Development ❓</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Al vanaf jong gebruik ik een computer. Als jong kind speelde ik veel video games en hierdoor maakte ik
						kennis met de communities van deze videogames, onder andere{" "}
						<ItalicLink title="minecraft.net" href="https://www.minecraft.net/">
							Minecraft
						</ItalicLink>
						.<br /> Ik raakte bevriend met mensen die verstand hadden van modding en sindsdien heb ik dat altijd ook
						willen kunnen doen. Hoe meer ik mij verdiepte in hoe coding werkte hoe meer ik er van wilde weten. Hierdoor
						heb ik uiteindelijk heb aangemeld voor de opleiding Software Developer.
					</p>

					<h2 className="text-4xl mb-4">Hobbies 🕹️</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Ik speel voornamelijk graag video games, ik luister erg graag naar muziek en ik houd van lezen. Ook ben ik
						graag bezig met coding en het leren hiervan. Ik heb in mijn vrije tijd mijzelf de basis van Python, HTML,
						PHP, CSS, JavaScript, Java, C#, Kotlin, TypeScript, React & Rust. aangeleerd in het laatste jaar.
					</p>
				</>
			</SiteContainer>
		);
	};

	const AboutMeEN = () => {
		return (
			<SiteContainer>
				<>
					<h1 className="font-bold text-5xl mb-4">Hi, I'm Douwe 👋</h1>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						I am a student at the Alfa-College where I learn to become a Software Developer. I am {getAge("2004/11/26")}{" "}
						years old and I live in Assen. From a young age I've always had a healthy obesssion with technology.
					</p>

					<h2 className="text-4xl mb-4">What I do 😶‍🌫️</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Aside from proramming I do a handful of other things in my life. I like to walk outside and I love listening
						to music.
					</p>

					<h2 className="text-4xl mb-4">Why Software Development ❓</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						I've been using a computer since I was very young. As a young child I played a lot of video games, and
						through this I got into the communities of those games, namely{" "}
						<ItalicLink title="minecraft.net" href="https://www.minecraft.net/">
							Minecraft
						</ItalicLink>
						.<br /> I became friends with people who knew a lot about modding and ever since I've always wanted to have
						the know-how to do what they did. The more I chased that feeling and the more I delved deeper into how
						coding worked, the more I found out and wanted to learn. This snowball-effect eventually made me apply to to
						study Software Development.
					</p>

					<h2 className="text-4xl mb-4">Hobbies 🕹️</h2>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						I enjoy playing video games a lot, I enjoy listening to music and I like reading. I also enjoy coding and
						learning how to code better. As of now I've taught myself how to use various coding languages like Python,
						HTML, PHP, CSS, JavaScript, Java, C#, Kotlin, TypeScript, React & Rust.
					</p>
				</>
			</SiteContainer>
		);
	};

	scrollToTop();

	if (siteLang.siteLang === "NL") return <AboutMeNL />;
	else return <AboutMeEN />;
}

export default AboutMe;
