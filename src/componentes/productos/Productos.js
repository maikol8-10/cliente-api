import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Producto from "./Producto";

/**Import Cliente Axios */
import clienteAxios from "../../config/axios";
import Spinner from "../layout/Spinner";

const Productos = () => {
  //productos = state, guardarProductos = funcion para guardar el state
  const [productos, guardarProductos] = useState([]);

  //useEffect para consultar la API cuando cargue
  useEffect(() => {
    //Query a la API
    const consultarAPI = async () => {
      const productosConsulta = await clienteAxios.get("/productos");
      console.log(productosConsulta);
      guardarProductos(productosConsulta.data);
    };

    //Llamado a la API
    consultarAPI();
  }, [productos]);

  //Spinner de carga

  if (!productos.length) return <Spinner></Spinner>

  return (
    <Fragment>
      <h2>Productos</h2>
      <Link to={"/productos/nuevo"} className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Producto
      </Link>

      <ul className="listado-productos">
        {productos.map((producto) => (
          <Producto key={producto._id} producto={producto}></Producto>
        ))}
      </ul>
    </Fragment>
  );
};

export default Productos;
