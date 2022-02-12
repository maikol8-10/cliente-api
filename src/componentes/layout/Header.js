import React, { useContext } from 'react';

import { CRMContext } from '../../context/CRMContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    //Utilizar valores del Context
    const [auth, guardarAuth] = useContext(CRMContext);

    const cerrarSesion = e => {
        e.preventDefault();
        //auth.auth= false y el token se remueve
        guardarAuth({
            token: '',
            auth: false
        });

        localStorage.setItem('token', '');
        navigate('/iniciar-sesion')
    };

    return (
        <header className="barra">
            <div className="contenedor">
                <div className="contenido-barra">
                    <h1>CRM - Administrador de Clientes</h1>

                    {auth.auth ? (
                        <button
                            type="button"
                            className="btn btn-rojo"
                            onClick={cerrarSesion}>
                            <i className="far fa-times-circle"></i>
                            Cerrar sesión
                        </button>
                    ) : null}

                </div>
            </div>
        </header>
    )
}

export default Header;