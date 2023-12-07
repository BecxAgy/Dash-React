import * as yup from "yup";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Box, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { updateDoctor } from "../slice/doctorSlice";
import { updatePatient } from "../slice/patientSlice";

export function ModalPatient({ open, setOpen, data }) {
  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),

    phone: yup.string().required("required"),

    address: yup.object().shape({
      street: yup.string().required("required"),
     
      postalCode: yup.string().required("required"),
     
      neighborhood: yup.string().required("required"),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
    }),
  });
  const initialValuesPatient = {
    id: data.id,
    name: data.name,
    phone: data.phone,
    cpf: data.cpf,
    email: data.email,

    address: {
      street: data.address?.street,
      number: data.address?.number,
      complement: data.address?.complement,
      neighborhood: data.address?.neighborhood,
      city: data.address?.city,
      state: data.address?.state,
      postalCode: data.address?.postalCode,
    },
  };

  const handleOpen = () => setOpen(!open);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    console.log(values);

    dispatch(updatePatient(values));

    handleOpen();
  };
  return (
    <>
      <Dialog
        className={`bg-black p-5 text-white`}
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="text-gray-500">
          Update doctor in system
        </DialogHeader>
        <DialogBody className="text-white">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValuesPatient}
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
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Patient Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="CPF"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.cpf}
                    name="cpf"
                    error={!!touched.cpf && !!errors.cpf}
                    helperText={touched.cpf && errors.cpf}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Street"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.street}
                    name="address.street"
                    error={
                      !!touched.address?.street && !!errors.address?.street
                    }
                    helperText={
                      touched.address?.street && errors.address?.street
                    }
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.number}
                    name="address.number"
                    error={
                      !!touched.address?.number && !!errors.address?.number
                    }
                    helperText={
                      touched.address?.number && errors.address?.number
                    }
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Postal Code"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.postalCode}
                    name="address.postalCode"
                    error={
                      !!touched.address?.postalCode &&
                      !!errors.address?.postalCode
                    }
                    helperText={
                      touched.address?.postalCode && errors.address?.postalCode
                    }
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Complement"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.complement}
                    name="address.complement"
                    error={
                      !!touched.address?.complement &&
                      !!errors.address?.complement
                    }
                    helperText={
                      touched.address?.complement && errors.address?.complement
                    }
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Neighborhood"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.neighborhood}
                    name="address.neighborhood"
                    error={
                      !!touched.address?.neighborhood &&
                      !!errors.address?.neighborhood
                    }
                    helperText={
                      touched.address?.neighborhood &&
                      errors.address?.neighborhood
                    }
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.city}
                    name="address.city"
                    error={!!touched.address?.city && !!errors.address?.city}
                    helperText={touched.address?.city && errors.address?.city}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="State"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address.state}
                    name="address.state"
                    error={!!touched.address?.state && !!errors.address?.state}
                    helperText={touched.address?.state && errors.address?.state}
                    sx={{ gridColumn: "span 2" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button type="submit" color="green" component="button">
                    Update
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
}

export default ModalPatient;
