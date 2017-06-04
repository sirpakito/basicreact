import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Esto es la cabecera</h1>
        <hr />
        <ul>
          <li><Link to="/app">Home</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/aplicaciones">Aplicaciones</Link></li>
        </ul>
      </div>
    )
  }
}
