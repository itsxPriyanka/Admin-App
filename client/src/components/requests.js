import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import './requests.css'; // Import the CSS file

const RequestData = () => {
  // Define the columns for the DataGrid
  const columns = [
    { field: 'userToSP', headerName: 'User to SP', flex: 1 }, // New column for User to SP
    { field: 'spName', headerName: 'SP Name', flex: 1 },
    { field: 'spEmail', headerName: 'SP Email', flex: 1 },
    { field: 'userName', headerName: 'User Name', flex: 1 },
    { field: 'userEmail', headerName: 'User Email', flex: 1 },
  ];

  // Example static data for user-to-SP requests
  const data = [
    { id: 1, userToSP: 'Alice - Bob', spName: 'Bob Brown', spEmail: 'bob.brown@example.com', userName: 'Alice Johnson', userEmail: 'alice.johnson@example.com' },
    { id: 2, userToSP: 'Jane - John', spName: 'John Doe', spEmail: 'john.doe@example.com', userName: 'Jane Smith', userEmail: 'jane.smith@example.com' },
    { id: 3, userToSP: 'Emma - Mike', spName: 'Mike Wilson', spEmail: 'mike.wilson@example.com', userName: 'Emma Thompson', userEmail: 'emma.thompson@example.com' },
    { id: 4, userToSP: 'Sophia - Liam', spName: 'Liam Johnson', spEmail: 'liam.johnson@example.com', userName: 'Sophia Miller', userEmail: 'sophia.miller@example.com' },
  ];

  // Custom Toolbar
  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <div className="user-data-container">
      <h1>User to SP Requests</h1>
      <p>List of users and their service provider requests</p>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
          disableSelectionOnClick
          autoHeight
          className="custom-data-grid"
        />
      </div>
    </div>
  );
};

export default RequestData;
