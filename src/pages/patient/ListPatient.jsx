/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../config/theme";
import Header from "../../components/global/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import { deletePatient, getPatients } from "../../slice/patientSlice";

const List = () => {
  const [patient, setPatient] = useState({});

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDeletePatient = async () => {
    try {
      console.log(patient);
      dispatch(deletePatient(patient.id));
    } catch (error) {
      console.error("Erro ao deletar o paciente:", error);
    }
  };

  const { patients, loading } = useSelector((state) => state.patient);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "name",
      headerName: "Nome do Paciente",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "cpf", headerName: "CPF", flex: 1 },
    {
      field: "telefone",
      headerName: "telefone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Address",
      headerName: "Endereço",
      minWidth: 300,
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.address.street}, {params.row.address.number},{" "}
          {params.row.address.neighborhood} - {params.row.address.city}
        </Typography>
      ),
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => {
            setOpen(!open);
            setPatient(params.row);
          }}
          icon={<EditIcon />}
          label="Edit"
        />,
        <GridActionsCellItem
          onClick={() => {
            setPatient(params.row);
            handleDeletePatient();
          }}
          icon={<DeleteIcon />}
          label="Delete"
        />,
      ],
    },
  ];

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  return (
    <Box m="20px">
      <Header title="Patients" subtitle="List all Patients actives" />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          m="40px 0 0 0"
          height="68vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.primary[600],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.primary[600],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid rows={patients} columns={columns} autoPageSize />
        </Box>
      )}
      <Modal open={open} setOpen={setOpen} data={patient} />
    </Box>
  );
};

export default List;
