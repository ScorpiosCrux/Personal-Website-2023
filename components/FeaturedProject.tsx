import styled from "styled-components";
import { StaticImageData } from "next/image";
import Link from "next/link";
import ImageDisplay from "./ImageDisplay";

type Props = {
	title: string;
	description: string;
	preview: StaticImageData;
	techList: string[];
	url: string;
};

const FeaturedProject = (props: Props) => {
	return (
		<StyledProjectGrid>
			<StyledProject>
				<ProjectImageWrapper>
					<ImageDisplay image={props.preview} altText={"Home Server Setup Preview"} />
				</ProjectImageWrapper>
				<ProjectContent>
					<h3>{props.title}</h3>
					<p>{props.description}</p>

					<TechList>
						{props.techList.map((tech: string, i: number) => (
							<TechItem key={i}>{tech}</TechItem>
						))}
					</TechList>

					<LearnMoreBtn>
						<NavLink href={props.url}>
							LEARN MORE
							<RightArrow />
						</NavLink>
					</LearnMoreBtn>
				</ProjectContent>
			</StyledProject>
		</StyledProjectGrid>
	);
};

const StyledProjectGrid = styled.ul`
	position: relative;
	list-style: none;
	margin-bottom: 100px;

	background-color: #1d1d1d;
	padding: 30px;
	border-radius: 5px;
`;

const StyledProject = styled.li`
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`;

const ProjectContent = styled.div`
	grid-column: 1 / 13;
`;

const ProjectImageWrapper = styled.div`
	position: relative;
	grid-column: 1 / 13;
`;

// const ProjectImage = styled.img`
// 	content: url(${"/placeholder.png"});
// 	position: relative;
// 	max-width: 100%;
// 	object-fit: cover;
// 	border-radius: 5px;
// `;

const TechList = styled.ul`
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	gap: 5px;
	margin-top: 10px;
`;

const TechItem = styled.li`
	border: 1px white solid;
	border-radius: 20px;
	padding: 0px 10px;
	font-size: 0.8rem;
`;

const RightArrow = styled.img`
	content: url(${"/arrow-white.svg"});
	aspect-ratio: 1;
	height: 20px;
`;

const LearnMoreBtn = styled.div``;

const NavLink = styled(Link)`
	position: relative;
	margin: 10px 0px;
	border: 2px white solid;
	border-radius: 5px;
	width: fit-content;
	padding: 2px 0 2px 10px;
	margin-left: auto;
	display: flex;
	align-items: center;

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

	:hover {
		transition: all 0.5s;
		cursor: pointer;
		background-color: white;
		color: black;
		${RightArrow} {
			transition: all 0.5s;
			content: url(${"/arrow-black.svg"});
		}
	}
`;

export default FeaturedProject;
