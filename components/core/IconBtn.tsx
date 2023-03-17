import styled from "styled-components";
import Icon from "./Icon";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface Props {
	image: StaticImageData;
	alt: string;
	width: string;
	url: string
}

const IconButton = (props: Props) => {
	return (
		<StyledIconButton href={props.url} target={"_blank"}>
			<Icon image={props.image} alt={props.alt} width={props.width} />
		</StyledIconButton>
	);
};

const StyledIconButton = styled(Link)`
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export default IconButton;
