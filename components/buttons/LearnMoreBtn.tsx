import Link from "next/link";
import styled from "styled-components";

interface Props {
  url: string;
}

const LearnMoreBtn = (props: Props) => {
  return (
    <StyledLearnMoreContainer href={props.url}>
      LEARN MORE
      <StyledRightArrow />
    </StyledLearnMoreContainer>
  );
};

const StyledRightArrow = styled.img`
  content: url(${"/arrow-white.svg"});
  aspect-ratio: 1;
  height: 20px;
`;

const StyledLearnMoreContainer = styled(Link)`
  width: fit-content;

  padding: 2px 0 2px 10px;

  display: flex;
  align-items: center;

  border: 2px white solid;
  border-radius: 5px;

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
    ${StyledRightArrow} {
      transition: all 0.5s;
      content: url(${"/arrow-black.svg"});
    }
  }
`;

export default LearnMoreBtn;
