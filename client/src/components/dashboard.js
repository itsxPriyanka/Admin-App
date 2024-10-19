import React, { useState } from "react";
import { Box, Button, Typography, Menu, MenuItem, Grid } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import jsPDF from "jspdf";
import Papa from "papaparse";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ServiceProviderStats from "./serviceprovider"; // Import the ServiceProviderStats component

const Dashboard = ({ isSidebarExtended }) => {
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showServiceProviderStats, setShowServiceProviderStats] = useState(false); // State to control visibility
  const open = Boolean(anchorEl);

  const handleDownloadReports = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.text("User Report", 10, 10);
    users.forEach((user, index) => {
      doc.text(`User ${index + 1}: ${user.username}, Email: ${user.email}`, 10, 20 + index * 10);
    });
    doc.save("user_report.pdf");
    handleCloseMenu();
  };

  const downloadCSV = () => {
    const csvData = users.map((user) => ({
      Username: user.username,
      Email: user.email,
      CreatedDate: user.createdDate,
      Status: user.status,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "user_report.csv");
    link.click();
    handleCloseMenu();
  };

  const handleServiceProviderClick = () => {
    setShowServiceProviderStats(true); // Show Service Provider Stats
  };

  const handleBackToDashboard = () => {
    setShowServiceProviderStats(false); // Go back to dashboard view
  };

  return (
    <Box className="dashboard-container" m="20px" sx={{ flexGrow: 1 }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">DASHBOARD</Typography>
        <Button
          onClick={handleDownloadReports}
          sx={{
            backgroundColor: "#1E88E5",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* Dropdown Menu for Download Options */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem onClick={downloadPDF}>Download PDF</MenuItem>
        <MenuItem onClick={downloadCSV}>Download CSV</MenuItem>
      </Menu>

      {/* Conditional Rendering of Content */}
      {!showServiceProviderStats ? (
        <>
          {/* Existing Content: User Details & Projects */}
          <Box display="flex" flexWrap="wrap" gap="20px" mt="20px">
            {/* User Details & New Sign-ups */}
            <Box
              flex="1 1 30%"
              backgroundColor="#f5f5f5"
              borderRadius="10px"
              p="20px"
              overflow="auto"
            >
              <Typography variant="h5" fontWeight="600">
                User Details 
              </Typography>
              <Typography variant="body1" mt="10px">
                Total users: {users.length}
              </Typography>
            </Box>

            {/* Project Section */}
            <Box
              flex="1 1 30%"
              backgroundColor="#f5f5f5"
              borderRadius="10px"
              p="20px"
              overflow="auto"
            >
              <Typography variant="h5" fontWeight="600">
                Project Section
              </Typography>
              <Typography variant="body1" mt="10px">
                Active Projects: 20
              </Typography>
            </Box>

            {/* Service Provider Section */}
            <Box
              flex="1 1 30%"
              backgroundColor="#f5f5f5"
              borderRadius="10px"
              p="20px"
              overflow="auto"
            >
              <Typography variant="h5" fontWeight="600">
                Service Provider Section
              </Typography>
              <Typography variant="body1" mt="10px">
                Providers: 15
              </Typography>
            </Box>

            {/* AWS Services Data */}
            <Box
              flex="1 1 30%"
              backgroundColor="#f5f5f5"
              borderRadius="10px"
              p="20px"
              overflow="auto"
            >
              <Typography variant="h5" fontWeight="600">
                AWS Services Data
              </Typography>
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Box>
                  <Typography variant="h6" color="#66bb6a">
                    12,361
                  </Typography>
                  <Typography variant="body1">
                    Emails Sent
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="#66bb6a">
                    431,225
                  </Typography>
                  <Typography variant="body1">
                    Traffic Received
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* New Containers for Additional Features */}
          <Grid container spacing={3} mt="20px">
            {/* User Locations (with ComposableMap integration) */}
            <Grid item xs={12}>
              <Box
                bgcolor="#f5f5f5"
                borderRadius="10px"
                p="20px"
                sx={{
                  height: "350px", // Adjusted height to fit map in container
                  overflow: "hidden", // Prevent overflow
                }}
              >
                <Typography variant="h6">User Locations</Typography>
                <MapIcon fontSize="large" />
                <ComposableMap
                  width={600}  // Adjust the map width to fit within container
                  height={300} // Reduce height to fit inside the container
                  style={{ margin: "auto" }}
                >
                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json">
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#D6D6DA" // Default color
                          stroke="#FFFFFF" // Border color
                          onClick={() => console.log(geo.properties.name)} // Example action on click
                        />
                      ))
                    }
                  </Geographies>
                </ComposableMap>
              </Box>
            </Grid>

            {/* Total Service Providers */}
            <Grid item xs={12} sm={6} md={4}>
              <Box 
                bgcolor="#f5f5f5" 
                borderRadius="10px" 
                p="20px" 
                sx={{ cursor: "pointer" }} // Change cursor to pointer
                onClick={handleServiceProviderClick} // Show Service Provider Stats on click
              >
                <Typography variant="h6">Total Service Providers</Typography>
                <BarChartIcon fontSize="large" />
                <Typography variant="h5">15</Typography>
              </Box>
            </Grid>

            {/* Other Statistics */}
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                <Typography variant="h6">New Sign-ups</Typography>
                <Typography variant="h5">{users.length}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                <Typography variant="h6">Plan Type Distribution</Typography>
                <BarChartIcon fontSize="large" />
                <Typography variant="h5">Basic: 10 | Premium: 5</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                <Typography variant="h6">App Link Clicks</Typography>
                <Typography variant="h5">250</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                <Typography variant="h6">Most Used Module</Typography>
                <Typography variant="h5">Service A</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                <Typography variant="h6">Payment Invoices</Typography>
                <Typography variant="h5">15 Invoices</Typography>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        // Render ServiceProviderStats when state is true
        <Box mt="20px">
          <Button onClick={handleBackToDashboard} variant="contained" color="primary" sx={{ mb: 2 }}>
            Back to Dashboard
          </Button>
          <ServiceProviderStats /> {/* Render the ServiceProviderStats component here */}
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
