import React from 'react';
// Importalmos browseRouter para crear las rutas que tendra nuestro proyecto
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importamos componentes
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

// Importando el contex para dejar disponible todo nuestro documento de state
import ProyectoState from './context/proyectos/proyectoState';



function App() {
  return (
     
    <ProyectoState> {/* Hacer disponile el state en la aplicacion */}

      <Router>  {/* contenido de todas las paginas  */}

        <Switch>  {/* Cada una de las paginas  */}
          
          <Route exact path="/" component={Login} />  {/* Definimos la ruta de la pagina principal de login*/}
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />

        </Switch>

      </Router>
      
    </ProyectoState>

  );
}

export default App;
