import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

/**Import Cliente Axios */
import clienteAxios from '../../config/axios';

import Cliente from './Cliente';

const Clientes = () => {

    /**Trabajar con useState*/
    //clientes=state, guardarClientes = funcion para guardar el state
    const [clientes, guardarClientes] = useState([]);



    //useEffect es similar a componentDidMount y componentWillMount
    useEffect(() => {

        /**Query a la API*/
        const consultarAPI = async () => {
            const clientesConsulta = await clienteAxios.get('/clientes');
            //Colocar el resultado en el state
            guardarClientes(clientesConsulta.data);
            //console.log(clientesConsulta)
        };
        
        consultarAPI();
    }, [clientes]);

    return (
        <Fragment>
            <h2>Clientes</h2>

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente
                        key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Clientes;