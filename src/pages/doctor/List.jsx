/* eslint-disable react/jsx-key */
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataListDoctor } from "../../data/mockData";
import Header from "../../components/global/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const List = () => {
  // Paginação
  //   const [paginationModel, setPaginationModel] = React.useState({
  //     pageSize: 25,
  //     page: 0,
  //   });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
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
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      ],
    },
  ];

  return (
    <Box m="20px">
      <Header title="Doctors" subtitle="List all doctors actives" />
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
          checkboxSelection
          rows={mockDataListDoctor}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default List;
