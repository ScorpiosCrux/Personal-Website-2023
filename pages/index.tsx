import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tyler Chen</title>
				<meta name="description" content="Learn about Tyler Chen and his projects! Located in Calgary, Alberta!" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						<span className={styles.regular}>My name is </span>
						Tyler Chen <br />
						<span className={styles.regular}>and I'm a </span>
						Full Stack Developer!
					</h1>
				</div>

				<div className={styles.hobbyContainer}>
					<p>
						<i>&emsp; but I'm also a:</i>
					</p>
					<div className={styles.hobbies}>
						<h3>Gamer</h3>
						<h3>Computer Enthusiast</h3>
						<h3>and a Photographer</h3>
					</div>
				</div>

				{/* <div className={styles.goal}>
					My goal in life is to use computers to make <br /> this world a bit better than how I found it!
				</div> */}

				{/* <ImageWrapper>
						<Image src={"/portrait_placeholder.jpg"} width={300} height={400} alt={"Tyler Chen Portrait"} />
					</ImageWrapper> */}
			</div>
		</>
	);
}

const ImageWrapper = styled.div`
	place-self: center;
`;
