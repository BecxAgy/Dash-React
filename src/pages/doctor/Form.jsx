import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/global/Header";
import { Formik } from "formik";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Create Doctor" subtitle="Insert a new doctor in system" />
      <Formik></Formik>
    </Box>
  );
};

export default Form;
