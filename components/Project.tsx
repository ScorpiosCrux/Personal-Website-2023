import styled from "styled-components";
import { StaticImageData } from "next/image";
import ImageDisplay from "./ImageDisplay";
import { StyledDescription, StyledTitle } from "./Typography";
import LearnMoreBtn from "./buttons/LearnMoreBtn";
import TechList from "./TechList";

type Props = {
  title: string;
  description: string;
  preview?: StaticImageData;
  techList: string[];
  url: string;
};

const Project = (props: Props) => {
  return (
    <StyledProject>
      {props.preview && (
        <ImageDisplay image={props.preview} altText={"Home Server Setup Preview"} />
      )}

      <StyledDescription>
        <StyledTitle>{props.title}</StyledTitle>

        <StyledDescription>{props.description}</StyledDescription>

        <TechList techList={props.techList} />
      </StyledDescription>

      <LearnMoreBtn url={props.url} />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 900px;

  background-color: #1d1d1d;
`;

export default Project;
