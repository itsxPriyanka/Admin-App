// import React from 'react';
// import './userdata.css';
// import { MdPerson, MdBusiness, MdCloud, MdAccessTime, MdStorage } from 'react-icons/md';

// // Reusable DataBox component
// const DataBox = ({ icon, title, description }) => {
//   return (
//     <div className="data-box">
//       <div className="icon-container">
//         {icon}
//       </div>
//       <div className="content-container">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// const UserData = () => {
//   // Example static data; this could be fetched dynamically
//   const data = [
//     {
//       icon: <MdPerson size={24} />,
//       title: 'Users',
//       description: '50 active users, 10 inactive users, 20 users with plan upgrades',
//     },
//     {
//       icon: <MdBusiness size={24} />,
//       title: 'Plan Changes',
//       description: '15 users upgraded, 5 users downgraded their plans this month.',
//     },
//     {
//       icon: <MdPerson size={24} />,
//       title: 'Inactive Users',
//       description: '12 users have been inactive for over 30 days.',
//     },
//     {
//       icon: <MdAccessTime size={24} />,
//       title: 'Plans Expiring',
//       description: "4 users' plans are expiring within the next 7 days.",
//     },
//     {
//       icon: <MdPerson size={24} />,
//       title: 'New Signups',
//       description: '25 new users signed up this week.',
//     },
//     {
//       icon: <MdStorage size={24} />,
//       title: 'Storage',
//       description: 'Total storage used: 2.3 GB out of 10 GB.',
//     },
//     {
//       icon: <MdCloud size={24} />,
//       title: 'Project Types',
//       description: '50% of projects are related to design, 30% to development, 20% to marketing.',
//     },
//     {
//       icon: <MdAccessTime size={24} />,
//       title: 'Timestamp Data',
//       description: 'Last activity: 10 minutes ago. Most active period: 9 AM - 12 PM.',
//     },
//   ];

//   return (
//     <div className="user-data-container">
//       {data.map((item, index) => (
//         <DataBox 
//           key={index}
//           icon={item.icon}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default UserData;










import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import './userdata.css';

const UserData = () => {
  // Column configuration
  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "planChanges", headerName: "Plan Changes", flex: 1 },
    { field: "inactiveUsers", headerName: "Inactive Users", type: "number", flex: 1 },
    { field: "plansExpiring", headerName: "Plans Expiring", type: "number", flex: 1 },
    { field: "newSignups", headerName: "New Signups", type: "number", flex: 1 },
    { field: "projectTypes", headerName: "Project Types", flex: 1 },
    { field: "timestamp", headerName: "Timestamp", flex: 1 },
  ];

  // Example static data
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', planChanges: 'Upgraded to Premium', inactiveUsers: 2, plansExpiring: 1, newSignups: 5, projectTypes: 'Design, Development', timestamp: 'Last active: 10 minutes ago' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', planChanges: 'No changes this month', inactiveUsers: 1, plansExpiring: 0, newSignups: 3, projectTypes: 'Marketing', timestamp: 'Last active: 1 hour ago' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', planChanges: 'Downgraded to Basic', inactiveUsers: 0, plansExpiring: 2, newSignups: 4, projectTypes: 'Design', timestamp: 'Last active: 2 hours ago' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', planChanges: 'Upgraded to Pro', inactiveUsers: 3, plansExpiring: 1, newSignups: 2, projectTypes: 'Development, Design', timestamp: 'Last active: 3 hours ago' },
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
      <h1>User Data</h1>
      <p>List of users and their profile details</p>
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

export default UserData;
