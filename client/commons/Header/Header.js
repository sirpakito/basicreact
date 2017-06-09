import React from 'react'
import { Link } from "react-router-dom";

const Header = () => (
      <div>
        <h1>Esto es la cabecera de mierda</h1>
        <hr />
        <ul>
          <li><Link to="/app">Home</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/aplicaciones">Aplicaciones</Link></li>
        </ul>
      </div>
)

export default Header