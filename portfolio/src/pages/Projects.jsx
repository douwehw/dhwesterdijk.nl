import SiteContainer from "../components/SiteContainer";
import scrollToTop from "../util/scrollToTop";
import ProjectSquares from "../components/ProjectSquares";

function Projects(siteLang) {
	const ProjectsNL = () => {
		return (
			<SiteContainer>
				<>
					<h1 className="font-bold text-5xl mb-4">Projecten 📑</h1>
					<p className="text-gray-300 text-lg leading-6 mb-12">
						Dit zijn mijn projecten, zowel schoolwerk als vrije tijd. Ik probeer dit zo veel mogelijk te updaten en zo
						accuraat mogelijk te houden. Je kan hier zin welke programeertaal ik (het meeste) heb gebruikt, mijn rating
						van het project en hoeveel tijd het mij (ongeveer) heeft gekost.
					</p>
					<ProjectSquares siteLang={siteLang} />
				</>
			</SiteContainer>
		);
	};

	const ProjectsEN = () => {
		return (
			<SiteContainer>
				<>
					<h1 className="font-bold text-5xl mb-4">Projects 📑</h1>
					<p className="text-gray-300 text-lg leading-6 mb-4">
						These are my projects, both school and spare time. I try to update this page as much as possible and to keep
						the ratings and time as accurate as I can. You can see on each widget what language I (mostly) used, my
						eventual rating of the project and how much time I spent on it (estimate).
					</p>
					<ProjectSquares siteLang={siteLang} />
				</>
			</SiteContainer>
		);
	};

	scrollToTop();

	if (siteLang.siteLang === "NL") return <ProjectsNL />;
	else return <ProjectsEN />;
}

export default Projects;
