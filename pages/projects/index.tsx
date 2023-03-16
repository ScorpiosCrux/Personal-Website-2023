import Head from "next/head";
import styled from "styled-components";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

// Image Imports
import labPreviewPic from "public/project-pictures/home-server/cheap-pc.png";
import smartBudgetPreviewPic from "public/project-pictures/smart-budget/smart-budget.png";

const Projects = () => {
	return (
		<>
			<Head>
				<title>Tyler Chen | Projects</title>
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

					<FeaturedProject
						title="Home Servers Setup"
						description="My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
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
					/>
					<FeaturedProject
						title="Smart Budget Application"
						description="Smart Budget is an app that I created to help interact with my spendings more. 
						Instead just paying off another number in your credit card statements, here you can organize,
						 interact and visualize how much you're spending!"
						preview={smartBudgetPreviewPic}
						techList={["MongoDB", "Express", "React", "TypeScript", "JWT"]}
						url={"/projects/smart-budget"}
					/>
				</StyledSection>

				<StyledSection>
					<StyledSectionTitle>
						<h2>Other Noteworthy Projects</h2> {/* Make this bigger! And the other texts */}
					</StyledSectionTitle>

					<Project
						title="Valorant DuoQ"
						description="A matchmaking app that matches 2 Valorant players together based on filters and stats. "
						techList={["ReactTS", "TypeScript", "Express", "Apache 2", "Styled Components"]}
						url={"/"}
					/>
					<Project
						title="Professional Valorant Player Network Analysis"
						description="In this project, we web scraped professional Valorant player data off of liquidpedia.com. 
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
						url={"/"}
					/>

					<Project
						title="Personal Website"
						description="Currently, this website is the second version of my website that I've built."
						techList={["NextJS", "ReactTS", "CSS", "HTML", "Apache2", "Search Engine Optimization"]}
						url={"/"}
					/>

					<Project
						title="Gym Tracks"
						description="A simple gym tracking app built focused on building interfaces for the users. 
					Task Centered System Design was the technique used to build this app, which provides guidelines 
					on how to identify our users, gather requirements, design the interface and walkthrough the 
					interface with tasks."
						techList={["C#", "Blazor", "CSS", "HTML"]}
						url={"/"}
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
`;

const StyledSectionTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;
export default Projects;
