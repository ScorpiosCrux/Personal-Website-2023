import Head from "next/head";
import styles from "@/styles/Home.module.css";

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
						<span className={styles.regular}>and I&apos;m a </span>
						Full Stack Developer!
					</h1>
				</div>

				<div className={styles.hobbyContainer}>
					<p>
						<i>&emsp; but I&apos;m also a:</i>
					</p>
					<div className={styles.hobbies}>
						<h3>Gamer</h3>
						<h3>Computer Enthusiast</h3>
						<h3>and a Photographer</h3>
					</div>
				</div>

        {/* View my projects */}
        {/* Learn More About Me */}

				{/* <div className={styles.goal}>
					My goal in life is to use computers to make <br /> this world a bit better than how I found it!
				</div> */}

			</div>
		</>
	);
}


