import {
  SiTypescript,
  SiVisualstudiocode,
  SiReact,
  SiNodedotjs as SiNodeJs,
  SiJavascript,
  SiRust,
  SiVisualstudio,
  SiFigma,
  SiAdobephotoshop,
  SiKotlin,
  SiGit,
  SiPython,
  SiTailwindcss,
  SiGithub,
  SiAdobepremierepro,
  SiIntellijidea,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import SiteContainer from "../components/SiteContainer";
import ExperienceIcon from "../components/ExperienceIcon";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";

function Experience(siteLang) {
  const ExperienceList = () => {
    return (
      <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-black/10 mb-12">
        <ExperienceIcon icon={SiHtml5} name="HTML" />
        <ExperienceIcon icon={SiCss3} name="CSS" />
        <ExperienceIcon icon={SiJavascript} name="TypeScript" />
        <ExperienceIcon icon={SiTypescript} name="JavaScript" />
        <ExperienceIcon icon={SiTailwindcss} name="Tailwind CSS" />
        <ExperienceIcon icon={SiReact} name="React.js" />
        <ExperienceIcon icon={SiNodeJs} name="Node.js" />
        <ExperienceIcon icon={SiBootstrap} name="Bootstrap" />
        <ExperienceIcon icon={SiPython} name="Python" />
        <ExperienceIcon icon={SiKotlin} name="Kotlin" />
        <ExperienceIcon icon={SiCsharp} name="C#" />
        <ExperienceIcon icon={SiRust} name="Rust" />
        <ExperienceIcon icon={SiVisualstudiocode} name="VSCode" />
        <ExperienceIcon icon={SiVisualstudio} name="Visual Studio" />
        <ExperienceIcon icon={SiFigma} name="Figma" />
        <ExperienceIcon icon={SiAdobephotoshop} name="Photoshop" />
        <ExperienceIcon icon={SiAdobepremierepro} name="Premiere" />
        <ExperienceIcon icon={SiIntellijidea} name="Intelij IDEA" />
        <ExperienceIcon icon={SiGit} name="Git" />
        <ExperienceIcon icon={SiGithub} name="GitHub" />
      </div>
    );
  };

  const ExperienceNL = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Ervaring met coderen 💻</h1>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Ik programmeer sinds 2022. Ik ben destijds begonnen met het leren van Python, dit heeft mij erg veel
            geholpen om de denken op de manier die nodig is om te programmeren. Ik ben ook in September van datzelfde
            jaar begonnen aan een MBO Niveau 4 opleiding tot Software Developer aan het Alfa-College in Groningen. Ik
            heb in een kort jaar enorm veel progressie gemaakt in wat ik kan met mijn code, als je wil zien wat ik voor
            / via school heb gemaakt. Kijk dan in het tabblad{" "}
            <Tooltip title="/projects" distance="5" position="bottom">
              <Link to="/projects">
                <span className="underline">projecten</span>
              </Link>
            </Tooltip>
            . Hier post ik namelijk al mijn projecten
          </p>

          <h2 className="text-4xl mb-4">Ervaringen met software 🖥️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-2">
            Dit is een lijst met alle software / programmeertalen die ik ken en kan gebruiken.
          </p>
          <ExperienceList />
          <h2 className="text-4xl mb-4">Wat verder 🤔</h2>
          <p className="text-gray-300 text-lg leading-6 mb-2">
            Ik ben op het moment aan het studeren om een Frontend Developer te worden. Ik heb ook mijn portfolio
            herschreven in React om dit doel te bereiken. Ik hoop snel mijn stageplekken te bezoeken om het echte
            werkleven te ervaren en mijn skills echt te perfecten om een nuttige toevoeging te zijn aan de samenleving.
          </p>
        </>
      </SiteContainer>
    );
  };

  const ExperienceEN = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Coding experience 💻</h1>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            I started coding since 2022. In that year I picked up Python as my first programming language, this has
            helped me grasp the mindset required to code and problem solve. In September of the same year I started
            going to college to become a Software Devloper at the Alfa-College in Groningen. In one short year I have
            made an enormous amount of progress in both my way of thinking, and the amount of programming languages I
            can use. If you want to see what I have all made over the years, visit the tab{" "}
            <Tooltip title="/projects" distance="5" position="bottom">
              <Link to="/projects">
                <span className="underline">projects</span>
              </Link>
            </Tooltip>
            . This is where I post all of my projects
          </p>

          <h2 className="text-4xl mb-4">Experience with Software 🖥️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-2">
            This is the list of all the applications / programming languages I can use and understand.
          </p>
          <ExperienceList />
          <h2 className="text-4xl mb-4">What next 🤔</h2>
          <p className="text-gray-300 text-lg leading-6 mb-2">
            I am currently studying to become a Frontend Developer. This is why I decided to rewrite my entire portfolio
            in React. I hope to get to my school internships fast so that I can experience what it is like to really
            work in a job enviroment and further hone my skills to perfection.
          </p>
        </>
      </SiteContainer>
    );
  };

  if (siteLang.siteLang === "NL") return <ExperienceNL />;
  else return <ExperienceEN />;
}

export default Experience;
