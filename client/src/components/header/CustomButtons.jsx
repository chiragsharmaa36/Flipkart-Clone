import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 3%;

${'' /* 👇🏻 Changing CSS of child components of Wrapper */}
& > button, & > p, & > div {
    margin-right:40px;
    font-size: 16px;
    align-items: center;
}
`

const Container = styled(Box)`
display: flex;
`

const LoginButton = styled(Button)`
color: #2874f0;
background-color: white;
text-transform: none;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight: 600;
height: 32px;
`

const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="conatined">Login</LoginButton>
            <Typography style={{ marginTop: "3px", width: "135px" }}>Become a Seller</Typography>
            <Typography style={{ marginTop: "3px", width: "135px" }}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>

        </Wrapper>
    )
}

export default CustomButtons;