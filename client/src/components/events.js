// import React from "react";
// import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid from Material UI
// import './events.css'; // Import the CSS file

// const eventData = [
//   { id: 1, dataRecover: "Yes", notification: "Enabled", alerts: "5", monitoringLogs: "Active", backupUpdates: "Daily" },
//   { id: 2, dataRecover: "No", notification: "Disabled", alerts: "0", monitoringLogs: "Inactive", backupUpdates: "Weekly" },
//   { id: 3, dataRecover: "Yes", notification: "Enabled", alerts: "2", monitoringLogs: "Active", backupUpdates: "Monthly" },
//   // Add more rows as needed
// ];

// const columns = [
//   { field: "dataRecover", headerName: "Data Recover", flex: 1 },
//   { field: "notification", headerName: "Notification", flex: 1 },
//   { field: "alerts", headerName: "Alerts", flex: 1 },
//   { field: "monitoringLogs", headerName: "Monitoring Logs", flex: 1 },
//   { field: "backupUpdates", headerName: "Backup Updates", flex: 1 },
// ];

// const Event = () => {
//   return (
//     <div className="event-container">
//       <div className="data-grid">
//         <DataGrid
//           rows={eventData}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           autoHeight
//         />
//       </div>
//     </div>
//   );
// };

// export default Event;












































import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid from Material UI
import { Backup, Notifications, Warning, History, Update } from "@mui/icons-material"; // Import icons
import './events.css'; // Import the CSS file

const eventData = {
  Data_Recovery: [
    { id: 1, name: "Data Recover", value: "Yes" },
    { id: 2, name: "Data Recover", value: "No" },
  ],
  Notification: [
    { id: 1, name: "Notification Status", value: "Enabled" },
    { id: 2, name: "Notification Status", value: "Disabled" },
  ],
  Alerts: [
    { id: 1, name: "Total Alerts", value: "5" },
    { id: 2, name: "Total Alerts", value: "0" },
  ],
  Monitoring_Logs: [
    { id: 1, name: "Monitoring Logs Status", value: "Active" },
    { id: 2, name: "Monitoring Logs Status", value: "Inactive" },
  ],
  Backup_Updates: [
    { id: 1, name: "Backup Updates Frequency", value: "Daily" },
    { id: 2, name: "Backup Updates Frequency", value: "Weekly" },
  ],
};

const Event = () => {
  const [selectedData, setSelectedData] = useState(null);

  // Function to handle icon click and display the relevant table data
  const handleIconClick = (key) => {
    setSelectedData(eventData[key]);
  };

  // Define columns for the DataGrid table
  const columns = [
    { field: "name", headerName: "Event Detail", flex: 1 },
    { field: "value", headerName: "Description", flex: 1 },
  ];

  return (
    <div className="event-container">
      <div className="icon-grid">
        {/* Data Recovery Card */}
        <div className="event-card" onClick={() => handleIconClick("Data_Recovery")}>
          <div className="icon-container">
            <Backup className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Data Recovery</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Notification Card */}
        <div className="event-card" onClick={() => handleIconClick("Notification")}>
          <div className="icon-container">
            <Notifications className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Notification</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Alerts Card */}
        <div className="event-card" onClick={() => handleIconClick("Alerts")}>
          <div className="icon-container">
            <Warning className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Alerts</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Monitoring Logs Card */}
        <div className="event-card" onClick={() => handleIconClick("Monitoring_Logs")}>
          <div className="icon-container">
            <History className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Monitoring Logs</h3>
            <p className="card-text">Click to view details</p>
          </div>
        </div>

        {/* Backup Updates Card */}
        <div className="event-card" onClick={() => handleIconClick("Backup_Updates")}>
          <div className="icon-container">
            <Update className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Backup Updates</h3>
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

export default Event;
