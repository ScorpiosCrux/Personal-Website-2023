import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h1>NAV BAR</h1>
				<Link href="/">Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/projects"}>Projects</Link>
			</div>
		</nav>
	);
};

export default Navbar;
