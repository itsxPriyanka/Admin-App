

import { useState } from "react";
import { Box, Typography, TextField, Button, Container, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './invoices.css'; // Import the CSS file

const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState([
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", cost: 200, date: "2023-09-10" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", cost: 300, date: "2023-09-12" },
    { id: 3, name: "Mike Ross", phone: "555-123-4567", email: "mike@example.com", cost: 150, date: "2023-09-15" },
    // Add more mock data here...
  ]);

  const [filteredData, setFilteredData] = useState(invoiceData);
  const [costFilter, setCostFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [page, setPage] = useState(0); // Current page
  const pageSize = 5; // Number of rows per page

  // Filter function based on cost and date
  const handleFilter = () => {
    let filtered = invoiceData;

    if (costFilter) {
      filtered = filtered.filter((invoice) => invoice.cost >= costFilter);
    }

    if (dateFilter) {
      filtered = filtered.filter((invoice) => invoice.date === dateFilter);
    }

    setFilteredData(filtered);
    setPage(0); // Reset page to 0 on new filter
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => <Typography>${params.row.cost}</Typography>,
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  // Pagination control logic
  const handleNextPage = () => {
    if ((page + 1) * pageSize < filteredData.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const paginatedRows = filteredData.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <Container maxWidth="xl" style={{ marginTop: '40px' }}>
      <Box className="main-container" style={{ width: '100%', padding: '20px' }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          INVOICES
        </Typography>
        <Typography variant="subtitle1" mb={2}>
          List of Invoice Balances
        </Typography>

        {/* Filter Section */}
        <Box mb={3} display="flex" justifyContent="space-between">
          <TextField
            label="Filter by Cost (>=)"
            variant="outlined"
            type="number"
            value={costFilter}
            onChange={(e) => setCostFilter(e.target.value)}
            style={{ marginRight: "15px", width: "300px" }}
          />
          <TextField
            label="Filter by Date (YYYY-MM-DD)"
            variant="outlined"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={{ marginRight: "15px", width: "300px" }}
          />
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Apply Filters
          </Button>
        </Box>

        {/* DataGrid Section */}
        <Box className="data-grid-container" height={600} width="100%">
          {paginatedRows.length > 0 ? (
            <DataGrid
              rows={paginatedRows}
              columns={columns}
              checkboxSelection
              hideFooter // Hide the default footer since you're using custom pagination controls
            />
          ) : (
            <Typography>No Data Available</Typography>
          )}
        </Box>

        {/* Custom Pagination Controls */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <IconButton
            onClick={handlePreviousPage}
            disabled={page === 0}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography>
            Page {page + 1} of {Math.ceil(filteredData.length / pageSize)}
          </Typography>
          <IconButton
            onClick={handleNextPage}
            disabled={(page + 1) * pageSize >= filteredData.length}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Invoices;
