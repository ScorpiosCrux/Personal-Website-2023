import Head from "next/head";
import styled from "styled-components";
import ImageDisplay from "@/components/ImageDisplay";
import { ProjectTimeline, TimelineSection, TimelineSubSection } from "@/components/ProjectTimeline";

// Image Imports
import nextcloudPic from "public/project-pictures/home-server/nextcloud.png";
import digitalOcean from "public/project-pictures/home-server/digital-ocean.png";
import homeServerPic from "public/project-pictures/home-server/home-network.jpeg";
import ubiquitiPic from "public/project-pictures/home-server/ubiquiti.jpg";
import cheapPcPic from "public/project-pictures/home-server/cheap-pc.png";
import TechList from "@/components/TechList";
import { StyledParagraph } from "@/components/Typography";
import TimeHeader from "@/components/TimeHeader";

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
          <TechList
            techList={[
              "SSL Certificates",
              "Ubuntu Server",
              "Apache2",
              "Systemd",
              "PHP",
              "MariaDB",
              "Digital Ocean",
              "Cloud Providers",
              "UFW",
              "HTML",
              "CSS",
              "DDoS Protection",
              "Dynamic DNS",
              "Docker",
              "GitLab",
              "GitLab Runners",
              "pfSense",
              "Battery Backups",
            ]}
          />
        </div>

        <TimelineSection>
          <TimeHeader date="Dec 2019" />

          <TimelineSubSection>
            <ImageDisplay image={nextcloudPic} altText="PlaceHolder" />

            <StyledParagraph>
              When COVID-19 started, I decided to build a server to experiment with Linux and
              Deployment. I wanted a place where I could show people my work! A dedicated server!
            </StyledParagraph>

            <StyledParagraph>
              To start, I deployed NextCloud, a file sharing server. <b>Problem:</b> Could not
              create SSL certs for a local IP as it wasn&apos;t reachable by local cert authorities.
            </StyledParagraph>
          </TimelineSubSection>

          <TechList
            techList={["SSL Certificates", "Ubuntu Server", "Apache2", "Systemd", "PHP", "MariaDB"]}
          />
        </TimelineSection>

        <TimelineSection>
          <TimeHeader date="2021" />

          <TimelineSubSection>
            <ImageDisplay image={digitalOcean} altText="PlaceHolder" />

            <StyledParagraph>
              About 1 year later, I thought hosting at home was a flop. I recently discovered Google
              Cloud Platform and found Digital Ocean to be a cheaper alternative. Moved NextCloud to
              Digital Ocean for $26, now I was able to access my files from inside and outside my
              network with encryption!
            </StyledParagraph>
          </TimelineSubSection>
          <TechList techList={["Digital Ocean", "Cloud Providers", "UFW"]} />
        </TimelineSection>

        <TimelineSection>
          <TimeHeader date="Jun 2022" />

          <TimelineSubSection>
            <ImageDisplay image={cheapPcPic} altText="PlaceHolder" />

            <StyledParagraph>
              Bought a $300 computer to experiment with pfSense, but decided to try my previously
              flopped deployment with new knowledge! Installed NextCloud and my new personal
              website! <b>Problem: </b>
              Same issues, but I figured out that, using a VPN, I am technically always outside my
              network.
            </StyledParagraph>
          </TimelineSubSection>
          <TechList techList={["HTML", "CSS"]} />
        </TimelineSection>

        <TimelineSection>
          <TimeHeader date="Nov 2022" />

          <TimelineSubSection>
            <ImageDisplay image={ubiquitiPic} altText="PlaceHolder" />

            <StyledParagraph>
              Discovered a router called Ubiquiti ER-X. Though this router has a feature called
              &quot;NAT reflection&quot; which allows me to connect to my server using my public IP!
            </StyledParagraph>
          </TimelineSubSection>
        </TimelineSection>

        <TimelineSection>
          <TimeHeader date="Jan 2023" />

          <TimelineSubSection>
            <ImageDisplay image={homeServerPic} altText="Picture of Home Server" />

            <StyledParagraph>
              My biggest update yet! Added a pfSense firewall, setup dynamic DNS with Cloudflare.
            </StyledParagraph>

            <StyledParagraph>
              Upgraded a few parts in the $300 PC and then created a secondary server for
              development and experimentation. Used Docker Compose to deploy GitLab CE and Docker to
              deploy GitLab runners on the main server.
            </StyledParagraph>

            <StyledParagraph>
              During the summer, I experienced some sudden shutdowns due to lighting, and thus to
              prevent sudden dataloss from brownouts or blackouts, I added a 1500VA battery backup
              to both servers!
            </StyledParagraph>

            <StyledParagraph>
              My server is now equiped with many features a typical cloud provider has!
            </StyledParagraph>
          </TimelineSubSection>
          <TechList
            techList={[
              "DDoS Protection",
              "Dynamic DNS",
              "Docker",
              "GitLab",
              "GitLab Runners",
              "pfSense",
              "Battery Backups",
            ]}
          />
        </TimelineSection>
      </ProjectTimeline>
    </>
  );
};

export default HomeServer;
