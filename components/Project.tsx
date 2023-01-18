import styled from "styled-components";
import styles from "@/components/Project.module.css";
import Image from "next/image";

const Project = () => {
	return (
		<StyledProjectGrid>
			<StyledProject>
				<ProjectImageWrapper>
					{/* <img src="/placeholder.png" alt="" /> */}
					<ProjectImage />
				</ProjectImageWrapper>
				<ProjectContent>
					<h3>Home Servers Setup</h3>
					<p>
						My servers are where I get to experiment and apply the knowledge that I learn. These machines allow
						me to run a variety of applications such as websites, game servers, APIs, on high performance
						hardware.
					</p>

					<ul>
						<li>Networking, Security</li>
						<li>Docker</li>
						<li>Operating Systems</li>
						<li>CI/CD</li>
						<li>Terminals</li>
					</ul>
				</ProjectContent>
			</StyledProject>
		</StyledProjectGrid>
	);
};

const StyledProjectGrid = styled.ul`
	position: relative;
	list-style: none;
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
`;

export default Project;
