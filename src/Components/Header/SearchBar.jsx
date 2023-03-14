
import React from 'react'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "#fff",
  marginLeft: 10,
  width: '35%',
  display:'flex',
  // color:'black',
  // fontWeight:"bold"
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: 8,
  // width:'100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"blue",
  cursor:'pointer'
  // marginLeft:320
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   fontSize:'unset',
   width:'100%',
  '& .MuiInputBase-input': {
    paddingLeft:20
  },
}));

const SearchBar = () => {
  return (
    <Search>
    <StyledInputBase
      placeholder="Search for product ,brand name and more"
      inputProps={{ 'aria-label': 'search' }}
    />
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
  </Search>
  )
}

export default SearchBar




  