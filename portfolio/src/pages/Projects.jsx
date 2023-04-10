import SiteContainer from "../components/SiteContainer";
import ProjectSquare from "../components/ProjectSquare";

function Projects(siteLang) {
  const ProjectsNL = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Projecten 📑</h1>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Dit zijn mijn projecten, zowel schoolwerk als vrijetijd. Ik probeer dit zo veel mogelijk te updaten en zo
            accuraat mogelijk te houden. Je kan hier zin welke taal ik (het meeste) heb gebruikt, mijn rating van het
            project en hoeveel tijd het mij (ongeveer) heeft gekost.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
            <ProjectSquare
              href="https://dhwesterdijk.nl"
              name="Portfolio"
              description="Mijn portfolio, orgineel gemaakt voor school maar later voor mezelf nagemaakt."
              language="React"
              rating="8"
              hours="8+"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/irritant"
              name="Irritante Onepager"
              description="Een OnePager die zo gebruikersonvriendelijk mogelijk is ingedeeld. Samenopdracht."
              language="Javascript"
              rating="6.8"
              hours="4"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/webgame"
              name="Webgame"
              description="Webgame van Snake gemaakt met HTML Canvas en Javascript, mijn eerste echte (bijna) pure JS App."
              language="Javascript"
              rating="9"
              hours="5"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects/tree/main/discord_bot"
              name="Discord Bot"
              description="Mijn eigen kleine Discord bot. Gemaakt om de Developer Badge te krijgen op Discord."
              language="Javascript"
              rating="10"
              hours="2"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects"
              name="Calculator"
              description="Een console-based calculator gemaakt in Rust, mijn eerste Rust applicatie!"
              language="Rust"
              rating="7"
              hours="1.5"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/puzzle"
              name="Som Som Magie"
              description="Een applicatie die een som som puzzle kan genereren en oplossen."
              language="Javascript"
              rating="4"
              hours="0.5"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects/releases/tag/array_gen"
              name="Rust Array Generator"
              description="Console-based applicatie die een stuk tekst verandert in een Rust Array. Gemaakt voor memes."
              language="Rust"
              rating="10"
              hours="2"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/forum"
              name="Forum"
              description="Introductie in Backend Development, PHP en (My)SQL."
              language="PHP"
              rating="5.5"
              hours="8"
            />
          </div>
        </>
      </SiteContainer>
    );
  };

  const ProjectsEN = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Projects 📑</h1>
          <p className="text-gray-300 text-lg leading-6 mb-4">
            These are my projects, both school and spare time. I try to update this page as much as possible and to keep
            the ratings and time as accurate as I can. You can see on each widget what language I (mostly) used, my
            eventual rating of the project and how much time I spent on it (estimate).
          </p>

          <p className="text-red-300 text-md leading-5 mb-12 italic text-opacity-70">
            Note that due to me being Dutch and me going to a Dutch college mean that{" "}
            <span className="font-extrabold">all</span> my school related projects will be in Dutch. If you are unable
            to read Dutch, then I suggest a browser extension to translate the webpage for you. Aplogies for the
            inconvinience.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
            <ProjectSquare
              href="https://dhwesterdijk.nl"
              name="Portfolio"
              description="My portfolio, you're on it right now. Originally made for school but later rebuilt for personal use."
              language="React"
              rating="8"
              hours="8+"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/irritant"
              name="Irritante Onepager"
              description="A OnePager designed to be as annoying / impossible to use. UX design is carefully considered to suck the most it can."
              language="Javascript"
              rating="6.8"
              hours="4"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/webgame"
              name="Webgame"
              description="A game of snake made to be played in the browser. Made by using the HTML <canvas> tag and Javascript."
              language="Javascript"
              rating="9"
              hours="5"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects/tree/main/discord_bot"
              name="Discord Bot"
              description="My own tiny Discord bot. I made this to get the Developer Badge on Discord."
              language="Javascript"
              rating="10"
              hours="2"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects"
              name="Calculator"
              description="A console based calculator built in Rust. This is my first ever Rust application."
              language="Rust"
              rating="7"
              hours="1.5"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/puzzle"
              name="Som Som Magie"
              description={
                <p>
                  <span className="text-red-300 italic">School Project</span>
                  <br />A Tool to solve 'som som magie' puzzles.
                </p>
              }
              language="Javascript"
              rating="4"
              hours="0.5"
            />
            <ProjectSquare
              href="https://github.com/48exa/projects/releases/tag/array_gen"
              name="Rust Array Generator"
              description="A console based application built in Rust that generates a Rust array for the text you give as input, made for memes."
              language="Rust"
              rating="10"
              hours="2"
            />
            <ProjectSquare
              href="https://dhwesterdijk.nl/forum"
              name="Forum"
              description={
                <p>
                  <span className="text-red-300 italic">School Project</span>
                  <br />
                  Introduction into Backend Development, PHP and (My)SQL
                </p>
              }
              language="PHP"
              rating="5.5"
              hours="8"
            />
          </div>
        </>
      </SiteContainer>
    );
  };

  if (siteLang.siteLang === "NL") return <ProjectsNL />;
  else return <ProjectsEN />;
}

export default Projects;
