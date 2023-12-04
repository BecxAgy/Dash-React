export const doctorApi = "http://localhost:8484/doctor/";
export const patientApi = "http://localhost:8383/patient/";
export const appointmentApi = "http://localhost:8000/appointment/";

export const requestConfig = (method, data) => {
  let config;
  if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
  }

  return config;
};
