import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import SearchBar from './SearchBar';
import { withStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        background: '#2874f0',
        height: 50,
    },
    logo:{
        width:75
    },
    subURL:{
        width:10,
        margin:4,
        hight:10
    },
    container:{
        display:"flex"
    },
    component:{
        marginLeft:"12%",
        lineHeight:0
    },
    subHeading:{
        fontSize: 10,
        fontStyle:'italic'
    }

});



const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    // const classes = useState();
  return (
    <AppBar >
        <Toolbar className={classes.header}>
          <Box className={classes.component}>
           <img src={logoURL} className={classes.logo} alt="image" />
           <div className={classes.container}>
              <Typography className={classes.subHeading}>Explore <span style={{color:'yellow'}}>plus</span> </Typography>
              <img src={subURL} className={classes.subURL} alt="" />
           </div>
           <div>

           </div>
        </Box>  
             <SearchBar/>
        </Toolbar>
    </AppBar>
  )
}

export default Header
