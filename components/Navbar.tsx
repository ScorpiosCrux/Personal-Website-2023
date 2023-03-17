import Link from "next/link";
import styled from "@emotion/styled";
import IconButton from "./core/IconBtn";

import icon2 from "public/icons/gitlab.svg";
import GitHub from "./buttons/GitHub";
import GitLab from "./buttons/GitLab";
import LinkedIn from "./buttons/LinkedIn";

const Navbar = () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<Link href={"/"}> TYLER </Link>
			</LogoWrapper>
			<Links>
				<NavLink>
					<Link className="inner-link" href={"/"}>
						HOME
					</Link>
				</NavLink>
				<NavLink>
					<Link className="inner-link" href={"/about"}>
						ABOUT
					</Link>
				</NavLink>
				<NavLink>
					<Link className="inner-link" href={"/projects"}>
						PROJECTS
					</Link>
				</NavLink>
				<NavLink>
					<Link className="inner-link" href={"/contact"}>
						CONTACT
					</Link>
				</NavLink>
			</Links>
			<ExternalLinks>
				<GitHub url={"https://github.com/ScorpiosCrux"}/>
				<GitLab url={"https://gitlab.tylerchen.ca/tylerchen"} />
				<LinkedIn url={"https://www.linkedin.com/in/tyler-chen1/"} />
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

const NavLink = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	:hover .inner-link {
		border-bottom: 2px solid white;
	}

	.inner-link {
		font-weight: 200;
		font-size: 20px;
	}
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
