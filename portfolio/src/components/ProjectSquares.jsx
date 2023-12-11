import React from "react";
import ProjectSquare from "./ProjectSquare";
import Divider from "./Divider";

function ProjectSquares(siteLang) {
	const ProjectSquaresNL = () => {
		return (
			<>
				<Divider title="Schoolprojecten" />

				<div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
					<ProjectSquare
						href="https://dhwesterdijk.nl/irritant"
						name="Irritante Onepager"
						description="Een zo gebruikersonvriendelijk mogelijke OnePager."
						language="JavaScript"
						rating="6.5"
						hours="4"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/webgame"
						name="Webgame"
						description="Webgame van Snake gemaakt om in je browser gespeelt te worden"
						language="JavaScript"
						rating="8"
						hours="5"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/puzzle"
						name="Som Som Magie"
						description="Een applicatie die een som som puzzle kan genereren en oplossen."
						language="JavaScript"
						rating="4"
						hours="0.5"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/forum"
						name="Forum"
						description="Introductie in Backend Development, PHP en (My)SQL."
						language="PHP"
						rating="6.5"
						hours="8"
					/>
					<ProjectSquare
						href="https://github.com/48exa/cube-defense-arduino"
						name="Cube Defense Controller (code)"
						description="Arduino code voor de controller van zelfgemaakte game 'Cube Defense'"
						language="C++"
						rating="9.5"
						hours="20"
					/>
				</div>

				<Divider title="Persoonlijke projecten" />

				<div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
					<ProjectSquare
						href="https://dhwesterdijk.nl"
						name="Portfolio"
						description="Mijn portfolio, je kijkt er nu naar."
						language="React"
						rating="8"
						hours="12"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/discord_bot"
						name="Discord Bot"
						description="Een kleine Discord bot gemaakt om de Developer Badge te krijgen op Discord."
						language="JavaScript"
						rating="8.5"
						hours="2"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects"
						name="Calculator"
						description="Een console-based calculator, mijn eerste Rust applicatie!"
						language="Rust"
						rating="7"
						hours="1.5"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/releases/tag/array_gen"
						name="Rust Array Generator"
						description="Console-based applicatie die een Rust array maakt."
						language="Rust"
						rating="10"
						hours="2"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/python%20black%20hole%20calculator"
						name="Black Hole Massa Calculator"
						description="Heb je ooit willen weten hoe zwaar een zwart gat de grootte van een bowling bal is?"
						language="Python"
						rating="10"
						hours="4"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/hangman"
						name="Galgje"
						description="Gemaakt als oefening om goede en gedocumenteerde Rust code te schrijven."
						language="Rust"
						rating="10"
						hours="6"
					/>
				</div>
			</>
		);
	};

	const ProjectSquaresEN = () => {
		return (
			<>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
					<ProjectSquare
						href="https://dhwesterdijk.nl/irritant"
						name="Irritante Onepager"
						description="A OnePager designed to be as annoying / impossible to use."
						language="JavaScript"
						rating="6.5"
						hours="4"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/webgame"
						name="Webgame"
						description="A game of snake made to be played in the browser."
						language="JavaScript"
						rating="8"
						hours="5"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/puzzle"
						name="Som Som Magie"
						description="A Tool to solve 'som som magie' puzzles."
						language="JavaScript"
						rating="4"
						hours="0.5"
					/>
					<ProjectSquare
						href="https://dhwesterdijk.nl/forum"
						name="Forum"
						description="Introduction into Backend Development, PHP and (My)SQL"
						language="PHP"
						rating="6.5"
						hours="7.5"
					/>
					<ProjectSquare
						href="https://github.com/48exa/cube-defense-arduino"
						name="Cube Defense Controller (code)"
						description="Arduino code for the controller 'Cube Defense' made by me and classmates."
						language="C++"
						rating="9.5"
						hours="20"
					/>
				</div>

				<Divider title="Personal projects" />

				<div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
					<ProjectSquare
						href="https://dhwesterdijk.nl"
						name="Portfolio"
						description="My portfolio, you're on it right now."
						language="React"
						rating="8"
						hours="12"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/discord_bot"
						name="Discord Bot"
						description="My own tiny Discord bot made to get the Developer Badge on Discord."
						language="Javascript"
						rating="8.5"
						hours="2"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects"
						name="Calculator"
						description="A console based calculator built in Rust. My first ever Rust application."
						language="Rust"
						rating="7"
						hours="1.5"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/releases/tag/array_gen"
						name="Rust Array Generator"
						description="A console application that generates a Rust array."
						language="Rust"
						rating="10"
						hours="2"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/python%20black%20hole%20calculator"
						name="Black Hole Mass Calculator"
						description="Ever wanted to know how heavy a bowling ball sized black hole would be?"
						language="Python"
						rating="10"
						hours="4"
					/>
					<ProjectSquare
						href="https://github.com/48exa/projects/tree/main/hangman"
						name="Hangman"
						description="Made as an exercise to write clean and documented Rust code."
						language="Rust"
						rating="10"
						hours="6"
					/>
				</div>
			</>
		);
	};
	if (siteLang.siteLang.siteLang === "NL") return <ProjectSquaresNL />;
	else return <ProjectSquaresEN />;
}

export default ProjectSquares;
