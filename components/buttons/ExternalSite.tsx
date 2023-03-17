import IconButton from "../core/IconBtn";
import ExternalSiteIcon from "public/icons/external-link.svg";

interface Props {
	url: string;
}

const ExternalSite = ({ url }: Props) => {
	return <IconButton image={ExternalSiteIcon} width={"2em"} alt={"Demo"} url={url} />;
};

export default ExternalSite;
