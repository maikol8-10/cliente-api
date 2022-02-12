import React, { useEffect, useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Producto from "./Producto";

/**Import Cliente Axios */
import clienteAxios from "../../config/axios";
import Spinner from "../layout/Spinner";

//Importar el context
import { CRMContext } from "../../context/CRMContext";

const Productos = () => {
  const navigate = useNavigate();
  //productos = state, guardarProductos = funcion para guardar el state
  const [productos, guardarProductos] = useState([]);

  //Utilizar valores del Context
  const [auth, guardarAuth] = useContext(CRMContext);

  const consultarAPI = async () => {
    try {
      const productosConsulta = await clienteAxios.get("/productos", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      guardarProductos(productosConsulta.data);
    } catch (error) {
      //Error con la autorización
      if (error.response.status == 500) {
        navigate("/iniciar-sesion");
      }
    }
  };

  //useEffect para consultar la API cuando cargue
  useEffect(async () => {
    if (localStorage.getItem("token") !== "") {
      if (auth.token == "") {
        guardarAuth({
          token: localStorage.getItem("token"),
          auth: true,
        });
      }
      await consultarAPI();
    } else {
      navigate("/iniciar-sesion");
    }
  }, [productos]);

  //Spinner de carga
  if (!productos.length) return <Spinner></Spinner>;

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
