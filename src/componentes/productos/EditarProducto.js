import React, { useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from "../layout/Spinner";

const EditarProducto = (props) => {

    //Se utiliza para el redireccionamiento entre views
    const navigate = useNavigate();

    //Obtener el ID
    const { id } = useParams();

    //producto=state y funcion para actualizar
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: '',
        imagen: ''
    });

    //archivo=state, guardarArchivo=setState
    const [archivo, guardarArchivo] = useState('');

    //Consultar API para traer el producto a editar
    const consultarApi = async () => {
        const productoConsulta = await clienteAxios.get(`/productos/${id}`);
        guardarProducto(productoConsulta.data);
    };

    //Cuando el componente carga
    useEffect(() => {
        consultarApi();
    }, [])

    //Edita un producto en la base de datos
    const editarProducto = async e => {
        e.preventDefault();

        //Crear un formdata
        const formData = new FormData();
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);
        formData.append('imagen', archivo);
        //Almacenarlo en la base de datos
        try {
            const res = await clienteAxios.put(`/productos/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            //Lanzar alerta
            //console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    'Correcto',
                    'Se actualizó corectamente!',
                    'success'
                )
            }
            //Redirecci(onar
            navigate('/productos');
        } catch (error) {
            console.log(error);
            //Lanzar alerta
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }
    }

    //Leer datos del formulario 
    const leerInformacionProducto = e => {
        guardarProducto({
            //Obtener una copia del state y agregar el nuevo
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    //Coloca la imagen en el state
    const leerArchivo = e => {
        guardarArchivo(e.target.files[0]);
    }

    //Extraer los valores de state
    const { nombre, precio, imagen } = producto;

    if (!nombre) return <Spinner></Spinner>


    return (
        <Fragment>
            <h2>Editar Producto</h2>

            <form onSubmit={editarProducto}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Producto"
                        name="nombre"
                        onChange={leerInformacionProducto}
                        defaultValue={nombre} />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input type="number"
                        name="precio"
                        min="0.00"
                        step="0.01"
                        placeholder="Precio"
                        onChange={leerInformacionProducto}
                        defaultValue={precio} />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    {imagen ? (
                        <img src={`http://localhost:5000/${imagen}`} alt="imagen" width="300" />
                    ) : null}
                    <input type="file"
                        name="imagen"
                        onChange={leerArchivo} />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Editar Producto" />
                </div>
            </form>
        </Fragment>
    );
}

export default EditarProducto;