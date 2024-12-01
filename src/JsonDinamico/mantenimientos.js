import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";

export const color = [
  {
    id: "idColor_col",
    busca: "a",
    nombre: "Id color",
    label: "Id del color",
    type: "text",
    placeholder: "Digite el id del color",
    fullWidth: true,
  },
  {
    id: "Descripcion_col",
    nombre: "Descripcion",
    label: "Nombre del color",
    type: "text",
    placeholder: "Digite el color",
    fullWidth: true,
  },
];
export const combustible = [
  {
    id: "idCombustible_com",
    nombre: "Id combustible",
    busca: "a",
    label: "Id del combustible",
    type: "text",
    placeholder: "Digite el id del combustible",
    fullWidth: true,
  },
  {
    id: "Descripcion_com",
    nombre: "Descripcion",
    label: "Nombre del combustible",
    type: "text",
    placeholder: "Digite el combustible",
    fullWidth: true,
  },
];
export const documentos = [
  {
    id: "idDocumento_doc",
    label: "Id del documento",
    nombre: "Documento",
    busca: "a",
    type: "text",
    placeholder: "Digite el id del documento",
    fullWidth: true,
  },
  {
    id: "Descripcion_doc",
    label: "Nombre del documento",
    nombre: "Descripcion",
    type: "text",
    placeholder: "Digite el nombre del documento",
    fullWidth: true,
  },
];
export const tipoUsuario = [
  {
    id: "idTipoUsuario_tipusu",
    label: "Id del tipo de usuario",
    busca: "a",
    nombre: "Id tipo usuario",
    type: "text",
    placeholder: "Digite el id del tipo de usuario",
    fullWidth: true,
  },
  {
    id: "Descripcion_usu",
    label: "Nombre del tipo de usuario",
    nombre: "Descripcion",
    type: "text",
    placeholder: "Digite el nombre del tipo de usuario",
    fullWidth: true,
  },
];
export const tipoVehiculo = [
  {
    id: "idTipoVehiculo_tipveh",
    busca: "a",
    nombre: "Id tipo vehiculo",
    label: "Id del tipo de vehículo",
    type: "text",
    placeholder: "Digite el id del tipo de vehículo",
    fullWidth: true,
  },
  {
    id: "Descripcion_tipveh",
    nombre: "Descripcion",
    label: "Nombre del tipo de vehículo",
    type: "text",
    placeholder: "Digite el nombre del tipo de vehículo",
    fullWidth: true,
  },
];
export const marca = [
  {
    id: "idMarca_mar",
    nombre: "Id marca",
    busca: "a",
    label: "Id de la marca",
    type: "text",
    placeholder: "Digite el id de la marca",
    fullWidth: true,
  },
  {
    id: "Descripcion_mar",
    nombre: "Descripcion",
    label: "Nombre de la marca",
    type: "text",
    placeholder: "Digite el nombre de la marca",
    fullWidth: true,
  },
];
export const modelo = [
  {
    id: "idModelo_mod",
    nombre: "Id modelo",
    busca: "a",
    label: "Id del modelo",
    type: "text",
    placeholder: "Digite el id del modelo",
    fullWidth: true,
  },
  {
    id: "idMarca_mod",
    nombre: "Id marca",
    retorna: await getAllData("marca"),
    label: "Id de la marca",
    type: "text",
    placeholder: "Digite el id de la marca",
    fullWidth: true,
  },
  {
    id: "Descripcion_mod",
    nombre: "Descripcion",
    label: "Nombre del modelo",
    type: "text",
    placeholder: "Digite el nombre del modelo",
    fullWidth: true,
  },
];
export const seguro = [
  {
    id: "idSeguro_seg",
    busca: "a",
    nombre: "Id seguro",
    label: "Id del seguro",
    type: "text",
    placeholder: "Digite el id del seguro",
    fullWidth: true,
  },
  {
    nombre: "Descripcion",
    id: "Descripcion_seg",
    label: "Nombre del seguro",
    type: "text",
    placeholder: "Digite el nombre del seguro",
    fullWidth: true,
  },
  {
    id: "Plan_seg",
    nombre: "Plan del seguro",
    label: "Nombre del plan",
    type: "text",
    placeholder: "Digite el nombre del plan",
    fullWidth: true,
  },
];
export const pieza = [
  {
    id: "idPieza_pie",
    busca: "a",
    nombre: "Id pieza",
    label: "Id de la pieza",
    type: "text",
    placeholder: "Digite el id de la pieza",
    fullWidth: true,
  },
  {
    id: "Descripcion_pie",
    label: "Nombre de la pieza",
    nombre: "Descripcion",
    type: "text",
    placeholder: "Digite el nombre de la pieza",
    fullWidth: true,
  },
];
export const todosVehiculos = [{ retorna: await getAllData("vehiculo") }];
export const todosClientes = [
  { retorna: await getAllData("personal/cliente") },
];
export const vehiculo = [
  {
    id: "idVehiculo_veh",
    nombre: "Id vehiculo",
    busca: "a",
    label: "Id del vehiculo",
    type: "text",
    placeholder: "Digite el id del vehiculo",
    fullWidth: true,
  },
  {
    id: "idTipoVehiculo_veh",
    retorna: await getAllData("tipovehiculo"),
    label: "Tipo de vehiculo",
    type: "text",
    placeholder: "Digite el id del tipo de vehiculo",
    fullWidth: true,
  },
  {
    id: "idMarca_veh",
    retorna: await getAllData("marca"),
    label: "Marca ",
    type: "text",
    placeholder: "Digite el id del tipo de marca",
    fullWidth: true,
  },
  {
    id: "idModelo_veh",
    retorna: await getAllData("modelo"),
    label: "Modelo",
    type: "text",
    placeholder: "Digite el id del tipo de modelo",
    fullWidth: true,
  },
  {
    id: "Transmision_veh",
    nombre: "Transmision",
    label: "Nombre de la transmisión",
    type: "text",
    placeholder: "Digite el nombre de la transmisión",
    fullWidth: true,
  },
  {
    id: "Año_veh",
    nombre: "Año fabricacion",
    label: "Año fabricación",
    type: "number",
    placeholder: "Digite el año del vehículo",
    fullWidth: true,
  },
  {
    id: "CantidadAsiento_veh",
    label: "Cantidad de asientos",
    type: "number",
    placeholder: "Digite la cantidad de asientos",
    fullWidth: true,
  },
  {
    id: "Matricula_veh",
    nombre: "Matricula",
    label: "Matrícula",
    type: "text",
    placeholder: "Digite la matrícula",
    fullWidth: true,
  },
  {
    id: "idColor_veh",
    retorna: await getAllData("color"),
    label: "Color",
    type: "text",
    placeholder: "Digite el id del color",
    fullWidth: true,
  },
  {
    id: "idSeguro_veh",
    retorna: await getAllData("seguro"),
    label: "Id del seguro",
    type: "text",
    placeholder: "Digite el id del seguro",
    fullWidth: true,
  },
  {
    id: "CostoPorDia_veh",
    nombre: "Costo diario",
    label: "Costo por día (Dólares)",
    type: "number",
    placeholder: "Digite el costo por día(dólares)",
    fullWidth: true,
  },
  {
    id: "Chasis_veh",
    label: "Chasis",
    type: "text",
    placeholder: "Digite el chasis",
    fullWidth: true,
  },
  {
    id: "idCombustible_veh",
    retorna: await getAllData("combustible"),
    label: "Combustible usado",
    type: "text",
    placeholder: "Digite el id del combustible",
    fullWidth: true,
  },
];

export const vistaVehiculo = [
  { todosVehiculos: await getAllData("vehiculo/vehiculo") },
];

export const user = [
  {
    id: "idTercero_ter",
    nombre: "Id usuario",
    busca: "a",
    label: "Id del usuario",
    type: "text",
    placeholder: "Digite el id del usuario",
    fullWidth: true,
  },
  {
    id: "Nombre_ter",
    nombre: "Nombre de usuario",
    label: "Nombre completo",
    type: "text",
    placeholder: "Digite el nombre completo",
    fullWidth: true,
  },
  {
    id: "Telefono_ter",
    label: "Teléfono",
    nombre: "Teléfono",
    type: "text",
    placeholder: "Digite el teléfono completo",
    fullWidth: true,
  },
  {
    id: "idDocumento_ter",
    retorna: await getAllData("documento"),
    label: "Id del tipo de modelo",
    type: "text",
    placeholder: "Digite el id del tipo de modelo",
    fullWidth: true,
  },
  {
    id: "Documento_ter",
    nombre: "Documento",
    label: "Documento",
    type: "text",
    placeholder: "Digite el número del documento",
    fullWidth: true,
  },
  {
    id: "Fecha_Nacimiento_ter",
    nombre: "Nacimiento",
    label: "Fecha de nacimiento",
    type: "date",
    placeholder: "Digite la fecha de nacimiento",
    fullWidth: true,
  },
  {
    id: "Correo_ter",
    label: "Correo electrónico",
    type: "mail",
    placeholder: "Digite su correo",
    fullWidth: true,
  },
  {
    id: "idTipoUsuario_usu",
    retorna: await getAllData("tipousuario"),
    label: "Id del tipo de usuario",
    type: "text",
    placeholder: "Digite el id del tipo de usuario",
    fullWidth: true,
  },
  {
    id: "Nombre_usu",
    nombre: "Usuario",
    label: "Nombre de usuario",
    type: "text",
    placeholder: "Digite su usuario",
    fullWidth: true,
  },
  {
    id: "Clave_usu",
    label: "Contraseña",
    type: "password",
    placeholder: "Digite la contraseña",
    fullWidth: true,
  },
  {
    id: "Especificacion_terdir",
    nombre: "Direccion",
    label: "Dirección",
    type: "text",
    placeholder: "Digite la dirección",
    fullWidth: true,
  },
];

export const cancelacion2 = [
  { id: "idReserva_res", nombre: "Id reservacion" },
  { id: "FechaInicio_res", nombre: "Fecha de inicio" },
  { id: "FechaFin_res", nombre: "Fecha de fin" },
];

export const cancelacion = [
  { id: "idCancelacion_reserva_can", nombre: "Id cancelacion" },
  { id: "idReserva_can", nombre: "Id reservacion" },
  { id: "fechaCancelacion_can", nombre: "Fecha de solicitud" },
  { id: "idRecepcionOnline_fac", nombre: "Id Stripe" },
];

export const asignarPersonal = [
  { id: "idReserva_res", nombre: "Id Reserva", label: "Número de la reserva" },
  {
    id: "idPersonal_res",
    retorna: await getAllData("personal"),
    label: "Personal encargado",
    type: "text",
  },
];
