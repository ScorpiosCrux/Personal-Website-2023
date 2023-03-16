import styled from "styled-components";

export const ProjectTimeline = styled.div`
  max-width: 900px;
  font-size: 1.25rem;

  & h1 {
    text-align: center;
  }

  & h4 {
    margin-top: 20px;
  }

  & .projectHeader {
    margin-bottom: 50px;
  }
`;

export const TimelineSection = styled.section`
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;

  background-color: #1d1d1d;

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

export const TimelineSubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;
