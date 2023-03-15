import { StaticImageData } from "next/image";
import Image from "next/image";
import styled from "styled-components";

interface Props {
	image: StaticImageData;
	altText: string;
}

const ImageDisplay = ({ image, altText }: Props) => {
	return (
		<ImageContainer>
			{image.width > image.height ? (
				<Image src={image} className={"imgHorizontal"} alt={altText} />
			) : (
				<Image src={image} className={"imgVertical"} alt={altText} />
			)}
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;

	width: 100%;
	max-height: 1000px;
	height: 600px;

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
