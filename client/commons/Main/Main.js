import React from 'react'

import { Switch, Route } from "react-router-dom"

import Home from "../../Home/HomeContainer";
import Usuarios from "../../Usuarios/UsuariosContianer";
import Aplicaciones from "../../Aplicaciones/AplicacionesContainer";

const Main = ({
  onSubmit,
  onChange
}) => (
    <Switch>
        <Route exact path="/app" component={Home} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/aplicaciones" component={Aplicaciones} />
    </Switch>
)

export default Main