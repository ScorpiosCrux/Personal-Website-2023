import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import styled from "styled-components";

const About = () => {
	return (
		<>
			<Head>
				<title>Tyler Chen | About</title>
				<meta name="description" content="Learn more about Tyler Chen" />
				<meta name="keywords" content="Tyler Chen, About, Full Stack Developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<section className={styles.section}>
					<h2>About Me</h2>
					<div className={styles.inner}>
						<StyledText>
							<p>
								Hello, my name is Tyler Chen, and I enjoy learning about technologies and using them to solve
								issues in the world. I started coding in 2015 building simple Python functions. Years later,
								I&apos;m more passionate than ever!
							</p>

							<p>
								Having recently graduated from the University of Calgary with a degree in Computer Science!
								I&apos;m taking a break before I apply for jobs to learn about the technologies that
								I&apos;ve discovered during my internship and courses!
							</p>

							<p>
								Recently, I&apos;ve been working on my home lab and here are a few interesting technologies
								I&apos;ve been working with:
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
							<Image src={"/portrait_placeholder.jpg"} width={300} height={300} alt={"Tyler Chen Portrait"} />
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
