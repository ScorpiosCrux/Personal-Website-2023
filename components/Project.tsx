import styled from "styled-components";
import styles from "@/components/Project.module.css";
import Image from "next/image";

const Project = () => {
	return (
		<StyledProjectGrid>
			<StyledProject>
				<ProjectImageWrapper>
					<ProjectImage />
				</ProjectImageWrapper>
				<ProjectContent>
					<h3>Home Servers Setup</h3>
					<p>
						My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
						me to run a variety of applications such as websites, game servers, APIs, on high performance
						hardware.
					</p>

					<TechList>
						<TechItem>Networking, Security</TechItem>
						<TechItem>Docker</TechItem>
						<TechItem>Operating Systems</TechItem>
						<TechItem>CI/CD</TechItem>
						<TechItem>Terminals</TechItem>
					</TechList>
				</ProjectContent>
			</StyledProject>
		</StyledProjectGrid>
	);
};

const StyledProjectGrid = styled.ul`
	position: relative;
	list-style: none;
	margin-bottom: 100px;
	/* background-color: #1d1d1d; */
`;

const StyledProject = styled.li`
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`;

const ProjectContent = styled.div`
	grid-column: 3 / 11;
`;

const ProjectImageWrapper = styled.div`
	position: relative;
	grid-column: 3 / 11;
`;

const ProjectImage = styled.img`
	content: url(${"/placeholder.png"});
	position: relative;
	max-width: 100%;
	object-fit: cover;
	border-radius: 5px;
`;

const TechList = styled.ul`
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	gap: 5px;
	margin-top: 10px;
`

const TechItem = styled.li`
	border: 1px white solid;
	border-radius: 20px;
	padding: 0px 10px;
	font-size: 0.8rem;
`

export default Project;
