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

export const TimelineSubSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const VideoDisplay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
