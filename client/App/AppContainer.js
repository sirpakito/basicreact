import React from "react"

import HeaderPage from "../commons/Header/HeaderPage"
import MainPage from "../commons/Main/MainPage"
import FooterPage from "../commons/Footer/FooterPage"

export default class App extends React.Component {
  render() {
    return <div><HeaderPage /><MainPage /><FooterPage /></div>
  }
}
