import styled from "styled-components";
import { StaticImageData } from "next/image";
import ImageDisplay from "./ImageDisplay";
import Description from "./Description";
import LearnMoreBtn from "./buttons/LearnMoreBtn";

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

      <Description
        title={props.title}
        description={props.description}
        techList={props.techList}
        url={props.url}
      />

      <LearnMoreBtn url={props.url} />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  margin-bottom: 4rem;
  border-radius: 0.5rem;
  max-width: 900px;

  background-color: #1d1d1d;
`;

export default Project;
