import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/global/Header";
import { useDispatch } from "react-redux";
import { createPatient } from "../../slice/patientSlice";

const FormPatient = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(createPatient(values));
  };

  return (
    <Box m="20px">
      <Header
        title="Create Patient"
        subtitle="Create a New Patient in System"
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
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
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
                value={values.telefone}
                name="telefone"
                error={!!touched.telefone && !!errors.telefone}
                helperText={touched.telefone && errors.telefone}
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
                error={!!touched.address?.street && !!errors.address?.street}
                helperText={touched.address?.street && errors.address?.street}
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
                error={!!touched.address?.number && !!errors.address?.number}
                helperText={touched.address?.number && errors.address?.number}
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
                  !!touched.address?.postalCode && !!errors.address?.postalCode
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
                  !!touched.address?.complement && !!errors.address?.complement
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
                  touched.address?.neighborhood && errors.address?.neighborhood
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
              <Button type="submit" color="secondary" variant="contained">
                Create New Patient
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  cpf: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  telefone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.object().shape({
    street: yup.string().required("required"),
    
    postalCode: yup.string().required("required"),
    
    neighborhood: yup.string().required("required"),
    city: yup.string().required("required"),
    state: yup.string().required("required"),
  }),
});
const initialValues = {
  name: "",
  cpf: "",
  email: "",
  telefone: "",

  address: {
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    postalCode: "",
  },
};

export default FormPatient;
