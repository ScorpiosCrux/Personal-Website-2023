import { StaticImageData } from "next/image";
import Image from "next/image";
import styled from "styled-components";

interface Props {
	image: StaticImageData;
	altText: string;
}

const ImageDisplay = ({ image, altText }: Props) => {
	return (
		<ImageContainer image={image}>
			{image.width > image.height ? (
				<Image src={image} className={"imgHorizontal"} alt={altText} />
			) : (
				<Image src={image} className={"imgVertical"} alt={altText} />
			)}
		</ImageContainer>
	);
};

const ImageContainer = styled.div<{ image: StaticImageData }>`
	display: flex;
	justify-content: center;

	width: 100%;
	max-height: 800px;
	${(props) => props.image.width < props.image.height && `height: ${props.image.height}px;`}

	.imgVertical {
		object-fit: contain;
		width: auto;
		height: 100%;
	}

	.imgHorizontal {
		object-fit: contain;
		width: 100%;
		height: auto;
	}
`;
export default ImageDisplay;
