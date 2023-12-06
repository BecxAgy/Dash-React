import { patientApi, requestConfig } from "../config/config";

//get method
const getAlPatients = async (page) => {
  const config = requestConfig("GET", null);

  try {
    debugger;
    const res = await fetch(patientApi + `get-all-actives`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//post method
const createPatient = async (data) => {
  const config = requestConfig("POST", data);

  try {
    debugger;
    const res = await fetch(patientApi + "create", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//delete method
const deletePatient = async (id) => {
  const config = requestConfig("DELETE", null);

  try {
    debugger;
    const res = await fetch(patientApi + id, config)
      .then((res) => res)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//edit method
const updatePatient = async (id, data) => {
  const config = requestConfig("PUT", data);

  try {
    debugger;
    const res = await fetch(patientApi + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const doctorService = {
  getAlPatients,
  createPatient,
  deletePatient,
  updatePatient,
};

export default doctorService;
