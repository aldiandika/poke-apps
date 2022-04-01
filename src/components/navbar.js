import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "@mui/material";

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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "center",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 0.5
          }}
        >
          <Link href="/" sx={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                color: "white"
              }}
            >
              Pokemon Apps
            </Typography>
          </Link>

          <Box
            sx={{ paddingLeft: 1 }}
          >
            <Link href="/my-pokemon">
              <IconButton>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
          </Box>
        </Box>

      </AppBar>
    </Box>
  )
}

export default Navbar;