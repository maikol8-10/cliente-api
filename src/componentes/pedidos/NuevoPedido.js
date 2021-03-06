import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import FormBuscarProducto from './FormBuscarProducto';
import FormCantidadProducto from './FormCantidadProducto';

const NuevoProducto = () => {

    const navigate = useNavigate();
    //Extraer ID del cliente
    const { id } = useParams();

    //state
    const [cliente, guardarCliente] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    const [productos, guardarProductos] = useState([]);
    const [total, guardarTotal] = useState(0);

    useEffect(() => {
        //Obtener cliente
        const consultarApi = async () => {
            //Obtener cliente
            const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);
            guardarCliente(clienteConsulta.data);
        };

        //Llamar a la api
        consultarApi();

        //Actualizar el total a pagar
        actualizarTotal();

    }, [productos]);

    const buscarProducto = async e => {
        e.preventDefault();

        //Obtener los productos de la busqueda
        const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`);

        //Si no hay resultados alojar una alerta, caso contrario agregarlo al state
        if (resultadoBusqueda.data[0]) {
            let productoResultado = resultadoBusqueda.data[0];
            //Agregar la llave producto (Copia de ID)
            productoResultado.producto = resultadoBusqueda.data[0]._id;
            productoResultado.cantidad = 0;

            //Ponerlo en el state, pero primero se optiene una copia de los productos actuales
            guardarProductos([...productos, productoResultado]);
        } else {
            //No hay resultados
            Swal.fire({
                type: 'error',
                title: 'No hay resultados',
                text: 'Vuelva a intentarlo'
            })
        }
    }

    //Almacenar una busqueda en el state
    const leerDatosBusqueda = e => {
        guardarBusqueda(e.target.value);
    }

    //Actualizar la cantidad de productos
    const restarProductos = i => {
        //Copiar el arreglo original de productos
        const todosProductos = [...productos];
        //Validar si est?? en 0, no puede ir mas all??
        if (todosProductos[i].cantidad === 0) return;
        //De lo contrario se disminuye
        todosProductos[i].cantidad--;
        //Almacenarlo en el state
        guardarProductos(todosProductos);

    }

    const aumentarProductos = i => {
        //Copiar el arreglo original de productos
        const todosProductos = [...productos];
        //Incremento
        todosProductos[i].cantidad++;
        //Almacenarlo en el state
        guardarProductos(todosProductos);

    }

    //Elimina un producto del state
    const eliminaProductoPedido = id => {
        //!== Elimina el elemento del array
        const todosProductos = productos.filter(producto => producto.producto !== id);
        guardarProductos(todosProductos);
    }
    //Actualizar el total a pagar
    const actualizarTotal = () => {
        //Si el arreglo de productos es igual 0: el total es 0
        if (productos.length === 0) {
            guardarTotal(0);
            return;
        }

        //Calcular el nuevo total
        let nuevoTotal = 0;
        //Recorrer todos los productos, sus cantidades y precios
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));
        //Almacena el total
        guardarTotal(nuevoTotal);
    }

    //Almacena el pedido en la Base de Datos
    const realizarPedido = async e => {
        e.preventDefault();

        //Construir el objeto
        const pedido = {
            "cliente": id, //Est?? arriba como una constante
            "pedido": productos,
            "total": total
        }
        //Almacenarlo en la base de datos
        const resultado = await clienteAxios.post(`/pedidos/nuevo/${id}`, pedido);

        //Leer resultado
        if (resultado.status === 200) {
            //Alerta de todo bien
            Swal.fire({
                type: 'success',
                title: 'Correcto',
                text: resultado.data.mensaje,
            })
        } else {
            //Alerta de error
            Swal.fire({
                type: 'error',
                title: 'Hubo un error!',
                text: 'Vuelva a Intentarlo',
            })
        }

        //Redireccionar
        navigate('/pedidos');
    }

    return (
        <Fragment>
            <h2>Nuevo Pedido</h2>

            <div className="ficha-cliente">
                <h3>Datos de Cliente</h3>
                <p>Nombre: {cliente.nombre} {cliente.apellido}</p>
                <p>Tel??fono: {cliente.telefono}</p>
            </div>



            <FormBuscarProducto
                buscarProducto={buscarProducto}
                leerDatosBusqueda={leerDatosBusqueda}
            ></FormBuscarProducto>

            <ul className="resumen">
                {productos.map((producto, index) => (
                    <FormCantidadProducto
                        key={producto.producto}
                        producto={producto}
                        restarProductos={restarProductos}
                        aumentarProductos={aumentarProductos}
                        eliminaProductoPedido={eliminaProductoPedido}
                        index={index}
                    ></FormCantidadProducto>
                ))}


            </ul>
            <p className="total">Total a Pagar:<span>${total}</span></p>


            {total > 0 ? (
                <form onSubmit={realizarPedido}>
                    <input type="submit" className="btn btn-verde btn-block" value="Realizar Pedido" />
                </form>
            ) : null}

        </Fragment>
    )
};

export default NuevoProducto;