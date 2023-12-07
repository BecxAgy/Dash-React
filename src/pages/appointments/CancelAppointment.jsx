import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/global/Header";
import { useDispatch, useSelector } from "react-redux";
import { createPatient, getPatients } from "../../slice/patientSlice";
import { useEffect } from "react";
import { getDoctors } from "../../slice/doctorSlice";

const CancelAppointment = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
 

  
  useEffect(() => {
    
  }, []);
  const handleFormSubmit = (values) => {
    console.log(values);
    //dispatch(createPatient(values));
  };

  return (
    <Box m="20px">
      <Header
        title="Create Appointment"
        subtitle="Create a New Appointment in System"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
              }}
            >
              
 
            {/* <FormControl variant="filled" sx={{ gridColumn: "span 1" }}>
                <InputLabel htmlFor="patient-select">Select a doctor</InputLabel>
                <Select
                value={values.fkDoctorId}
                onBlur={handleBlur}
                onChange={handleChange}
                variant="standard"
                name="fkDoctorId"
                error={!!touched.fkDoctorId && !!errors.fkDoctorId}
                helperText={touched.fkDoctorId && errors.fkDoctorId}
             
                sx={{ gridColumn: "span 1" }}
              >
                {doctors && doctors.map((doctor)=>(
                   <MenuItem value={doctor.id}>{doctor.name} - {doctor.crm}</MenuItem>
                ))}
               
              </Select>
             
            </FormControl> */}
            <TextField
                fullWidth
                variant="filled"
                type="text" // Utilize o tipo datetime-local para a entrada de data e hora
                label="cancelations"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cancellationReason}
                name="date_hour"
                error={!!touched.cancellationReason && !!errors.cancellationReason}
                helperText={touched.cancellationReason && errors.cancellationReason}
                sx={{ gridColumn: "span 2" }}
              />

         
              
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Appointment
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



const checkoutSchema = yup.object().shape({
   
    appointmentId: yup.number().required('required').positive().integer(),
    cancellationReason: yup.string().required('required')
});
const initialValues = {
  appointmentId: "",
  cancellationReason: "",

  

 

};

export default CancelAppointment;
