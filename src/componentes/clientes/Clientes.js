import React, { useEffect, useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

/**Import Cliente Axios */
import clienteAxios from "../../config/axios";

import Cliente from "./Cliente";
import Spinner from "../layout/Spinner";

//Importar el context
import { CRMContext } from "../../context/CRMContext";

const Clientes = () => {
  const navigate = useNavigate();

  /**Trabajar con useState*/
  //clientes=state, guardarClientes = funcion para guardar el state
  const [clientes, guardarClientes] = useState([]);

  //Utilizar valores del Context
  const [auth, guardarAuth] = useContext(CRMContext);

  const [loading, setLoading] = useState(true);

  /**Query a la API*/
  const consultarAPI = async () => {
    try {
      setLoading(true);
      const clientesConsulta = await clienteAxios.get("/clientes", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setLoading(false);
      //Colocar el resultado en el state
      guardarClientes(clientesConsulta.data);
    } catch (error) {
      //Error con la autorización
      if (error.response.status == 500) {
        navigate("/iniciar-sesion");
      }
    }
  };

  //useEffect es similar a componentDidMount y componentWillMount
  useEffect(async () => {
    //Verifica si el token no está vacio
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
  }, []);
  //}, [clientes]);

  // return a Spinner when loading is true
  if (loading) return <Spinner></Spinner>;

  // data will be null when fetch call fails
  /*if (!data) return (
    <span>Data not available</span>
  );*/

  //Si el state está como false
  /*if (!auth.auth) { //Se pone antes del spinner para que no lo muestre y valide antes el login
        console.log("Entrooooo")
        navigate("/iniciar-sesion");
    }*/

  //if (!clientes.length) return <Spinner></Spinner>;

  return (
    <Fragment>
      <h2>Clientes</h2>

      <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Cliente
      </Link>

      {clientes.length && !loading ? (
        <ul className="listado-clientes">
          {clientes.map((cliente) => (
            <Cliente
              key={cliente._id}
              cliente={cliente}
              consultarAPI={consultarAPI}
            />
          ))}
        </ul>
      ) : (
        <h2>No existen clientes</h2>
      )}
    </Fragment>
  );
};

export default Clientes;
