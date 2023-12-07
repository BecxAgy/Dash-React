import { appointmentApi, requestConfig } from "../config/config";

//get method
const getAllAppointments = async () => {
  const config = requestConfig("GET", null);

  try {
    debugger;
    const res = await fetch(
      appointmentApi + `list`,
      config
    )
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};



//post method
const createAppointment = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(appointmentApi + "create", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//delete method
const cancelAppointment = async (data) => {
  const config = requestConfig("DELETE", data);

  try {
    debugger;
    const res = await fetch(appointmentApi + "cancel", config)
      .then((res) => res)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const doctorService = {
  getAllAppointments,
  createAppointment,
  cancelAppointment,
 
};

export default doctorService;
