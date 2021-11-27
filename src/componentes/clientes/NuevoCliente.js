import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

const NuevoCliente = () => {
    const navigate = useNavigate();
    //cliente= state, guardarCliente= funcion para guardar el state
    const [cliente, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        empresa: '',
        telefono: ''
    });

    const actualizarState = e => {
        //Almacenar lo que el usuario escribe
        guardarCliente({
            //Obtener una copia del state actual
            ...cliente,
            [e.target.name]: e.target.value
        });

        //console.log(cliente)
    };

    //Validar Formulario
    const validarCliente = () => {
        //Destructuring
        const { nombre, apellido, email, empresa, telefono } = cliente;

        //Revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        //return true o false
        return valido;

    }

    //Añade en la REST API un cliente nuevo
    const agregarCliente = e => {
        e.preventDefault();

        //Enviar petición a Axios
        clienteAxios.post('/clientes', cliente).then(res => {
            //console.log(res);
            //Validar si hay errores en Mongoose
            if (res.data.code === 11000) {
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error!',
                    text: 'Este cliente ya está registrado',
                })
            } else {
                Swal.fire(
                    'Se agregó el Cliente!',
                    res.data.mensaje,
                    'success'
                )
                //console.log(res.data);
            }

            //Redirecci(onar
            navigate('/');
        });
    }

    return (
        <Fragment>
            <h2>Nuevo Cliente</h2>

            <form onSubmit={agregarCliente}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Cliente"
                        name="nombre"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text"
                        placeholder="Apellido Cliente"
                        name="apellido"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text"
                        placeholder="Empresa Cliente"
                        name="empresa"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email"
                        placeholder="Email Cliente"
                        name="email"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="number"
                        placeholder="Teléfono Cliente"
                        name="telefono"
                        onChange={actualizarState}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        className="btn btn-azul"
                        value="Agregar Cliente"
                        disabled={validarCliente()}

                    />
                </div>

            </form>
        </Fragment >
    );
}

//HOC, es una funcion que toma un componente y retorna un nuevo componente
//export default withRouter(NuevoCliente);
export default NuevoCliente;