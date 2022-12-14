import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const Footer = () => {
	return (
		<Container sx={{ width: "1000px", backgroundColor: "#2B2B2B" }}>
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
			>
				<Grid item sx={{ color: "white" }}>
					<a href='https://www.craigslist.org/about/help/'>
						<Button sx={{ width: "200px", color: "white" }}>Help</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/help/faq'>
						<Button sx={{ width: "200px", color: "white" }}>FAQ</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/terms.of.use/en'>
						<Button sx={{ width: "200px", color: "white" }}>Legal</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/privacy.policy'>
						<Button sx={{ width: "200px", color: "white" }}>
							Privacy Policy
						</Button>
					</a>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
