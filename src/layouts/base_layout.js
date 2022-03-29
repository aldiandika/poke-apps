/** @jsxImportSource @emotion/react */
import { Component } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

class BaseLayout extends Component {
  state = {
    navTitle: this.props.navTitle
  }
  render() {
    return (
      <>
        <Navbar
          title="POKE APPS"
        />

        <Outlet />
      </>
    )
  }
}

export default BaseLayout;