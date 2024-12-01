import axios from "axios";
const primaryPath = "http://localhost:3001/api/";

export const getAllData = async (ruta) => {
  try {
    const res = await axios.get(`${primaryPath}${ruta}/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllDataSP = async (ruta, data) => {
  try {
    const res = await axios.get(`${primaryPath}${ruta}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const getData = async (ruta, data) => {
  try {
    const id = data[Object.keys(data)[0]];
    let total = `${primaryPath}${ruta}/${id}`;
    const res = await axios.get(total);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addData = async (ruta, data) => {
  try {
    data[Object.keys(data)[0]] = 0;
    const res = await axios.post(`${primaryPath}${ruta}/`, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const addDataLista = async (ruta, dataArray) => {
  try {
    dataArray.forEach(async (data) => {
      try {
        const res = await axios.post(`${primaryPath}${ruta}/`, data);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteDataLista = async (ruta, dataArray) => {
  try {
    dataArray.forEach(async (data) => {
      try {
        const id = data[Object.keys(data)[0]];
        const res = await axios.delete(`${primaryPath}${ruta}/`, data);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteData = async (ruta, data) => {
  try {
    const dataId = data[Object.keys(data)[0]];
    const res = await axios.delete(`${primaryPath}${ruta}/` + dataId);
    return res.data;
  } catch (err) {
    return { error: err };
  }
};

export const updateData = async (ruta, data) => {
  try {
    console.log(ruta);
    console.log(data);
    const dataId = data[Object.keys(data)[0]];
    const res = await axios.put(`${primaryPath}${ruta}/` + dataId, data);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const pagoTarjeta = async (ruta, data) => {
  try {
    const res = await axios.post(`${primaryPath}${ruta}/`, data);
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
