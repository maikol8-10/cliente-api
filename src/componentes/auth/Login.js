import React, { useContext, useState } from 'react';

import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

//Import Context
import { CRMContext } from '../../context/CRMContext';

const Login = () => {
    const navigate = useNavigate();
    //state con los datos del form
    const [credenciales, guardarCredenciales] = useState({});

    //state auth y guardarAuth
    const [auth, guardarAuth] = useContext(CRMContext);
    console.log(auth)



    //Iniciar Sesion en el servidor
    const iniciarSesion = async e => {
        e.preventDefault();

        //Autenticar al usuario
        try {

            const respuesta = await clienteAxios.post('/iniciar-sesion', credenciales);

            //Extraer el TOKEN y colocarlo en LocalStorage
            const { token } = respuesta.data;
            //Colocarlo en el state de Context
            guardarAuth({
                token,
                auth: true
            })
            Swal.fire(
                'Login Correcto',
                'Has iniciado sesion',
                'success'
            );

            //Redireccionar
            navigate('/');

        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: error.response.data.mensaje
            });
        }
    }

    //Almacenar lo que el usuario escribe en el state
    const leerDatos = e => {
        guardarCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        })
    };


    return (
        <div className="login">
            <h2>Iniciar Sesión</h2>

            <div className="contenedor-formulario">
                <form onSubmit={iniciarSesion}>
                    <div className="campo">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email para iniciar sesion"
                            required
                            onChange={leerDatos}></input>
                    </div>
                    <div className="campo">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password  para iniciar sesion"
                            required
                            onChange={leerDatos}></input>
                    </div>
                    <input type="submit" value="Iniciar Sesión" className="btn btn-verde btn-block"></input>
                </form>
            </div>
        </div>
    )
};

export default Login;