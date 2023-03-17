import Head from "next/head";
import styled from "styled-components";
import Project from "@/components/Project";

// Image Imports
import labPreviewPic from "public/project-pictures/home-server/cheap-pc.png";
import smartBudgetPreviewPic from "public/project-pictures/smart-budget/smart-budget.png";

const Projects = () => {
	return (
		<>
			<Head>
				<title>Projects | Tyler Chen</title>
				<meta name="description" content="Learn more about Tyler Chen's Projects" />
				<meta name="keywords" content="Tyler Chen, Projects" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StyledMain>
				<StyledSection>
					<StyledSectionTitle>
						<h2>Passion Projects</h2>
					</StyledSectionTitle>

					<Project
						title="Home Lab"
						description="2019 - Present | My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
					me to run a variety of applications such as websites, game servers, APIs, on high performance
					hardware."
						preview={labPreviewPic}
						techList={[
							"Networking",
							"Security",
							"Docker",
							"Operating Systems",
							"CI/CD",
							"Terminals",
						]}
						url={"/projects/home-server"}
						repoURL={"https://gitlab.tylerchen.ca/tylerchen/home-lab"}
					/>
					<Project
						title="Smart Budget Web Application"
						description="2022 - Present | Smart Budget is an app that I created to help interact with my spendings more. 
						Instead just paying off another number in your credit card statements, here you can organize,
						 interact and visualize how much you're spending!"
						preview={smartBudgetPreviewPic}
						techList={["MongoDB", "Express", "React", "TypeScript", "JWT"]}
						url={"/projects/smart-budget"}
						repoURL={"https://gitlab.tylerchen.ca/tylerchen/smart-budget"}
					/>
				</StyledSection>

				<StyledSection>
					<StyledSectionTitle>
						<h2>Other Noteworthy Projects</h2> {/* Make this bigger! And the other texts */}
					</StyledSectionTitle>

					<Project
						title="Valorant DuoQ"
						description="2022 | A matchmaking app that matches 2 Valorant players together based on filters and stats. "
						techList={[
							"MongoDB",
							"ExpressJS",
							"ReactTS",
							"NodeJS",
							"Ubuntu Server",
							"Apache2",
							"Git (GitHub)",
							"Typescript",
							"Styled Components",
						]}
						url={"/projects/duoq"}
					/>
					<Project
						title="Professional Valorant Player Network Analysis"
						description="2022 | In this project, we web scraped professional Valorant player data off of liquidpedia.com. 
					We then constructed the network and used various network analysis techniques to analyze our constructed 
					network. As the game is somewhat new, there is a lack of data and thus we used machine learning to do predictions."
						techList={[
							"iPython Notebooks",
							"Python",
							"Selenium",
							"Matplotlib",
							"Sklearn",
							"Tensorflow",
							"Seaborn",
							"Pandas",
							"Numpy",
							"Gephi",
						]}
						url={"/projects/network-analysis"}
						repoURL={"https://github.com/ScorpiosCrux/CPSC-572-Valorant-Network"}
						isLearnMoreDisabled
					/>

					<Project
						title="Personal Website"
						description="2023 | Currently, this website is the second version of my website that I've built."
						techList={[
							"NextJS",
							"ReactTS",
							"CSS",
							"HTML",
							"Apache2",
							"Search Engine Optimization",
							"GitLab CI",
							"Docker",
						]}
						url={"/projects/network-analysis"}
						repoURL={"https://gitlab.tylerchen.ca/tylerchen/personal-website-2023"}
						isLearnMoreDisabled
					/>

					<Project
						title="Gym Tracks"
						description="2022 | A simple gym tracking app built focused on building interfaces for the users. 
					Task Centered System Design was the technique used to build this app, which provides guidelines 
					on how to identify our users, gather requirements, design the interface and walkthrough the 
					interface with tasks."
						techList={["C#", "Blazor", "CSS", "HTML"]}
						url={"/"}
						repoURL={"https://gitlab.tylerchen.ca/tylerchen/gym-tracks"}
						isLearnMoreDisabled
					/>
				</StyledSection>
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;

	justify-content: start;
	align-items: center;

	padding: 0px 150px;
	max-width: 1600px;
`;

const StyledSection = styled.section`
	max-width: 1000px;
	width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledSectionTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;
export default Projects;
