import Head from "next/head";
import { ProjectTimeline, TimelineSubSection, VideoDisplay } from "@/components/ProjectTimeline";
import TechList from "@/components/TechList";
import { StyledParagraph } from "@/components/Typography";
import TimeHeader from "@/components/TimeHeader";
import { StyledSection } from "@/components/core/StyledSection";

const Page = () => {
	return (
		<>
			<Head>
				<title>Network Analysis | Projects</title>
				<meta name="description" content="Tyler Chen's Home Server" />
				<meta name="keywords" content="Tyler Chen, Home Server" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<ProjectTimeline>
				<div className="projectHeader">
					<h1>Valorant Network Analysis</h1>
					<p>
						Valorant Network Analysis was a project where we studied how nodes (anything) that is
						related to something will affect something. This project, we analyzed the Valorant
						E-Sports Network. We run
					</p>

					<h4>Summary of Technologies Used: </h4>
					<TechList
						techList={[
							"iPython Notebooks",
							"Python",
							"Selenium",
							"Matplotlib",
							"Sklearn",
							"Tensorflow",
							"Seaborn",
							"Pandas",
							"Numpy",
							"Gephi",
						]}
					/>
				</div>

				<StyledSection>
					<TimeHeader date="Sep 2022 - Dec 2022" />

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

export default Page;
