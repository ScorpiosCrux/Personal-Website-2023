import Head from "next/head";
import {
	ProjectTimeline,
	TimelineSubSection,
	VideoDisplay,
} from "@/components/ProjectTimeline";
import TechList from "@/components/TechList";
import { StyledParagraph } from "@/components/Typography";
import TimeHeader from "@/components/TimeHeader";
import { StyledSection } from "@/components/core/StyledSection";

const HomeServer = () => {
	return (
		<>
			<Head>
				<title>Valorant Duo Q| Projects</title>
				<meta name="description" content="Tyler Chen's Home Server" />
				<meta name="keywords" content="Tyler Chen, Home Server" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ProjectTimeline>
				<div className="projectHeader">
					<h1>Valorant DuoQ</h1>
					<p>
						Valorant DuoQ was a school project built for our web dev course. It was a group of 6 and
						we had about 2 weeks to build it.
					</p>

					<h4>Summary of Technologies Used: </h4>
					<TechList
						techList={[
							"MongoDB",
							"ExpressJS",
							"ReactTS",
							"NodeJS",
							"Ubuntu Server",
							"Apache2",
							"Git (GitHub)",
							"Typescript",
							"Styled Components"
						]}
					/>
				</div>

				<StyledSection>
					<TimeHeader date="Dec 2022" />

					<TimelineSubSection>
						<VideoDisplay>
							<iframe
								width="800"
								height={"450"}
								src="https://www.youtube.com/embed/8D5eRy8Cml8"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</VideoDisplay>

						<StyledParagraph>
							Here is a video that we made for the app to demonstrate it's capabilities and purpose!
						</StyledParagraph>
					</TimelineSubSection>
				</StyledSection>
			</ProjectTimeline>
		</>
	);
};

export default HomeServer;
