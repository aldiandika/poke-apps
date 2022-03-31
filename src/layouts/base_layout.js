/** @jsxImportSource @emotion/react */
import { Component } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

class BaseLayout extends Component {
  state = {
    navTitle: this.props.navTitle
  }
  render() {
    return (
      <>

        <Box
          sx={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Navbar
            title="POKE APPS"
          />
          <Outlet />
        </Box>

      </>
    )
  }
}

export default BaseLayout;