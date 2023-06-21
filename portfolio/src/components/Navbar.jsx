import { FiMail } from "react-icons/fi";
import { SiGithub, SiDiscord } from "react-icons/si";
import Flag from "react-world-flags";
import { NavLink } from "react-router-dom";

function Navbar({ SetSiteLang, siteLang }) {
	const NavIcons = () => {
		return (
			<div className="md:grid hidden float-right m-[18px]">
				<ul className="grid grid-cols-3 gap-3">
					<li>
						<a href="https://github.com/48exa" target="_blank">
							<SiGithub className="w-6 h-6 transition ease-in-out delay-[10] hover:text-[#9aaddf] cursor-pointer" />
						</a>
					</li>
					<a href="https://discord.com/users/350306353702764554" target="_blank">
						<li>
							<SiDiscord className="w-6 h-6 transition ease-in-out delay-[10] hover:text-[#9aaddf] cursor-pointer" />
						</li>
					</a>
					<NavLink to="/contact" className={({ isActive }) => isActive && "text-[#9aaddf]"}>
						<li>
							<FiMail className="w-6 h-6 transition ease-in-out delay-[10] hover:text-[#9aaddf] cursor-pointer" />
						</li>
					</NavLink>
				</ul>
			</div>
		);
	};

	const NavButton = ({ children }) => {
		return (
			<li className="transition ease-in-out delay-[10] rounded-lg text-gray-300 hover:text-white hover:bg-[#2a2f3d] p-[6px] cursor-pointer text-center">
				{children}
			</li>
		);
	};

	const TranslateFlagButton = () => {
		return (
			<button
				className="transition ease-in-out delay-[10] rounded-lg hover:bg-[#2a2f3d] p-2 m-1 cursor-pointer w-10 h-10"
				onClick={() => {
					if (siteLang === "NL") {
						localStorage.setItem("lang", "GB");
					} else {
						localStorage.setItem("lang", "NL");
					}
					SetSiteLang(localStorage.getItem("lang"));
				}}
			>
				<Flag code={siteLang} />
			</button>
		);
	};

	const NavPages = () => {
		return (
			<div className="md:float-left flex items-center h-[60px]">
				<ul className="flex flex-row">
					<TranslateFlagButton />
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "bg-[#2a2f3d] flex items-center rounded-lg h-11 mt-[2px]" : "mt-2"
						}
					>
						<NavButton>{siteLang === "NL" ? "Over Mij" : "About Me"}</NavButton>
					</NavLink>
					<p className="mt-3 p-1 text-opacity-40 text-white hidden md:block">•</p>
					<NavLink
						to="/projects"
						className={({ isActive }) =>
							isActive ? "bg-[#2a2f3d] flex items-center rounded-lg h-11 mt-[2px]" : "mt-2"
						}
					>
						<NavButton>{siteLang === "NL" ? "Projecten" : "Projects"}</NavButton>
					</NavLink>
					<p className="mt-3 p-1 text-opacity-40 text-white hidden md:block">•</p>
					<NavLink
						to="/experience"
						className={({ isActive }) =>
							isActive ? "bg-[#2a2f3d] flex items-center rounded-lg h-11 mt-[2px]" : "mt-2 hover:bg-transparent"
						}
					>
						<NavButton>{siteLang === "NL" ? "Ervaring met coderen" : "Coding experience"}</NavButton>
					</NavLink>
				</ul>
			</div>
		);
	};

	return (
		<nav className="bg-[#3f4d5a5d] z-50 fixed m-3 backdrop-blur-[6px] rounded-md border-solid border-spacing-4 border border-[#425d72] w-[370px] md:w-[70%]">
			<NavPages />
			<NavIcons />
		</nav>
	);
}

export default Navbar;
