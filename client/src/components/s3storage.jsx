import { Box } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from "@mui/x-data-grid";
import "./s3storage.css"; // Ensure this path is correct

const S3Profile = () => {
  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "totalFiles", headerName: "Total Files", type: "number", flex: 1 },
    { field: "storageUsed", headerName: "Storage Used", flex: 1 },
    { field: "projectsCreated", headerName: "Projects Created", type: "number", flex: 1 },
    { field: "ongoingProject", headerName: "Ongoing Project", flex: 1 },
    { field: "ongoingPlan", headerName: "Ongoing Plan", flex: 1 },
  ];

  const mockDataS3Profiles = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      totalFiles: 15,
      storageUsed: "5 GB",
      projectsCreated: 5,
      ongoingProject: "Project Alpha",
      ongoingPlan: "Premium",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      totalFiles: 25,
      storageUsed: "10 GB",
      projectsCreated: 3,
      ongoingProject: "Project Beta",
      ongoingPlan: "Standard",
    },
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
          disableSelectionOnClick
          autoHeight
          className="custom-data-grid"
        />
      </Box>
    </Box>
  );
};

export default S3Profile;
