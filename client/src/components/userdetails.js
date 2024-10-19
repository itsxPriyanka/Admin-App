


import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import './userdetails.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "johndoe", email: "johndoe@example.com", createdDate: "01/01/2022", status: "Active", emailVerified: "Yes", confirmationStatus: "Confirmed" },
    { id: 2, username: "janesmith", email: "janesmith@example.com", createdDate: "02/01/2022", status: "Inactive", emailVerified: "No", confirmationStatus: "Unconfirmed" },
    { id: 3, username: "alice", email: "alice@example.com", createdDate: "03/01/2022", status: "Active", emailVerified: "Yes", confirmationStatus: "Confirmed" },
    { id: 4, username: "bob", email: "bob@example.com", createdDate: "04/01/2022", status: "Inactive", emailVerified: "No", confirmationStatus: "Unconfirmed" },
    { id: 5, username: "charlie", email: "charlie@example.com", createdDate: "05/01/2022", status: "Active", emailVerified: "Yes", confirmationStatus: "Confirmed" },
    // Add more mock users as needed
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 5;

  const filteredUserData = users.filter((user) => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedRows = filteredUserData.slice(0, pageSize); // Display only the first `pageSize` rows

  return (
    <Box className="main-container">
      <Typography variant="h5" className="main-title">
        Search & User List
      </Typography>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Box className="table-container">
        <DataGrid
          rows={paginatedRows}
          columns={[
            { field: "id", headerName: "ID", width: 90 },
            { field: "username", headerName: "Username", width: 150 },
            { field: "email", headerName: "Email Address", width: 200 },
            { field: "createdDate", headerName: "Created Date", width: 150 },
            { field: "status", headerName: "Status", width: 100 },
            { field: "emailVerified", headerName: "Email Verified", width: 150 },
            { field: "confirmationStatus", headerName: "Confirmation Status", width: 150 },
          ]}
          pageSize={pageSize}
          rowsPerPageOptions={[]} // Remove rows per page options
          disableSelectionOnClick
          className="data-grid"
        />
      </Box>
    </Box>
  );
};

export default UserList;
