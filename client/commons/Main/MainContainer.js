import React from "React";
import { Switch, Route } from "react-router-dom";

import Home from "../../Home/HomeContainer";
import Usuarios from "../../Usuarios/UsuariosContianer";
import Aplicaciones from "../../Aplicaciones/AplicacionesContainer";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/app" component={Home} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/aplicaciones" component={Aplicaciones} />
        </Switch>
      </main>
    );
  }
}
