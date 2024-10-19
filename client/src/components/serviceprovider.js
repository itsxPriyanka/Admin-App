import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // User
import ArchitectureIcon from '@mui/icons-material/Architecture'; // Architect
import EngineeringIcon from '@mui/icons-material/Engineering'; // Structural Engineer
import BuildIcon from '@mui/icons-material/Build'; // Site Engineer
import ConstructionIcon from '@mui/icons-material/Construction'; // Mason
import WaterIcon from '@mui/icons-material/Water'; // Plumber
import BuildCircleIcon from '@mui/icons-material/BuildCircle'; // Fabricator
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'; // Electrician
import LayersIcon from '@mui/icons-material/Layers'; // Tile Layers (alternative)
import BrushIcon from '@mui/icons-material/Brush'; // Painter
import StorefrontIcon from '@mui/icons-material/Storefront'; // Vendors
import './serviceprovider.css'; // Import the CSS file

const ServiceProviderStats = () => {
  // Updated data with service provider icons
  const data = [
    {
      icon: <AccountBoxIcon className="provider-icon" />,
      title: 'Users',
    },
    {
      icon: <ArchitectureIcon className="provider-icon" />,
      title: 'Architect',
    },
    {
      icon: <EngineeringIcon className="provider-icon" />,
      title: 'Structural Engineer',
    },
    {
      icon: <BuildIcon className="provider-icon" />,
      title: 'Site Engineer',
    },
    {
      icon: <ConstructionIcon className="provider-icon" />,
      title: 'Mason',
    },
    {
      icon: <WaterIcon className="provider-icon" />,
      title: 'Plumber',
    },
    {
      icon: <BuildCircleIcon className="provider-icon" />,
      title: 'Fabricator',
    },
    {
      icon: <ElectricBoltIcon className="provider-icon" />,
      title: 'Electrician',
    },
    {
      icon: <LayersIcon className="provider-icon" />, // Updated icon for Tile Layers
      title: 'Tile Layers',
    },
    {
      icon: <BrushIcon className="provider-icon" />,
      title: 'Painter',
    },
    {
      icon: <BuildIcon className="provider-icon" />, // Using BuildIcon as a generic Carpenter icon
      title: 'Carpenter',
    },
    {
      icon: <StorefrontIcon className="provider-icon" />,
      title: 'Vendors',
    },
  ];

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="icon-container">
            {item.icon}
          </div>
          <div>
            <h6 className="title">{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProviderStats;
