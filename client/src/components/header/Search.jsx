import { InputBase, Box, styled } from "@mui/material";
// import { shadows } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background: white;
width: 38%;
${'' /* height: 10; */}
border-radius: 2px;
margin-left: 10px;
display: flex; 
${'' /* flex adar k components ko ek hi line me le aata hai */}
`

const SearchIconWrapper = styled(Box)`
color: blue;
padding: 5px;
display: flex;
height: 1px;
`

const InputSearchBase = styled(InputBase)`
width: 100%;
padding-left: 20px;
padding-right: 20px;
font-size: unset;

${'' /* unset means use font-size of the parent. */}
`

const Search = () => {
 return(
    <SearchContainer sx={{ boxShadow:1 }}>
        <InputSearchBase placeholder = "Search for products, brands and more"/>
        <SearchIconWrapper>
        <SearchIcon/>
        </SearchIconWrapper>
        
    </SearchContainer>
 )
}

export default Search;