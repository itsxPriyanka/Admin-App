// import { useState } from "react";
// import { Box, Typography, TextField, Button, Container, Grid } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import './transaction.css'; // Import the CSS file

// const Invoices = () => {
//   // Sample invoice data
//   const [invoiceData, setInvoiceData] = useState([
//     { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", cost: 200, date: "2023-09-10" },
//     { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", cost: 300, date: "2023-09-12" },
//     { id: 3, name: "Mike Ross", phone: "555-123-4567", email: "mike@example.com", cost: 150, date: "2023-09-15" },
//   ]);

//   // Sample payment data
//   const [paymentData, setPaymentData] = useState([
//     { id: 0, username: "c1331daa-40f1-70bd-f4ce-b8e433b0c996", email: "shaikfarooqses07@gmail.com", createdDate: "4/9/2024", status: "Active", emailVerified: "Yes", confirmationStatus: "Unconfirmed" },
//     { id: 1, username: "f1d3edba-2091-707e-b162-de0f8a342268", email: "mallikarjun.kande@icloud.com", createdDate: "5/9/2024", status: "Active", emailVerified: "No", confirmationStatus: "Unconfirmed" },
//     { id: 2, username: "11a3ad4a-d011-708f-94bd-74689699201c", email: "vathsaworks@gmail.com", createdDate: "4/9/2024", status: "Active", emailVerified: "Yes", confirmationStatus: "Unconfirmed" },
//   ]);

//   // State for filters
//   const [costFilter, setCostFilter] = useState('');
//   const [dateFilter, setDateFilter] = useState('');

//   // Filter function
//   const handleFilter = () => {
//     let filteredInvoices = invoiceData;

//     if (costFilter) {
//       filteredInvoices = filteredInvoices.filter(invoice => invoice.cost >= Number(costFilter));
//     }

//     if (dateFilter) {
//       filteredInvoices = filteredInvoices.filter(invoice => invoice.date === dateFilter);
//     }

//     setInvoiceData(filteredInvoices); // Update state with filtered invoices
//   };

//   // Columns for DataGrid
//   const invoiceColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Name", flex: 1 },
//     { field: "phone", headerName: "Phone Number", flex: 1 },
//     { field: "email", headerName: "Email", flex: 1 },
//     { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => <Typography>${params.row.cost}</Typography> },
//     { field: "date", headerName: "Date", flex: 1 },
//   ];

//   const paymentColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "username", headerName: "Username", flex: 1 },
//     { field: "email", headerName: "Email Address", flex: 1 },
//     { field: "createdDate", headerName: "Created Date", flex: 1 },
//     { field: "status", headerName: "Status", flex: 1 },
//     { field: "emailVerified", headerName: "Email Verified", flex: 1 },
//     { field: "confirmationStatus", headerName: "Confirmation Status", flex: 1 },
//   ];

//   return (
//     <Container maxWidth="xl" style={{ marginTop: '40px', width: '60%' }}>
//       <Box className="main-container" style={{ width: '100%', padding: '20px' }}>
//         <Typography variant="h4" fontWeight="bold" mb={2}>Transactions</Typography>

//         {/* Filter Section */}
//         <Box mb={3} display="flex" justifyContent="space-between">
//           <TextField
//             label="Filter by Cost (>=)"
//             variant="outlined"
//             type="number"
//             value={costFilter}
//             onChange={(e) => setCostFilter(e.target.value)}
//             style={{ marginRight: "15px", width: "300px" }}
//           />
//           <TextField
//             label="Filter by Date (YYYY-MM-DD)"
//             variant="outlined"
//             value={dateFilter}
//             onChange={(e) => setDateFilter(e.target.value)}
//             style={{ marginRight: "15px", width: "300px" }}
//           />
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Apply Filters
//           </Button>
//         </Box>

//         {/* Main Content Section */}
//         <Grid container spacing={3}>
//           {/* Transaction History Container */}
//           <Grid item xs={12}>
//             <Box border={1} borderColor="grey.400" borderRadius="8px" padding={2} marginBottom={3}>
//               <Typography variant="h5" fontWeight="bold" mb={2}>Transaction History</Typography>
//               <DataGrid rows={invoiceData} columns={invoiceColumns} autoHeight hideFooter />
//             </Box>
//           </Grid>

//           {/* Payment History Container */}
//           <Grid item xs={12}>
//             <Box border={1} borderColor="grey.400" borderRadius="8px" padding={2} marginBottom={3}>
//               <Typography variant="h5" fontWeight="bold" mb={2}>Payment History</Typography>
//               <DataGrid rows={paymentData} columns={paymentColumns} autoHeight hideFooter />
//             </Box>
//           </Grid>

//           {/* User Details Container */}
//           <Grid item xs={12}>
//             <Box border={1} borderColor="grey.400" borderRadius="8px" padding={2} marginBottom={3}>
//               <Typography variant="h5" fontWeight="bold" mb={2}>User Details</Typography>
//               <DataGrid rows={paymentData} columns={paymentColumns} autoHeight hideFooter />
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Invoices;




































import { useState } from "react";
import { Box, Typography, TextField, Container, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import './transaction.css';

const Invoices = () => {
  // Sample payment data with new fields
  const [paymentData, setPaymentData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", paymentMethod: "Credit Card", transactionId: "TXN12345", date: "2023-09-10", senderName: "Bank A", receiverName: "Bank B", bankName: "Bank of America", confirmationStatus: "Confirmed", typeOfPlan: "Premium", couponUsed: "SAVE20", totalAmount: 200 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", paymentMethod: "Debit Card", transactionId: "TXN67890", date: "2023-09-12", senderName: "Bank C", receiverName: "Bank D", bankName: "Chase", confirmationStatus: "Pending", typeOfPlan: "Standard", couponUsed: "WELCOME10", totalAmount: 300 },
    { id: 3, name: "Mike Ross", email: "mike@example.com", paymentMethod: "PayPal", transactionId: "TXN54321", date: "2023-09-15", senderName: "Bank E", receiverName: "Bank F", bankName: "Wells Fargo", confirmationStatus: "Confirmed", typeOfPlan: "Basic", couponUsed: "SAVE5", totalAmount: 150 },
  ]);

  // State for various filters
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [totalAmountFilter, setTotalAmountFilter] = useState("");

  // Columns for the single "Payment Details" DataGrid
  const paymentColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "paymentMethod", headerName: "Payment Method", flex: 1 },
    { field: "transactionId", headerName: "Transaction ID", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "senderName", headerName: "Sender Name", flex: 1 },
    { field: "receiverName", headerName: "Receiver Name", flex: 1 },
    { field: "bankName", headerName: "Bank Name", flex: 1 },
    { field: "confirmationStatus", headerName: "Confirmation Status", flex: 1 },
    { field: "typeOfPlan", headerName: "Type of Plan", flex: 1 },
    { field: "couponUsed", headerName: "Coupon Used", flex: 1 },
    { field: "totalAmount", headerName: "Total Amount", flex: 1, renderCell: (params) => <Typography>${params.row.totalAmount}</Typography> },
  ];

  // Filtered data based on name, email, and total amount
  const filteredData = paymentData.filter((item) => {
    const matchesName = nameFilter === "" || item.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesEmail = emailFilter === "" || item.email.toLowerCase().includes(emailFilter.toLowerCase());
    const matchesTotalAmount = totalAmountFilter === "" || item.totalAmount.toString().includes(totalAmountFilter);
    return matchesName && matchesEmail && matchesTotalAmount;
  });

  return (
    <Container maxWidth="xl" style={{ marginTop: '40px', width: '80%' }}> {/* Increased width to 80% */}
      <Box className="main-container" style={{ width: '100%', padding: '30px' }}> {/* Increased padding */}
        <Typography variant="h4" fontWeight="bold" mb={2}>Payment Details</Typography>

        {/* Filter Inputs */}
        <Box mb={2} display="flex" gap={2}> {/* Flex layout for filters */}
          <TextField
            label="Filter by Name"
            variant="outlined"
            size="small"
            className="filter-input"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <TextField
            label="Filter by Email"
            variant="outlined"
            size="small"
            className="filter-input"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
          />
          <TextField
            label="Filter by Total Amount"
            variant="outlined"
            size="small"
            className="filter-input"
            value={totalAmountFilter}
            onChange={(e) => setTotalAmountFilter(e.target.value)}
          />
        </Box>

        {/* Main Content Section */}
        <Grid container spacing={3}>
          {/* Payment Details Table */}
          <Grid item xs={12}>
            <Box border={1} borderColor="grey.400" borderRadius="12px" padding={3} marginBottom={3}> {/* Rounded corners and increased padding */}
              <Typography variant="h5" fontWeight="bold" mb={2}>Payment Details</Typography>
              <DataGrid rows={filteredData} columns={paymentColumns} autoHeight hideFooter />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Invoices;
