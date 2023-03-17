import IconButton from "../core/IconBtn";
import GitLabIcon from "public/icons/gitlab.svg";

interface Props {
	url: string;
}

const GitHub = ({ url }: Props) => {
	return <IconButton image={GitLabIcon} width={"2em"} alt={"GitLab"} url={url} />;
};

export default GitHub;
