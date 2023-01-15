import Navbar from "./navbar";

type Props = {
	children: JSX.Element;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="content">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
