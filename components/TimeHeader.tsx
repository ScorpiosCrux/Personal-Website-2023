import styled from "styled-components";

interface Props {
  date: string;
}

const TimeHeader = (props: Props) => {
  return (
    <StyledTimeHeader>
      <h2>{props.date}</h2>
      <div className="line" />
    </StyledTimeHeader>
  );
};

export const StyledTimeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & .line {
    flex-grow: 1;
    border: white 0.5px solid;
  }
`;

export default TimeHeader;
