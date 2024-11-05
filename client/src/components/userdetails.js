
import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import './userdetails.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([
    { 
      id: 1, username: "johndoe", email: "johndoe@example.com", 
      createdDate: "01/01/2022", status: "Active", emailVerified: "Yes", 
      confirmationStatus: "Confirmed", contact: "123-456-7890", 
      plan: "Premium", city: "New York", lastActive: "10/20/2023", 
      awsStatus: "Active"
    },
    { 
      id: 2, username: "janesmith", email: "janesmith@example.com", 
      createdDate: "02/01/2022", status: "Inactive", emailVerified: "No", 
      confirmationStatus: "Unconfirmed", contact: "098-765-4321", 
      plan: "Basic", city: "Los Angeles", lastActive: "09/15/2023", 
      awsStatus: "Inactive"
    },
    { 
      id: 3, username: "alice", email: "alice@example.com", 
      createdDate: "03/01/2022", status: "Active", emailVerified: "Yes", 
      confirmationStatus: "Confirmed",  contact: "555-123-4567", 
      plan: "Standard", city: "Chicago", lastActive: "08/30/2023", 
      awsStatus: "Active" 
    },
    { 
      id: 4, username: "bob", email: "bob@example.com", 
      createdDate: "04/01/2022", status: "Inactive", emailVerified: "No", 
      confirmationStatus: "Unconfirmed", contact: "333-222-1111", 
      plan: "Free", city: "Houston", lastActive: "10/05/2023", 
      awsStatus: "Inactive"
    },
    { 
      id: 5, username: "charlie", email: "charlie@example.com", 
      createdDate: "05/01/2022", status: "Active", emailVerified: "Yes", 
      confirmationStatus: "Confirmed", contact: "444-555-6666", 
      plan: "Basic", city: "Phoenix", lastActive: "10/15/2023", 
      awsStatus: "Active"
    },
    // Add more mock users as needed
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 5;

  const filteredUserData = users.filter((user) => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) // Added for name search
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
            // { field: "name", headerName: "Name", width: 150 }, // New column
            { field: "contact", headerName: "Contact", width: 150 }, // New column
            { field: "email", headerName: "Email Address", width: 200 },
            { field: "plan", headerName: "Plan", width: 100 }, // New column
            { field: "city", headerName: "City", width: 120 }, // New column
            { field: "createdDate", headerName: "Account Created", width: 150 }, // Updated header
            { field: "lastActive", headerName: "Last Active", width: 150 }, // New column
            { field: "awsStatus", headerName: "AWS Status", width: 120 }, // New column
            // { field: "projectsCreated", headerName: "Projects Created", width: 150 }, // New column
            // { field: "ongoingPlan", headerName: "Ongoing Plan", width: 150 }, // New column
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
