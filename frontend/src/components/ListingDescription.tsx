import { Box, Container, Divider, Grid, Typography } from "@mui/material";

type Seller = {
    username: string;
    profileImagePath: string;
}

type ListingDescription = {
    description: string;
    publishDate: string;
}

type Props = {
    seller: Seller;
    listingDesc: ListingDescription;
}

const ListingDescription = (props: Props) => {
    const { seller, listingDesc } = props;
    
    return (
        <Container sx={{ width: "1000px" }}>
            <Typography variant="h6" component="h2">
                Description
            </Typography>

            <Container 
                sx={{ width: "100%", background: "grey" }}
            >
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="top"
                >
                    <Grid item sx={{ width: "70px", height: "78px", paddingTop: "8px" }}>
                        <img src={seller.profileImagePath}
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "50%"
                            }}
                        />
                    </Grid>
                    <Grid item sx={{ width: "90%" }}>
                        <Grid container
                            direction="column"
                            sx={{ padding: "4px" }}
                        >
                            <Grid item sx={{ padding: "4px" }} container>
                                <Grid item>
                                    <Typography align="left">
                                        Uploaded By: {seller.username}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ marginLeft: "auto" }}>
                                    <Typography align="right">
                                        Published On: {listingDesc.publishDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ background: "black", borderBottomWidth: "4px" }} />

                            <Grid item>
                                <Typography>
                                    {listingDesc.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default ListingDescription;