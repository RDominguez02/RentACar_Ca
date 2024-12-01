import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import axios, { formToJSON } from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
  pagoTarjeta,
} from "../Features/apiCalls";
import { convertLength } from "@mui/material/styles/cssUtils";
const PopUpImagen = ({
  campos,
  titulo,
  valorInicial,
  actualiza,
  link,
  //id,
  ...props
}) => {
  const [file, setFile] = useState();
  const [selectedRow, setSelectedRow] = useState(false);


  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  
  const sendHandler = () => {
    const MySwal = withReactContent(Swal);
    if(!file){
      MySwal.fire({
        icon: "error",
        title: "Debe Seleccionar una imagen",
        text: "Verifique los datos y vuelva a intentar",
        showConfirmButton: true,
      });
      return
  }
  const id = valorInicial.idVehiculo_veh;
    const formdata = new FormData();
    formdata.append("vehiculo", id);
    formdata.append("image", file);
    pagoTarjeta("vehiculo/upload", formdata);
  document.getElementById('fileinput').value = null
  setFile(null)
    MySwal.fire({
      icon: "success",
      text: "Imagen guardada Correctamente!",
      showConfirmButton: true,
    });
  props.onHide()
}
  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Box>
            <input id="fileinput" type="file" className="form-control" onChange={handleFile} />
            </Box>
            <Box marginTop={3}>
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={sendHandler}
            >
              Guardar
            </button>
          </Box>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUpImagen;
