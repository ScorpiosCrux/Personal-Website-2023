import styled from "styled-components";

interface Props {
  techList: string[];
}

const TechList = (props: Props) => {
  return (
    <StyledTechList>
      {props.techList.map((tech: string, i: number) => (
        <li key={i}>{tech}</li>
      ))}
    </StyledTechList>
  );
};

export default TechList;

const StyledTechList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;

  li {
    border: 1px white solid;
    border-radius: 20px;
    padding: 0px 10px;
    font-size: 0.8rem;
  }
`;
