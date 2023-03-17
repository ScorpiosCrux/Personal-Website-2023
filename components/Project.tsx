import styled from "styled-components";
import { StaticImageData } from "next/image";
import ImageDisplay from "./ImageDisplay";
import { StyledDescription, StyledTitle } from "./Typography";
import LearnMoreBtn from "./buttons/LearnMoreBtn";
import TechList from "./TechList";
import { StyledSection } from "./core/StyledSection";
import GitLab from "./buttons/GitLab";
import ExternalSite from "./buttons/ExternalSite";

type Props = {
	title: string;
	description: string;
	preview?: StaticImageData;
	techList: string[];
	url: string;
	repoURL?: string;
	demoURL?: string;
	isLearnMoreDisabled?: boolean;
};

const Project = (props: Props) => {
	return (
		<StyledSection>
			{props.preview && (
				<ImageDisplay image={props.preview} altText={"Home Server Setup Preview"} />
			)}

			<StyledDescription>
				<StyledTitle>{props.title}</StyledTitle>

				<StyledDescription>{props.description}</StyledDescription>

				<TechList techList={props.techList} />
			</StyledDescription>

			<StyledProjectLinks>
				<StyledProjectIcons>
					{props.repoURL && <GitLab url={props.repoURL} />}
					{props.demoURL && <ExternalSite url={props.demoURL} />}
				</StyledProjectIcons>
				{!props.isLearnMoreDisabled && <LearnMoreBtn url={props.url} />}
			</StyledProjectLinks>
		</StyledSection>
	);
};

const StyledProjectLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 3rem;
`;

const StyledProjectIcons = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

export default Project;
