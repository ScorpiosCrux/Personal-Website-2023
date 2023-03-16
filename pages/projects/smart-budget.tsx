import Head from "next/head";
import styled from "styled-components";
import ImageDisplay from "@/components/ImageDisplay";

// Image Imports
import udemyPic from "public/project-pictures/smart-budget/udemy.png";
import figmaPic from "public/project-pictures/smart-budget/figma.png";
import previewPic from "public/project-pictures/smart-budget/smart-budget.png";

import placeHolderPic from "public/placeholder.png";
import { ProjectTimeline, TechList, TimelineSection } from "@/components/ProjectTimeline";

const HomeServer = () => {
	return (
		<>
			<Head>
				<title>Smart Budget | Tyler Chen</title>
				<meta name="description" content="Tyler Chen's Home Server" />
				<meta name="keywords" content="Tyler Chen, Home Server" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ProjectTimeline>
				<div className="projectHeader">
					<h1>Smart Budget</h1>
					<p>
						Smart Budget is an app that I created to help interact with my spendings more. Instead
						just paying off another number in your credit card statements, here you can organize,
						interact and visualize how much you're spending!
					</p>

					<p>This is also my first website idea that I used to learn Web Development!</p>

					<h4>Summary of Technologies Used</h4>
					<p>(These are the highlights of the cool ones to me)</p>
					<TechList>
						<li>MongoDB</li>
						<li>Express</li>
						<li>React</li>
						<li>TypeScript</li>
						<li>JWT</li>
						<li>Styled Components</li>
						<li>Figma</li>
					</TechList>
				</div>

				<TimelineSection>
					<div className="timeHeader">
						<h2>May 2022</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={udemyPic} altText="PlaceHolder" />

					<div className="description">
						<p>
							I was recommended by a friend to take a look at a Udemy Course called The Web
							Developer Bootcamp by Colt Steele which what inspired me so much to get into Web
							Development. In the following tech list, I show exactly what I learnt!
						</p>

						<p>
							Even though I could jump straight into TypeScript, React, etc, I decided against that
							because I wanted a strong foundation. Learning the foundations allows me to adapt to
							any new libraries, frameworks or languages with ease!
						</p>
					</div>
					<TechList>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Flexbox</li>
						<li>Responsive Design</li>
						<li>JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)</li>
						<li>Asynchronous JavaScript - Promises, async/await, etc.</li>
						<li>AJAX and single page apps</li>
						<li>Bootstrap 4 and 5 (alpha)</li>
						<li>SemanticUI</li>
						<li>Bulma CSS Framework</li>
						<li>DOM Manipulation</li>
						<li>Unix(Command Line) Commands</li>
						<li>NodeJS</li>
						<li>NPM</li>
						<li>ExpressJS</li>
						<li>Templating</li>
						<li>REST</li>
						<li>SQL vs. NoSQL databases</li>
						<li>MongoDB</li>
						<li>Database Associations</li>
						<li>Schema Design</li>
						<li>Mongoose</li>
						<li>Authentication From Scratch</li>
						<li>Cookies & Sessions</li>
						<li>Authorization</li>
						<li>Common Security Issues - SQL Injection, XSS, etc.</li>
						<li>Developer Best Practices</li>
						<li>Deploying Apps</li>
						<li>Cloud Databases</li>
						<li>Image Upload and Storage</li>
						<li>Maps and Geocoding</li>
					</TechList>
				</TimelineSection>

				<TimelineSection>
					<div className="timeHeader">
						<h2>Jan 2023</h2>
						<div className="line" />
					</div>

					<ImageDisplay image={figmaPic} altText="PlaceHolder" />
					<ImageDisplay image={previewPic} altText="PlaceHolder" />

					<div className="description">
						<p>
							My last semester at UofC I took a class on advanced programming techniques and a
							course on Web Development. Thus, with my newly acquired skills and experience I
							decided to rebuild Smart Budget with the best industry standards in mind!
						</p>

						<p>
							Here I use figma to try out designs and layouts before creating the actual product.
						</p>

						<p>The second image demonstrates how it looks like currently.</p>
					</div>
					<TechList>
						<li>Figma</li>
					</TechList>
				</TimelineSection>
			</ProjectTimeline>
		</>
	);
};

export default HomeServer;
