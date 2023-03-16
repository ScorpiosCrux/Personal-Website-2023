import styled from "styled-components";
import TechList from "./TechList";

type Props = {
  title: string;
  description: string;
  techList: string[];
  url: string;
};

const Description = (props: Props) => {
  return (
    <StyledDescription>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledParagraph>{props.description}</StyledParagraph>

      <TechList techList={props.techList} />
    </StyledDescription>
  );
};

export default Description;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2``;

export const StyledParagraph = styled.p``;
