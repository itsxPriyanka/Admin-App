




import { Box } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import "./storage.css"; // Ensure this path is correct

const S3Profile = () => {
  const theme = useTheme();
  const colors = {
    primary: {
      400: "#e3f2fd",
    },
    blueAccent: {
      700: "#0288d1",
    },
    greenAccent: {
      200: "#66bb6a",
    },
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", type: "number", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  const mockDataS3Profiles = [
    { id: 1, registrarId: "123", name: "John Doe", age: 30, phone: "123-456-7890", email: "john.doe@example.com", address: "123 Main St", city: "Anytown", zipCode: "12345" },
    { id: 2, registrarId: "124", name: "Jane Smith", age: 25, phone: "123-456-7891", email: "jane.smith@example.com", address: "456 Elm St", city: "Othertown", zipCode: "67890" },
    // Add more mock data as needed
  ];

  const CustomToolbar = () => (
    <GridToolbarContainer className="toolbar-container">
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <Box className="s3profile-container">
      <Box className="s3profile-header">
        <h1>S3 Profiles</h1>
        <p>List of S3 Profiles for Management</p>
      </Box>
      <Box className="s3profile-data-grid">
        <DataGrid
          rows={mockDataS3Profiles}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default S3Profile;
