import Head from "next/head";
import ImageDisplay from "@/components/ImageDisplay";

// Image Imports
import udemyPic from "public/project-pictures/smart-budget/udemy.png";
import figmaPic from "public/project-pictures/smart-budget/figma.png";
import previewPic from "public/project-pictures/smart-budget/smart-budget.png";

import { ProjectTimeline, TimelineSubSection } from "@/components/ProjectTimeline";
import TechList from "@/components/TechList";
import { StyledParagraph } from "@/components/Typography";
import TimeHeader from "@/components/TimeHeader";
import { StyledSection } from "@/components/core/StyledSection";

const HomeServer = () => {
  return (
    <>
      <Head>
        <title>Smart Budget | Projects</title>
        <meta name="description" content="Tyler Chen's Home Server" />
        <meta name="keywords" content="Tyler Chen, Home Server" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectTimeline>
        <div className="projectHeader">
          <h1>Smart Budget</h1>
          <StyledParagraph>
            Smart Budget is an app that I created to help interact with my spendings more. Instead
            just paying off another number in your credit card statements, here you can organize,
            interact and visualize how much you&apos;re spending!
          </StyledParagraph>

          <StyledParagraph>
            This is also my first website idea that I used to learn Web Development!
          </StyledParagraph>

          <h4>Summary of Technologies Used</h4>
          <StyledParagraph>(These are the highlights of the cool ones)</StyledParagraph>

          <TechList
            techList={[
              "MongoDB",
              "Express",
              "React",
              "TypeScript",
              "JWT",
              "Styled Components",
              "Figma",
            ]}
          />
        </div>

        <StyledSection>
          <TimeHeader date="May 2022" />

          <TimelineSubSection>
            <ImageDisplay image={udemyPic} altText="PlaceHolder" />

            <StyledParagraph>
              I was recommended by a friend to take a look at a Udemy Course called The Web
              Developer Bootcamp by Colt Steele which what inspired me so much to get into Web
              Development. In the following tech list, I show exactly what I learnt!
            </StyledParagraph>

            <StyledParagraph>
              Even though I could jump straight into TypeScript, React, etc, I decided against that
              because I wanted a strong foundation. Learning the foundations allows me to adapt to
              any new libraries, frameworks or languages with ease!
            </StyledParagraph>
          </TimelineSubSection>

          <TechList
            techList={[
              "HTML5",
              "CSS3",
              "Flexbox",
              "Responsive Design",
              "JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)",
              "Asynchronous JavaScript - Promises, async/await, etc.",
              "AJAX and single page apps",
              "Bootstrap 4 and 5 (alpha)",
              "SemanticUI",
              "Bulma CSS Framework",
              "DOM Manipulation",
              "Unix(Command Line) Commands",
              "NodeJS",
              "NPM",
              "ExpressJS",
              "Templating",
              "REST",
              "SQL vs. NoSQL databases",
              "MongoDB",
              "Database Associations",
              "Schema Design",
              "Mongoose",
              "Authentication From Scratch",
              "Cookies & Sessions",
              "Authorization",
              "Common Security Issues - SQL Injection, XSS, etc.",
              "Developer Best Practices",
              "Deploying Apps",
              "Cloud Databases",
              "Image Upload and Storage",
              "Maps and Geocoding",
            ]}
          />
        </StyledSection>

        <StyledSection>
          <TimeHeader date="Jan 2023" />

          <TimelineSubSection>
            <ImageDisplay image={figmaPic} altText="PlaceHolder" />

            <StyledParagraph>
              My last semester at UofC I took a class on advanced programming techniques and a
              course on Web Development. Thus, with my newly acquired skills and experience I
              decided to rebuild Smart Budget with the best industry standards in mind!
            </StyledParagraph>

            <StyledParagraph>
              Here I use figma to try out designs and layouts before creating the actual product.
            </StyledParagraph>
          </TimelineSubSection>

          <TimelineSubSection>
            <ImageDisplay image={previewPic} altText="PlaceHolder" />
            <StyledParagraph>
              The above image demonstrates how it looks like currently.
            </StyledParagraph>
          </TimelineSubSection>

          <TechList techList={["Figma"]} />
        </StyledSection>
      </ProjectTimeline>
    </>
  );
};

export default HomeServer;
