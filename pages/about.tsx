import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import styled from "styled-components";

const About = () => {
	return (
		<main className={styles.main}>

			<section className={styles.section}>
				<h2>About Me</h2>
				<div className={styles.inner}>
					<StyledText>
						<p>
							Hello, my name is Tyler Chen, and I enjoy learning about technologies and using them to solve
							issues in the world. I started coding in 2015 building simple Python functions. Years later, I'm
							more passionate than ever!
						</p>

						<p>
							Having recently graduated from the University of Calgary with a degree in Computer Science! I'm
							taking a break before I apply for jobs to learn about the technologies that I've discovered
							during my internship and courses!
						</p>

						<p>
							Recently, I've been working on my home lab and here are a few interesting technologies I've been
							working with:
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
							<li>- PFSense Firewall</li>
						</ul>
					</StyledText>
					<StyledImage>
						<Image src={"/portrait_placeholder.jpg"} width={300} height={300} alt={"Tyler Chen Portrait"} />
					</StyledImage>
				</div>
			</section>

			{/* <h2>My Experience</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate nemo atque repudiandae possimus
				recusandae culpa libero consectetur, perferendis debitis ut explicabo soluta molestias amet provident minus!
				Ipsam, quisquam nesciunt?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate nemo atque repudiandae possimus
				recusandae culpa libero consectetur, perferendis debitis ut explicabo soluta molestias amet provident minus!
				Ipsam, quisquam nesciunt?
			</p> */}
		</main>
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
