import IconButton from "../core/IconBtn";
import LinkedInIcon from "public/icons/linkedin.svg";

interface Props {
	url: string;
}

const GitHub = ({ url }: Props) => {
	return <IconButton image={LinkedInIcon} width={"2em"} alt={"LinkedIn"} url={url} />;
};

export default GitHub;
