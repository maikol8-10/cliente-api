import React, { Fragment } from "react";

/**Routing */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**Layout */
import Header from "./componentes/layout/Header";
import Navegacion from "./componentes/layout/Navegacion";

/**Componentes */
import Clientes from "./componentes/clientes/Clientes";
import NuevoCliente from "./componentes/clientes/NuevoCliente";
import EditarCliente from "./componentes/clientes/EditarCliente";

import Productos from "./componentes/productos/Productos";
import Pedidos from "./componentes/pedidos/Pedidos";


const App = () => {
  return (
    <Router>
      <Fragment>
        <Header></Header>
        <div className="grid contenedor contenido-principal">
          <Navegacion></Navegacion>
          <main className="caja-contenido col-9">
            {/*Todo: Routing a diferentes componentes*/}
            <Routes>
              {/*With Elemement*/}
              <Route exact path='/' element={<Clientes />}></Route>
              <Route exact path='/clientes/nuevo' element={<NuevoCliente />}></Route>
              <Route exact path='/clientes/editar/:id' element={<EditarCliente />}></Route>
              
              <Route exact path='/productos' element={<Productos />}></Route>
              <Route exact path='/pedidos' element={<Pedidos />}></Route>
              {/*With Component*/}


            </Routes>
          </main>
        </div>
      </Fragment>
    </Router>
  )
}

export default App;
