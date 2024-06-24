import React from 'react'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box } from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material'
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor:'#002244'}}>
        <Toolbar>
          <ThunderstormIcon
            fontSize="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </ThunderstormIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeatherMarket
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
