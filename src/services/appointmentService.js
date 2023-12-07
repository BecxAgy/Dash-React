import { appointmentApi, requestConfig } from "../config/config";

//get method
const getAllDoctors = async (page) => {
  const config = requestConfig("GET", null);

  try {
    debugger;
    const res = await fetch(
      appointmentApi + `get-all-actives?page=${page.page}&size=${page.pageSize}`,
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
const createDoctor = async (data) => {
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
const deleteDoctor = async (id) => {
  const config = requestConfig("DELETE", null);

  try {
    debugger;
    const res = await fetch(appointmentApi + id, config)
      .then((res) => res)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const doctorService = {
  getAllDoctors,
  createDoctor,
  deleteDoctor,
 
};

export default doctorService;
