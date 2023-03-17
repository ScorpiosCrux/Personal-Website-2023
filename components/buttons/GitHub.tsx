import IconButton from "../core/IconBtn";
import GitHubIcon from "public/icons/github.svg";

interface Props {
	url: string;
}

const GitHub = ({ url }: Props) => {
	return <IconButton image={GitHubIcon} width={"2em"} alt={"GitHub"} url={url} />;
};

export default GitHub;
