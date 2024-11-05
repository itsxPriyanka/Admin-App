

import React, { useState } from "react";
import { Box, Button, Typography, Menu, MenuItem, Grid } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import jsPDF from "jspdf";
import Papa from "papaparse";
import BarChartIcon from "@mui/icons-material/BarChart";
import ServiceProviderStats from "./serviceprovider"; // Import the ServiceProviderStats component
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaMapData from "../assets/map.json";





const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};




const Dashboard = ({ isSidebarExtended }) => {
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showServiceProviderStats, setShowServiceProviderStats] = useState(false);
  const open = Boolean(anchorEl);
  const [scale, setScale] = useState(1); // State for zoom level
  const [center, setCenter] = useState([78, 22]); // Center of the map
  const [isPanning, setIsPanning] = useState(false);
  const [startCoords, setStartCoords] = useState(null);
  const [stateColors, setStateColors] = useState({}); 






   // Generate colors for each state when component mounts
   React.useEffect(() => {
    const colors = {};
    const states = indiaMapData.features; // Assuming your map data has a 'features' array
    states.forEach((state) => {
      colors[state.properties.NAME_1] = getRandomColor(); // Use state name as key for color
    });
    setStateColors(colors);
  }, []);



  


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
    setShowServiceProviderStats(true);
  };

  const handleBackToDashboard = () => {
    setShowServiceProviderStats(false);
  };





  // Zoom in function
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale * 1.2, 5)); // Limit max zoom level
  };

  // Zoom out function
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale / 1.2, 1)); // Limit min zoom level
  };

  const handleMouseDown = (event) => {
    setIsPanning(true);
    setStartCoords([event.clientX, event.clientY]);
  };

  const handleMouseMove = (event) => {
    if (isPanning && startCoords) {
      const dx = event.clientX - startCoords[0];
      const dy = event.clientY - startCoords[1];
      setCenter((prevCenter) => [prevCenter[0] - (dx / scale), prevCenter[1] - (dy / scale)]);
      setStartCoords([event.clientX, event.clientY]);
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setStartCoords(null);
  };






  return (
    <Box className="dashboard-container" m="20px" sx={{ flexGrow: 1 }}>
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

      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem onClick={downloadPDF}>Download PDF</MenuItem>
        <MenuItem onClick={downloadCSV}>Download CSV</MenuItem>
      </Menu>



      {!showServiceProviderStats ? (
        <Grid container spacing={2} mt="20px">
          <Grid item xs={12} md={5}>
            <Box height="600px" width="100%" border="1px solid #ddd" borderRadius="10px" overflow="hidden">
              <Typography variant="h5" fontWeight="600" mb="10px" align="center">
                Map of India
              </Typography>
              <Box display="flex" justifyContent="space-between" mb="10px">
                <Button variant="outlined" onClick={zoomOut}> - </Button>
                <Button variant="outlined" onClick={zoomIn}> + </Button>
              </Box>
              <Box overflow="auto" height="100%">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: scale * 800, // Adjust scale for better zooming
                    center: center,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  style={{ width: "200%", height: "200%" }} // Allow for larger area to scroll
                >
                  <Geographies geography={indiaMapData}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={stateColors[geo.properties.NAME_1] || "#B0BEC5"} // Use stateColors map
                          style={{
                            default: { outline: "#FF5722", strokeWidth: 0.5 },
                            hover: { fill: "#CFD8DC", outline: "#FF5722", strokeWidth: 0.5 },
                            pressed: { fill: "#607D8B", outline: "#FF5722", strokeWidth: 0.5 },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                </ComposableMap>
              </Box>
            </Box>
          </Grid>



          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">User Details</Typography>
                  <Typography variant="body1">Total users: {users.length}</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">Project Section</Typography>
                  <Typography variant="body1">Active Projects: 20</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px" onClick={handleServiceProviderClick} sx={{ cursor: "pointer" }}>
                  <Typography variant="h6">Total Service Providers</Typography>
                  <BarChartIcon fontSize="large" />
                  <Typography variant="h5">15</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">AWS Services Data</Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="h6" color="#66bb6a">12,361</Typography>
                      <Typography variant="body1">Emails Sent</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" color="#66bb6a">431,225</Typography>
                      <Typography variant="body1">Traffic Received</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">New Sign-ups</Typography>
                  <Typography variant="h5">{users.length}</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">Plan Type Distribution</Typography>
                  <BarChartIcon fontSize="large" />
                  <Typography variant="h5">Basic: 10 | Premium: 5</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">App Link Clicks</Typography>
                  <Typography variant="h5">250</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">Most Used Module</Typography>
                  <Typography variant="h5">Service A</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box bgcolor="#f5f5f5" borderRadius="10px" p="20px">
                  <Typography variant="h6">Payment Invoices</Typography>
                  <Typography variant="h5">15 Invoices</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box mt="20px">
          <Button onClick={handleBackToDashboard} variant="contained" color="primary" sx={{ mb: 2 }}>
            Back to Dashboard
          </Button>
          <ServiceProviderStats />
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
