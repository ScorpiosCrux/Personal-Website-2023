import styled from "styled-components";

export const ProjectTimeline = styled.div`
	max-width: 900px;
	font-size: 1.25rem;

	h1 {
		text-align: center;
	}

	h4 {
		margin-top: 20px;
	}

	.projectHeader {
		margin-bottom: 50px;
	}
`;

export const TechList = styled.ul`
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	gap: 5px;
	margin-top: 10px;

	li {
		border: 1px white solid;
		border-radius: 20px;
		padding: 0px 10px;
		font-size: 0.9rem;
	}
`;

export const TimelineSection = styled.section`
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;

	p {
		margin-bottom: 20px;
	}

	.description p:last-of-type {
		margin-bottom: 0;
	}

	.timeHeader {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-bottom: 20px;

		.line {
			flex-grow: 1;
			border: white 0.5px solid;
		}
	}
`;
