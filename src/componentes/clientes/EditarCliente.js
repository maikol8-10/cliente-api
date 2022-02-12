import React, { Fragment, useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Swal from "sweetalert2";

//Importar el context
import { CRMContext } from "../../context/CRMContext";

const EditarCliente = (props) => {
  //Se utiliza para el redireccionamiento entre views
  const navigate = useNavigate();
  //Obtener el ID
  const { id } = useParams();

  //Query a la API
  const consultarApi = async () => {
    const clienteConsulta = await clienteAxios.get(`/clientes/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });

    //Colocar en el state
    datosCliente(clienteConsulta.data);
  };

  //useEffect, cuando el componente carga
  useEffect(() => {
    consultarApi();
  }, []);

  //const navigate = useNavigate();
  //cliente= state, guardarCliente= funcion para guardar el state
  const [cliente, datosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    telefono: "",
  });

  //Utilizar valores del Context
  const [auth, guardarAuth] = useContext(CRMContext);

  const actualizarState = (e) => {
    //Almacenar lo que el usuario escribe
    datosCliente({
      //Obtener una copia del state actual
      ...cliente,
      [e.target.name]: e.target.value,
    });

    //console.log(cliente)
  };

  //Envía una petición por axios para actualizar el cliente
  const actualizarCliente = (e) => {
    e.preventDefault();
    //Enviar peticición por axios
    clienteAxios.put(`/clientes/${cliente._id}`, cliente).then((res) => {
      //Validar si hay errores en Mongoose
      if (res.data.code === 11000) {
        Swal.fire({
          type: "error",
          title: "Hubo un error!",
          text: "Este cliente ya está registrado",
        });
      } else {
        Swal.fire("Correcto", "Se actualizó corectamente!", "success");
        //console.log(res.data);
      }
      //Redireccionar
      navigate("/");
    });
  };

  //Validar Formulario
  const validarCliente = () => {
    //Destructuring
    const { nombre, apellido, email, empresa, telefono } = cliente;

    //Revisar que las propiedades del state tengan contenido
    let valido =
      !nombre.length ||
      !apellido.length ||
      !email.length ||
      !empresa.length ||
      !telefono.length;

    //return true o false
    return valido;
  };

  return (
    <Fragment>
      <h2>Editar Cliente</h2>

      <form onSubmit={actualizarCliente}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange={actualizarState}
            value={cliente.nombre}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange={actualizarState}
            value={cliente.apellido}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={actualizarState}
            value={cliente.empresa}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={actualizarState}
            value={cliente.email}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="number"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={actualizarState}
            value={cliente.telefono}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Guardar Cambios"
            disabled={validarCliente()}
          />
        </div>
      </form>
    </Fragment>
  );
};

//HOC, es una funcion que toma un componente y retorna un nuevo componente
//export default withRouter(NuevoCliente);
export default EditarCliente;
