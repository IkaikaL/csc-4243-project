import {
	Container,
	Grid,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";
import Footer from "./Footer";
import { useState } from "react";

type Props = {
	listingTitle: string;
	listingImagePaths: Array<string>;
};

const ListingTitleGallery = (props: Props) => {
	const { listingTitle, listingImagePaths } = props;
	const [index, setActiveStep] = useState(0);

	const selectImage = (imgIndex: number) => {
		setActiveStep(imgIndex);
	};

	return (
		<Container sx={{ width: "800px" }}>
			<Typography variant='h5' component='h1' color='white'>
				{listingTitle}
			</Typography>

			<Grid
				container
				direction='row'
				justifyContent='left'
				alignItems='center'
				sx={{ padding: "1px" }}
			>
				{/* Main Pic */}
				<Grid
					item
					sx={{
						width: "70%",
						height: "400px",
						background: "#2B2B2B",
						margin: "1px",
					}}
				>
					<img
						src={listingImagePaths[index]}
						style={{
							height: "100%",
							width: "100%",
							objectFit: "fill",
						}}
						alt={listingImagePaths[index]}
					/>
				</Grid>

				{/* Thumbnails */}
				<Grid item>
					<ImageList cols={1} sx={{ width: "100px", height: "400px" }}>
						{listingImagePaths.map((item, itemIndex) => (
							<ImageListItem onClick={() => selectImage(itemIndex)}>
								<img
									src={item}
									style={{
										maxHeight: "100%",
										maxWidth: "100%",
										display: "block",
										overflow: "hidden",
									}}
									alt={item}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ListingTitleGallery;
