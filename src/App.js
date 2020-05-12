import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "rbx/index.css";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Routes from "./Routes";

const App = (props) => {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes />
      <Footer></Footer>
    </BrowserRouter>
  );
};

// REDUX
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
