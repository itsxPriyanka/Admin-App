import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import WaterIcon from '@mui/icons-material/Water';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LayersIcon from '@mui/icons-material/Layers';
import BrushIcon from '@mui/icons-material/Brush';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './serviceprovider.css';

const ServiceProviderStats = () => {
  const [selectedData, setSelectedData] = useState(null); // State to hold selected user data

  // Sample data for each service provider
  const serviceProviderData = {
    Users: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', currentlyProjects: 1, finishedProjects: 2, totalProjects: 3 },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', currentlyProjects: 0, finishedProjects: 1, totalProjects: 1 },
    ],
    Architect: [
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', currentlyProjects: 3, finishedProjects: 2, totalProjects: 5 },
    ],
    'Structural Engineer': [
      { id: 4, name: 'Mike Wilson', email: 'mike.wilson@example.com', currentlyProjects: 1, finishedProjects: 1, totalProjects: 2 },
      { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', currentlyProjects: 2, finishedProjects: 2, totalProjects: 4 },
    ],
    'Site Engineer': [
      { id: 6, name: 'David Brown', email: 'david.brown@example.com', currentlyProjects: 1, finishedProjects: 2, totalProjects: 3 },
    ],
    Mason: [
      { id: 7, name: 'Sophia Miller', email: 'sophia.miller@example.com', currentlyProjects: 1, finishedProjects: 1, totalProjects: 2 },
    ],
    Plumber: [
      { id: 8, name: 'Liam Johnson', email: 'liam.johnson@example.com', currentlyProjects: 3, finishedProjects: 2, totalProjects: 5 },
    ],
    Fabricator: [
      { id: 9, name: 'Olivia Davis', email: 'olivia.davis@example.com', currentlyProjects: 0, finishedProjects: 1, totalProjects: 1 },
    ],
    Electrician: [
      { id: 10, name: 'James Martinez', email: 'james.martinez@example.com', currentlyProjects: 2, finishedProjects: 2, totalProjects: 4 },
    ],
    'Tile Layers': [
      { id: 11, name: 'Charlotte Garcia', email: 'charlotte.garcia@example.com', currentlyProjects: 1, finishedProjects: 2, totalProjects: 3 },
    ],
    Painter: [
      { id: 12, name: 'Elijah Rodriguez', email: 'elijah.rodriguez@example.com', currentlyProjects: 1, finishedProjects: 1, totalProjects: 2 },
    ],
    Carpenter: [
      { id: 13, name: 'Ava Hernandez', email: 'ava.hernandez@example.com', currentlyProjects: 3, finishedProjects: 1, totalProjects: 4 },
    ],
    Vendors: [
      { id: 14, name: 'Isabella Wilson', email: 'isabella.wilson@example.com', currentlyProjects: 1, finishedProjects: 2, totalProjects: 3 },
    ],
  };

  const data = [
    { icon: <AccountBoxIcon className="provider-icon" />, title: 'Users', key: 'Users' },
    { icon: <ArchitectureIcon className="provider-icon" />, title: 'Architect', key: 'Architect' },
    { icon: <EngineeringIcon className="provider-icon" />, title: 'Structural Engineer', key: 'Structural Engineer' },
    { icon: <BuildIcon className="provider-icon" />, title: 'Site Engineer', key: 'Site Engineer' },
    { icon: <ConstructionIcon className="provider-icon" />, title: 'Mason', key: 'Mason' },
    { icon: <WaterIcon className="provider-icon" />, title: 'Plumber', key: 'Plumber' },
    { icon: <BuildCircleIcon className="provider-icon" />, title: 'Fabricator', key: 'Fabricator' },
    { icon: <ElectricBoltIcon className="provider-icon" />, title: 'Electrician', key: 'Electrician' },
    { icon: <LayersIcon className="provider-icon" />, title: 'Tile Layers', key: 'Tile Layers' },
    { icon: <BrushIcon className="provider-icon" />, title: 'Painter', key: 'Painter' },
    { icon: <BuildIcon className="provider-icon" />, title: 'Carpenter', key: 'Carpenter' },
    { icon: <StorefrontIcon className="provider-icon" />, title: 'Vendors', key: 'Vendors' },
  ];

  const handleIconClick = (key) => {
    setSelectedData(serviceProviderData[key]); // Set the selected data based on the clicked icon
  };

  // Columns for DataGrid
  const columns = [
    { field: 'name', headerName: 'SP Name', flex: 1 },
    { field: 'email', headerName: 'SP Email', flex: 1 },
    { field: 'currentlyProjects', headerName: 'Currently Projects', type: 'number', flex: 1 },
    { field: 'finishedProjects', headerName: 'Finished Projects', type: 'number', flex: 1 },
    { field: 'totalProjects', headerName: 'Total Projects', type: 'number', flex: 1 },
  ];

  return (
    <div className="container">
      <div className="icon-grid">
        {data.map((item, index) => (
          <div key={index} className="card" onClick={() => handleIconClick(item.key)}>
            <div className="icon-container">{item.icon}</div>
            <h6 className="title">{item.title}</h6>
          </div>
        ))}
      </div>

      {selectedData && ( // Conditionally render the DataGrid if there's selected data
        <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
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

export default ServiceProviderStats;
