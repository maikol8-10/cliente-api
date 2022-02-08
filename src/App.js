import React, { Fragment, useContext } from "react";

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
import EditarProducto from "./componentes/productos/EditarProducto";
import NuevoProducto from "./componentes/productos/NuevoProducto";

import Pedidos from "./componentes/pedidos/Pedidos";
import NuevoPedido from "./componentes/pedidos/NuevoPedido";
import Login from "./componentes/auth/Login";

/**Import Context */
import { CRMContext, CRMProvider } from "./context/CRMContext";




const App = () => {

  //Utilizar Context en el componente
  const [auth, guardarAuth] = useContext(CRMContext);

  return (
    <Router>
      <Fragment>
        <CRMProvider value={[auth, guardarAuth]}>
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
                <Route exact path='/productos/nuevo' element={<NuevoProducto />}></Route>
                <Route exact path='/productos/editar/:id' element={<EditarProducto />}></Route>



                <Route exact path='/pedidos' element={<Pedidos />}></Route>
                <Route exact path='/pedidos/nuevo/:id' element={<NuevoPedido />}></Route>
                {/*With Component*/}

                <Route exact path='/iniciar-sesion' element={<Login />}></Route>

              </Routes>
            </main>
          </div>
        </CRMProvider>
      </Fragment>
    </Router>
  )
}

export default App;
