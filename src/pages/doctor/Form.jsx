import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/global/Header";
import { useDispatch } from "react-redux";
import { createDoctor } from "../../slice/doctorSlice";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(createDoctor(values));
  };

  return (
    <Box m="20px">
      <Header title="Create Doctor" subtitle="Create a New Doctor in System" />

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
                label="Doctor Name"
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
                label="CRM"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.crm}
                name="crm"
                error={!!touched.crm && !!errors.crm}
                helperText={touched.crm && errors.crm}
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
              <Select
                value={values.speciality}
                onBlur={handleBlur}
                onChange={handleChange}
                name="speciality"
                error={!!touched.speciality && !!errors.speciality}
                helperText={touched.speciality && errors.speciality}
                label="Age"
                variant="filled"
                sx={{ gridColumn: "span 1" }}
              >
                <MenuItem value={"Orthopedics"}>Orthopedics</MenuItem>
                <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
                <MenuItem value={"Gynaecology"}>Gynaecology</MenuItem>
                <MenuItem value={"Dermatology"}>Dermatology</MenuItem>
              </Select>
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
                Create New Doctor
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
  crm: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  speciality: yup.string().required("required"),
  address: yup.object().shape({
    street: yup.string().required("required"),
    number: yup.string().required("required"),
    postalCode: yup.string().required("required"),
    complement: yup.string().required("required"),
    neighborhood: yup.string().required("required"),
    city: yup.string().required("required"),
    state: yup.string().required("required"),
  }),
});
const initialValues = {
  name: "",
  crm: "",
  email: "",
  phone: "",
  speciality: "",
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

export default Form;
