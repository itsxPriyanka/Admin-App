import React from 'react';
import './userdata.css';
import { MdPerson, MdBusiness, MdCloud, MdAccessTime, MdStorage } from 'react-icons/md';

// Reusable DataBox component
const DataBox = ({ icon, title, description }) => {
  return (
    <div className="data-box">
      <div className="icon-container">
        {icon}
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const UserData = () => {
  // Example static data; this could be fetched dynamically
  const data = [
    {
      icon: <MdPerson size={24} />,
      title: 'Users',
      description: '50 active users, 10 inactive users, 20 users with plan upgrades',
    },
    {
      icon: <MdBusiness size={24} />,
      title: 'Plan Changes',
      description: '15 users upgraded, 5 users downgraded their plans this month.',
    },
    {
      icon: <MdPerson size={24} />,
      title: 'Inactive Users',
      description: '12 users have been inactive for over 30 days.',
    },
    {
      icon: <MdAccessTime size={24} />,
      title: 'Plans Expiring',
      description: "4 users' plans are expiring within the next 7 days.",
    },
    {
      icon: <MdPerson size={24} />,
      title: 'New Signups',
      description: '25 new users signed up this week.',
    },
    {
      icon: <MdStorage size={24} />,
      title: 'Storage',
      description: 'Total storage used: 2.3 GB out of 10 GB.',
    },
    {
      icon: <MdCloud size={24} />,
      title: 'Project Types',
      description: '50% of projects are related to design, 30% to development, 20% to marketing.',
    },
    {
      icon: <MdAccessTime size={24} />,
      title: 'Timestamp Data',
      description: 'Last activity: 10 minutes ago. Most active period: 9 AM - 12 PM.',
    },
  ];

  return (
    <div className="user-data-container">
      {data.map((item, index) => (
        <DataBox 
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default UserData;
