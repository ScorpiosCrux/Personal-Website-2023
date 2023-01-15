import Link from "next/link";
import styled from "@emotion/styled";

const Navbar = () => {
	return (
		<Wrapper>
			<Link href={"/"}> Tyler Chen </Link>
			<Links>
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/projects"}>Projects</Link>
			</Links>
		</Wrapper>
	);
};

const Logo = styled(Link)``;
const Links = styled.div``;

const Wrapper = styled.nav`
	height: 72px;
	display: flex;
`;

export default Navbar;
