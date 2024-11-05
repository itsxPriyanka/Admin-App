// import React from "react";
// import { FaServer, FaDollarSign, FaCloud, FaMailBulk, FaCalendarAlt } from "react-icons/fa"; // Add icons

// import "./service.css";

// const Service = () => {
//   return (
//     <div className="service-container">
//       <div className="service-card">
//         <div className="icon-container">
//           <FaServer className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">AWS Services</h3>
//           <p className="card-text">EC2, S3, Lambda, RDS, etc.</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaDollarSign className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Cost of Services</h3>
//           <p className="card-text">$1500 / month</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaCloud className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Storage Used</h3>
//           <p className="card-text">5TB</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaServer className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Most Used Service</h3>
//           <p className="card-text">EC2 (Compute)</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaDollarSign className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Most Costed Service</h3>
//           <p className="card-text">EC2 (Compute)</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaMailBulk className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Email Sent</h3>
//           <p className="card-text">2500 emails</p>
//         </div>
//       </div>

//       <div className="service-card">
//         <div className="icon-container">
//           <FaCalendarAlt className="icon" />
//         </div>
//         <div className="card-content">
//           <h3 className="card-title">Due Date for Payment</h3>
//           <p className="card-text">15th of every month</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;













































import React, { useState } from "react";
import { FaServer, FaDollarSign, FaCloud, FaMailBulk, FaCalendarAlt } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid for tabular data display
import "./service.css";

// Sample data for each icon's table details
const serviceProviderData = {
  AWS_Services: [
    { id: 1, name: "AWS Services", value: "EC2, S3, Lambda, RDS, etc." },
    { id: 2, name: "Storage Used", value: "5TB" },
  ],
  Cost_of_Services: [
    { id: 1, name: "Monthly Cost", value: "$1500" },
  ],
  Storage_Used: [
    { id: 1, name: "Current Storage", value: "5TB" },
  ],
  Most_Used_Service: [
    { id: 1, name: "Service", value: "EC2 (Compute)" },
  ],
  Most_Costed_Service: [
    { id: 1, name: "Service", value: "EC2 (Compute)" },
  ],
  Email_Sent: [
    { id: 1, name: "Total Emails", value: "2500 emails" },
  ],
  Due_Date: [
    { id: 1, name: "Payment Due Date", value: "15th of every month" },
  ],
};

const Service = () => {
  const [selectedData, setSelectedData] = useState(null);

  // Function to handle icon click and display the relevant table data
  const handleIconClick = (key) => {
    setSelectedData(serviceProviderData[key]);
  };

  // Define columns for the DataGrid table
  const columns = [
    { field: "name", headerName: "Service Detail", flex: 1 },
    { field: "value", headerName: "Description", flex: 1 },
  ];

  return (
    <div className="service-container">
      <div className="icon-grid">
        {/* AWS Services Card */}
        <div className="service-card" onClick={() => handleIconClick("AWS_Services")}>
          <div className="icon-container">
            <FaServer className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">AWS Services</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Cost of Services Card */}
        <div className="service-card" onClick={() => handleIconClick("Cost_of_Services")}>
          <div className="icon-container">
            <FaDollarSign className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Cost of Services</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Storage Used Card */}
        <div className="service-card" onClick={() => handleIconClick("Storage_Used")}>
          <div className="icon-container">
            <FaCloud className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Storage Used</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Most Used Service Card */}
        <div className="service-card" onClick={() => handleIconClick("Most_Used_Service")}>
          <div className="icon-container">
            <FaServer className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Most Used Service</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Most Costed Service Card */}
        <div className="service-card" onClick={() => handleIconClick("Most_Costed_Service")}>
          <div className="icon-container">
            <FaDollarSign className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Most Costed Service</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Email Sent Card */}
        <div className="service-card" onClick={() => handleIconClick("Email_Sent")}>
          <div className="icon-container">
            <FaMailBulk className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Email Sent</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Due Date Card */}
        <div className="service-card" onClick={() => handleIconClick("Due_Date")}>
          <div className="icon-container">
            <FaCalendarAlt className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Due Date for Payment</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>
      </div>

      {/* Display DataGrid Table if an icon is selected */}
      {selectedData && (
        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={selectedData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight
          />
        </div>
      )}
    </div>
  );
};

export default Service;
