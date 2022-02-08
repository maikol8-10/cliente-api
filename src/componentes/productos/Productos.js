import React, { useEffect, useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Producto from "./Producto";

/**Import Cliente Axios */
import clienteAxios from "../../config/axios";
import Spinner from "../layout/Spinner";

//Importar el context
import { CRMContext } from '../../context/CRMContext';

const Productos = () => {
  const navigate = useNavigate();
  //productos = state, guardarProductos = funcion para guardar el state
  const [productos, guardarProductos] = useState([]);

  //Utilizar valores del Context
  const [auth, guardarAuth] = useContext(CRMContext);

  //useEffect para consultar la API cuando cargue
  useEffect(() => {
    if (auth.token !== '') { //Verifica si el token no está vacio
      //Query a la API
      const consultarAPI = async () => {
        try {
          const productosConsulta = await clienteAxios.get("/productos", {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          });
          guardarProductos(productosConsulta.data);
        } catch (error) {
          //Error con la autorización
          if (error.response.status == 500) {
            navigate('/iniciar-sesion');
          }

        }

      };

      //Llamado a la API
      consultarAPI();
    } else {
      navigate('/iniciar-sesion');
    }
  }, [productos]);

  //Si el state está como false
  if (!auth.auth) { //Se pone antes del spinner para que no lo muestre y valide antes el login
    navigate('/iniciar-sesion');
  }


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
