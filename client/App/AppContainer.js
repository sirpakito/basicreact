import React from "react";

import Header from "../commons/Header/HeaderContainer";
import Main from "../commons/Main/MainContainer";
import Footer from "../commons/Footer/FooterContainer";

export default class App extends React.Component {
  render() {
    return <div><Header /><Main /><Footer /></div>;
  }
}
