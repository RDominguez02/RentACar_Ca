import React, { useState, useEffect } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";
import PopUpDinamico from "./PopUpDinamico";
import { user } from "../JsonDinamico/mantenimientos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const CrudUsuario = ({ ...props }) => {
  let campos = user;
  const titulo = "Usuarios";
  const link = "personal/usuario";
  let valorInicial = [{}];
  const [clientes, setClientes] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [selectedRow, setSelectedRow] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [actualiza, setActualiza] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllData(link);
      setClientes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [campos]);
  let camposConNombre = campos.filter((obj) => obj.nombre);
  let cabeceraHeader = camposConNombre.map((obj) => obj.nombre);
  let cabeceraBody = campos.map((obj) => obj.id);
  const limpiarForm = () => {
    const element = document.getElementById("formulario");
    element.reset();
    setFormValues({});
  };
  const handleGuardar = async (e) => {
    e.preventDefault();
    setActualiza(false);
    console.log(objetoVacio);
    setSelectedRow(objetoVacio);
    setShowModal(true);
    await fetchData();
  };
  const objetoVacio = cabeceraBody.reduce((obj, columna, index) => {
    obj[columna] = index === 0 ? 0 : "";
    return obj;
  }, {});

  const handleModifica = (row) => {
    setSelectedRow(row);
    setShowModal(true);
    console.log(row);
    setActualiza(true);
  };
  const handleEliminar = async (valor) => {
    const eliminar = document.getElementById("elimina");
    eliminar.focus();
    MySwal.fire({
      title: "El registro será eliminado",
      icon: "warning",
      buttons: true,
    }).then(async (willDelete) => {
      try {
        if (willDelete.isConfirmed) {
          console.log(willDelete);
          const data = await deleteData(link, valor);
          MySwal.fire({
            icon: "success",
            text: "Ha sido eliminado correctamente!",
          });
          await fetchData();
        } else {
          MySwal.fire({
            icon: "info",
            text: "No ha sido eliminado!",
          });
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          text: "No se ha podido eliminar el registro",
        });
      }
    });
  };
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-gray-500 py-3">{titulo}</h2>
      <table className="w-full text-sm text-left text-gray-500 table-fixed">
        <thead>
          <tr>
            {cabeceraHeader.map((campo, index) => {
              return <th key={index}>{campo}</th>;
            })}
            <th key={"acciones"}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((objeto, index) => (
            <tr key={objeto.id} className="bg-white border-b">
              {camposConNombre.map((campo) => (
                <td
                  key={campo.id}
                  className="px-1 py-4 font-medium text-gray-900"
                >
                  {campo.type === "date"
                    ? objeto[campo.id]?.split("T")[0]
                    : objeto[campo.id]}
                </td>
              ))}
              <td key={"botones" + index}>
                <button
                  id="guarda"
                  className="flex-shrink-0 w-4/5 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                  onClick={() => handleModifica(objeto)}
                >
                  Modificar
                </button>
                <button
                  id="elimina"
                  className="flex-shrink-0 w-4/5 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2  rounded"
                  type="button"
                  onClick={() => handleEliminar(objeto)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-start py-4">
        <button
          id="guarda"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2  rounded"
          type="submit"
          onClick={handleGuardar}
        >
          Nuevo registro
        </button>
      </div>

      <PopUpDinamico
        show={showModal}
        campos={campos}
        titulo={`Registro de ${titulo.toLowerCase()}`}
        link={link}
        actualiza={actualiza}
        valorInicial={selectedRow}
        onHide={() => {
          setShowModal(false);
          fetchData();
        }}
      />
    </div>
  );
};
