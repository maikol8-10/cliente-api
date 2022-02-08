import React, { useContext } from 'react';
import { CRMContext } from '../../context/CRMContext';

/**Routing */
import { Link } from 'react-router-dom';

const Navegacion = () => {

    //Utilizar valores del Context
    const [auth, guardarAuth] = useContext(CRMContext);

    if (!auth.auth) return null; //Validar login para mostrar o no el menu

    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <Link to={"/"} className="clientes">Clientes</Link>
                <Link to={"/productos"} className="productos">Productos</Link>
                <Link to={"/pedidos"} className="pedidos">Pedidos</Link>
            </nav>
        </aside>
    );
}

export default Navegacion;