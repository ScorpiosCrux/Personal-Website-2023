import Link from "next/link";
import styled from "@emotion/styled";

const Navbar = () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<Link href={"/"}> TYLER </Link>
			</LogoWrapper>
			<Links>
				<NavLink href={"/"}>HOME</NavLink>
				<NavLink href={"/about"}>ABOUT</NavLink>
				<NavLink href={"/projects"}>PROJECTS</NavLink>
				<NavLink href={"/contact"}>CONTACT</NavLink>
			</Links>
			<ExternalLinks>
				<Link href={"https://gitlab.tylerchen.ca"} target={"_blank"}>
					<Icon url="/gitlab.svg"/>
				</Link>
				<Link href={"https://github.com/ScorpiosCrux"} target={"_blank"}>
					<Icon url="/github.svg"/>
				</Link>
				<Link href={"https://www.linkedin.com/in/tyler-chen1/"} target={"_blank"}>
					<Icon url="/linkedin.svg"/>
				</Link>
				<Link href={"https://cloud.tylerchen.ca/"} target={"_blank"}>
					<Icon url="/nextcloud.svg"/>
				</Link>
			</ExternalLinks>
		</Wrapper>
	);
};

const LogoWrapper = styled.div`
	font-weight: 600;
	font-size: 48px;
	flex-grow: 1;
	flex-basis: 0%;
`;
const Links = styled.div`
	display: flex;
	gap: 10px;
`;

const NavLink = styled(Link)`
	font-weight: 200;
	font-size: 20px;
`;

const Wrapper = styled.nav`
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

const ExternalLinks = styled.div`
	flex-grow: 1;
	flex-basis: 0%;
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 5px;
`;

const Icon = styled.img<{ url: string }>`
	content: url(${(props) => props.url});
	aspect-ratio: 1;
	height: 25px;
	display: flex;
	align-items: center;
`;


export default Navbar;
