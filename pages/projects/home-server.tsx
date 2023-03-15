import Head from "next/head";
import styled from "styled-components";
import ImageDisplay from "@/components/ImageDisplay";

// Image Imports
import nextcloudPic from "public/project-pictures/home-server/nextcloud.png"
import digitalOcean from "public/project-pictures/home-server/digital-ocean.png"
import homeServerPic from "public/project-pictures/home-server/home-network.jpeg";
import ubiquitiPic from "public/project-pictures/home-server/ubiquiti.jpg"
import cheapPcPic from "public/project-pictures/home-server/cheap-pc.png"

const HomeServer = () => {
	return (
		<>
			<Head>
				<title>Tyler Chen | Home Servers</title>
				<meta name="description" content="Tyler Chen's Home Server" />
				<meta name="keywords" content="Tyler Chen, Home Server" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ProjectTimeline>
				<div className="projectHeader">
					<h1>Home Server Setup</h1>
					<p>
						My server is an example of who I am. It is one of my most important ongoing projects. I
						constantly try, learn and correct concepts and ideas with my server as you will see in
						the following:
					</p>

					<h4>Summary of Technologies Used: </h4>
					<TechList>
						<li>SSL Certificates</li>
						<li>Ubuntu Server</li>
						<li>Apache2</li>
						<li>Systemd</li>
						<li>PHP</li>
						<li>MariaDB</li>
						<li>Digital Ocean</li>
						<li>Cloud Providers</li>
						<li>UFW</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>DDoS Protection</li>
						<li>Dynamic DNS</li>
						<li>Docker</li>
						<li>GitLab</li>
						<li>GitLab Runners</li>
						<li>pfSense</li>
						<li>Battery Backups</li>
					</TechList>
				</div>

				<TimelineSection>
					<div className="timeHeader">
						<h2>December 2019</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={nextcloudPic} altText="PlaceHolder" />

					<div className="description">
						<p>
							When COVID-19 started, I decided to build a server to experiment with Linux and
							Deployment. I wanted a place where I could show people my work! A dedicated server!
						</p>

						<p>
							To start, I deployed NextCloud, a file sharing server. <b>Problem:</b> Could not
							create SSL certs for a local IP as it wasn&apos;t reachable by local cert authorities.
						</p>
					</div>
					<TechList>
						<li>SSL Certificates</li>
						<li>Ubuntu Server</li>
						<li>Apache2</li>
						<li>Systemd</li>
						<li>PHP</li>
						<li>MariaDB</li>
					</TechList>
				</TimelineSection>

				<TimelineSection>
					<div className="timeHeader">
						<h2>2021</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={digitalOcean} altText="PlaceHolder" />

					<div className="description">
						<p>
							About 1 year later, I thought hosting at home was a flop. I recently discovered Google
							Cloud Platform and found Digital Ocean to be a cheaper alternative. Moved NextCloud to
							Digital Ocean for $26, now I was able to access my files from inside and outside my
							network with encryption!
						</p>
					</div>
					<TechList>
						<li>Digital Ocean</li>
						<li>Cloud Providers</li>
						<li>UFW</li>
					</TechList>
				</TimelineSection>

				<TimelineSection>
					<div className="timeHeader">
						<h2>June 2022</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={cheapPcPic} altText="PlaceHolder" />

					<div className="description">
						<p>
							Bought a $300 computer to experiment with pfSense, but decided to try my previously
							flopped deployment with new knowledge! Installed NextCloud and my new personal
							website! <b>Problem: </b>
							Same issues, but I figured out that, using a VPN, I am technically always outside my
							network.
						</p>
					</div>
					<TechList>
						<li>HTML</li>
						<li>CSS</li>
					</TechList>
				</TimelineSection>

				<TimelineSection>
					<div className="timeHeader">
						<h2>November 2022</h2>
						<div className="line" />
					</div>
					<ImageDisplay image={ubiquitiPic} altText="PlaceHolder" />

					<div className="description">
						<p>
							Discovered a router called Ubiquiti ER-X. Though this router has a feature called
							&quot;NAT reflection&quot; which allows me to connect to my server using my public IP!
						</p>
					</div>
					<TechList></TechList>
				</TimelineSection>

				<TimelineSection>
					<div className="timeHeader">
						<h2>January 2023</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={homeServerPic} altText="Picture of Home Server" />

					<div className="description">
						<p>
							My biggest update yet! Added a pfSense firewall, setup dynamic DNS with Cloudflare.
						</p>

						<p>
							Upgraded a few parts in the $300 PC and then created a secondary server for
							development and experimentation. Used Docker Compose to deploy GitLab CE and Docker to
							deploy GitLab runners on the main server.
						</p>

						<p>
							During the summer, I experienced some sudden shutdowns due to lighting, and thus to
							prevent sudden dataloss from brownouts or blackouts, I added a 1500VA battery backup
							to both servers!
						</p>

						<p>My server is now equiped with many features a typical cloud provider has!</p>
					</div>
					<TechList>
						<li>DDoS Protection</li>
						<li>Dynamic DNS</li>
						<li>Docker</li>
						<li>GitLab</li>
						<li>GitLab Runners</li>
						<li>pfSense</li>
						<li>Battery Backups</li>
					</TechList>
				</TimelineSection>
			</ProjectTimeline>
		</>
	);
};

export default HomeServer;

const ProjectTimeline = styled.div`
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

const TimelineSection = styled.section`
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

const TechList = styled.ul`
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
