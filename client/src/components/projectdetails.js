import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import './projectdetails.css'; // Import your custom CSS for this component

const ProjectDetailsPage = () => {
  const columns = [
    { field: "userProjectName", headerName: "User Project Name", flex: 1 },
    { field: "userName", headerName: "User Name", flex: 1 },
    { field: "userEmail", headerName: "User Email", flex: 1 },
    { field: "userCity", headerName: "User City", flex: 1 },
  ];

  const mockDataProjects = [
    {
      id: 1,
      userProjectName: "Project Alpha",
      userName: "John Doe",
      userEmail: "john.doe@example.com",
      userCity: "New York",
    },
    {
      id: 2,
      userProjectName: "Project Beta",
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
      userCity: "Los Angeles",
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
    <Box className="project-details-container">
      <Box className="project-details-header">
        <h1>Project Details</h1>
        <p>List of Projects and User Information</p>
      </Box>
      <Box className="project-details-data-grid">
        <DataGrid
          rows={mockDataProjects}
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

export default ProjectDetailsPage;
