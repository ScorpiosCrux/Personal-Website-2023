import styled from "styled-components";
import { StaticImageData } from "next/image";
import Link from "next/link";
import ImageDisplay from "./ImageDisplay";
import { StyledParagraph, StyledTitle, TypographyContainer } from "./ProjectTypography";
import TechList from "./TechList";
import LearnMoreBtn from "./buttons/LearnMoreBtn";

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
        <ImageDisplay image={props.preview} altText={"Home Server Setup Preview"} />

        <TypographyContainer>
          <StyledTitle>{props.title}</StyledTitle>
          <StyledParagraph>{props.description}</StyledParagraph>

          <TechList techList={props.techList} />

          <LearnMoreBtn url={props.url} />
        </TypographyContainer>
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

export default FeaturedProject;
