import Head from "next/head";
import styles from "@/styles/About.module.css";
import styled from "styled-components";

import SelfPic from "public/self-picture.jpg";
import ImageDisplay from "@/components/ImageDisplay";

const About = () => {
	return (
		<>
			<Head>
				<title>About | Tyler Chen</title>
				<meta name="description" content="Learn more about Tyler Chen" />
				<meta name="keywords" content="Tyler Chen, Calgary, Fullstack Software Developer, About" />
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className={styles.main}>
				<section className={styles.section}>
					<h2>About Me</h2>
					<div className={styles.inner}>
						<StyledText>
							<p>
								Hello, my name is Tyler Chen, and I enjoy learning about technologies and using them
								to solve issues in the world. I started coding in 2015 building simple Python
								functions. Years later, I&apos;m more passionate than ever!
							</p>

							<p>
								Having recently graduated from the University of Calgary with a degree in Computer
								Science! I&apos;m taking a break before I apply for jobs to learn about the
								technologies that I&apos;ve discovered during my internship and courses!
							</p>

							<p>
								Recently, I&apos;ve been working on my home lab and here are a few interesting
								technologies I&apos;ve been working with:
							</p>
							<ul className={styles.techList}>
								<li>- Docker Compose</li>
								<li>- Docker</li>
								<li>- AWS</li>
								<li>- NextJS</li>
								<li>- TypeScript</li>
								<li>- React</li>
								<li>- GitLab CI/CD</li>
								<li>- Apache 2</li>
								<li>- pfSense Firewall</li>
							</ul>
						</StyledText>
						<StyledImage>
							<ImageDisplay image={SelfPic} altText={"Self Protrai"} />
						</StyledImage>
					</div>
				</section>
			</main>
		</>
	);
};

export default About;

const StyledImage = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledText = styled.div`
	font-size: 20px;
	p {
		margin-bottom: 15px;
	}
`;
