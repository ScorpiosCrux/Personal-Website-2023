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
		</Wrapper>
	);
};

const LogoWrapper = styled.div`
	font-weight: 600;
	font-size: 48px;

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

export default Navbar;
