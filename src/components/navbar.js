import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({
  title
}) => {
  return (
    <Box
      width={{ xs: "95%", sm: "95%", md: "99%", lg: "99%" }}
      sx={{
        p: 1,
        position: "fixed",
        zIndex: 2000
      }}>
      <AppBar
        sx={{
          backgroundColor: "#76C39F",
          elevation: 12,
          position: "sticky"
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600
            }}
          >
            Pokemon Apps
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;