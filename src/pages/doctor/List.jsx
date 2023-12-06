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
import { deleteDoctor, getDoctors } from "../../slice/doctorSlice";
import Modal from "../../components/Modal";

const List = () => {
  //Paginação
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const { page, pageSize } = paginationModel;
  const [doctor, setDoctor] = useState({});

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteDoctor = async (param) => {
    try {
      console.log(doctor);
      dispatch(deleteDoctor(param.id));
    } catch (error) {
      console.error("Erro ao deletar o médico:", error);
    }
  };

  const { doctors, loading, total } = useSelector((state) => state.doctor);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "crm", headerName: "CRM", flex: 1 },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Address",
      headerName: "Address",
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
          on
          onClick={() => {
            setOpen(!open);
            setDoctor(params.row);
          }}
          icon={<EditIcon />}
          label="Edit"
        />,
        <GridActionsCellItem
          onClick={() => {
            handleDeleteDoctor(params.row);
          }}
          icon={<DeleteIcon />}
          label="Delete"
        />,
      ],
    },
  ];

  useEffect(() => {
    dispatch(
      getDoctors({
        page,
        pageSize,
      })
    );
  }, [dispatch, page, pageSize]);

  return (
    <Box m="20px">
      <Header title="Doctors" subtitle="List all doctors actives" />
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
          <DataGrid
            rows={doctors && doctors}
            columns={columns}
            rowCount={total}
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="server"
          />
        </Box>
      )}
      <Modal open={open} setOpen={setOpen} data={doctor} />
    </Box>
  );
};

export default List;
