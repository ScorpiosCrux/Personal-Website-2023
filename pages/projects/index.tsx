import styled from "styled-components";
import Project from "@/components/Project";

const Projects = () => {
	return (
		<StyledMain>
			<StyledSection>
				<StyledSectionTitle>
					<h2>Passion Projects</h2>
				</StyledSectionTitle>

				<Project
					title="Home Servers Setup"
					description="My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
						me to run a variety of applications such as websites, game servers, APIs, on high performance
						hardware."
					techList={["Networking", "Security", "Docker", "Operating Systems", "CI/CD", "Terminals"]}
					url={"/projects/home-server"}
				/>
				<Project title="Smart Budget Application" description="" techList={[]} url={"/"} />
			</StyledSection>

			<StyledSection>
				<StyledSectionTitle>
					<h2>Other Noteworthy Projects</h2> {/* Make this bigger! And the other texts */}
				</StyledSectionTitle>

				<Project
					title="Home Servers Setup"
					description="My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
						me to run a variety of applications such as websites, game servers, APIs, on high performance
						hardware."
					techList={["Networking", "Security", "Docker", "Operating Systems", "CI/CD", "Terminals"]}
					url={"/"}
				/>
				<Project title="Smart Budget Application" description="" techList={[]} 
				url={"/"}/>
			</StyledSection>
		</StyledMain>
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
`;

const StyledSectionTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;
export default Projects;
