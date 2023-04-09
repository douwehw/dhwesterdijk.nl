import { FiMail } from "react-icons/fi";
import { SiGithub, SiDiscord } from "react-icons/si";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";


function Navbar({ SetSiteLang, siteLang }) {
  const NavIcons = () => {
    return (
      <div className="grid float-right m-4">
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
          <a href="mailto: westerdijk@protonmail.com" target="_blank">
            <li>
              <FiMail className="w-6 h-6 transition ease-in-out delay-[10] hover:text-[#9aaddf] cursor-pointer" />
            </li>
          </a>
        </ul>
      </div>
    );
  };

  const NavButton = ({ children }) => {
    return (
      <li className="transition ease-in-out delay-[10] rounded-lg text-gray-300 hover:text-white hover:bg-[#2a2f3d] p-2 mt-2 cursor-pointer break-normal">
        {children}
      </li>
    );
  };

  const TranslateFlagButton = () => {
    return (
      <button
        className="transition ease-in-out delay-[10] rounded-lg hover:bg-[#2a2f3d] p-2 m-1 mt-2 cursor-pointer w-10 h-10"
        onClick={() => {
          siteLang === "NL" ? SetSiteLang("GB") : SetSiteLang("NL");
        }}
      >
        <Flag code={siteLang} />
      </button>
    );
  };

  const NavPages = () => {
    return (
      <div className="float-left">
        <ul className="flex flex-row">
          <TranslateFlagButton />
          <Link to="/">
            <NavButton>{siteLang === "NL" ? "Over Mij" : "About Me"}</NavButton>
          </Link>
          <p className="mt-3 p-1 text-opacity-40 text-white">•</p>
          <Link to="/projects">
            <NavButton>{siteLang === "NL" ? "Projecten" : "Projects"}</NavButton>
          </Link>
          <p className="mt-3 p-1 text-opacity-40 text-white">•</p>
          <Link to="/experience">
            <NavButton>{siteLang === "NL" ? "Ervaring met coderen" : "Coding experience"}</NavButton>
          </Link>
        </ul>
      </div>
    );
  };

  return (
    <nav className="bg-[#212c3675] z-50 fixed m-3 backdrop-blur-[6px] rounded-md border-solid border-spacing-4 border border-[#425d72] w-[540px] md:w-[70%]">
      <NavPages />
      <NavIcons />
    </nav>
  );
}

export default Navbar;
