//components
import NavBar from "./NavBar";
import Banner from "./Banner"
import { Fragment } from "react";
import { styled, Box } from "@mui/material";
import { shadows } from "@mui/system";

const Component = styled(Box)`
    padding: 10px;
    background-color: #f1f3f6;
`

const Home = () => {
    return (
        // <Fragment> is same as <></> & is faster than div</Fragment>
        <>
            <Box sx={{ boxShadow: 2 }}>
                <NavBar />
            </Box>
            <Component>
                <Banner />
            </Component>
        </>

    )
}

export default Home;
