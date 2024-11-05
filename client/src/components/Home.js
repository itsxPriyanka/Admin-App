

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"; // New icon for Service Providers
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded"; // New icon for Services
import WorkRoundedIcon from "@mui/icons-material/WorkRounded"; // Icon for Employees

import UserData from './userdata';  // Import UserData.js
import "./Home.css";
import UserDetails from "./userdetails";
import S3Profiles from "./s3storage";
import S3PieChart from "./S3PieChart";
import Invoices from "./invoices";
import Calendar from "./calendar";
import Dashboard from "./dashboard";
import ServiceProviderStats from "./serviceprovider";  // Import the Service Provider component
import Service from "./service";  // Import the new Service component
import EmployeesPage from "./employee";  // Import EmployeesPage component
import Transactions from "./transaction";  // Import Transactions component
import ProjectDetailsPage from "./projectdetails";
import RequestData from "./requests"; // Import the RequestData component
import Event from "./events";



// Placeholder Components
const LogoutPage = () => <div>This is the Logout page.</div>;
const TimelineChartPage = () => <div>This is the Timeline Chart page.</div>;
const CurrentWalletPage = () => <div>This is the Current Wallet page.</div>;
const SavingsWalletPage = () => <div>This is the Savings Wallet page.</div>;
const AccountSettingsPage = () => <div>This is the Account Settings page.</div>;
const PrivacySettingsPage = () => <div>This is the Privacy Settings page.</div>;
const ServicesPage = () => <div>This is the Services page.</div>;
const UsersDataPage = () => <UserData />;  // Render the imported UserData component
const SelectedSPPage = () => <div>This is the Selected Service Providers page.</div>;
const RequestsSentPage = () => <RequestData />; // Render the imported RequestData component
//const Event = () => <event />;

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  // const handleMenuItemClick = (menu) => {
  //   setActiveMenu(menu);
  // };



  const handleMenuItemClick = (menu) => {
    setActiveMenu(menu);
    console.log("Active menu set to:", menu); // Debugging line
  };


  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="home-container">
      <div className={`menu-container ${collapsed ? 'collapsed' : ''}`}>
        <div className="hamburger-container">
          <FaBars className="hamburger-icon" onClick={toggleSidebar} />
          {!collapsed && <h2 className="admin-heading">Admin</h2>}
        </div>
        <div className="menu-items">
          <Menu iconShape="circle">
            <MenuItem icon={<GridViewRoundedIcon />} onClick={() => handleMenuItemClick('dashboard')}> Dashboard </MenuItem>
            <MenuItem icon={<ReceiptRoundedIcon />} onClick={() => handleMenuItemClick('invoices')}> Invoices </MenuItem>
            <MenuItem icon={<CalendarMonthRoundedIcon />} onClick={() => handleMenuItemClick('calendar')}> Calendar </MenuItem>
            <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
              <MenuItem icon={<TimelineRoundedIcon />} onClick={() => handleMenuItemClick('timelineChart')}> Timeline Chart </MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />} onClick={() => handleMenuItemClick('bubbleChart')}> Bubble Chart </MenuItem>
            </SubMenu>
            <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
              <MenuItem icon={<AccountBalanceRoundedIcon />} onClick={() => handleMenuItemClick('currentWallet')}> Current Wallet </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />} onClick={() => handleMenuItemClick('savingsWallet')}> Savings Wallet </MenuItem>
            </SubMenu>
            <MenuItem icon={<MonetizationOnRoundedIcon />} onClick={() => handleMenuItemClick('transactions')}> Transactions </MenuItem>
            <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />} onClick={() => handleMenuItemClick('accountSettings')}> Account </MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />} onClick={() => handleMenuItemClick('privacySettings')}> Privacy </MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />} onClick={() => handleMenuItemClick('event')}> Events</MenuItem>
            </SubMenu>
            <SubMenu label="Users" icon={<PeopleRoundedIcon />}>
              <MenuItem icon={<CloudQueueRoundedIcon />} onClick={() => handleMenuItemClick('s3')}> S3 </MenuItem>
              <MenuItem icon={<PersonRoundedIcon />} onClick={() => handleMenuItemClick('appUser')}> App User </MenuItem>
              <MenuItem icon={<PersonRoundedIcon />} onClick={() => handleMenuItemClick('usersData')}> Users Data </MenuItem> 
            </SubMenu>
            <MenuItem icon={<GroupAddRoundedIcon />} onClick={() => handleMenuItemClick('serviceProviders')}> Service Providers </MenuItem>
            <MenuItem icon={<LocalOfferRoundedIcon />} onClick={() => handleMenuItemClick('services')}> AWS Services </MenuItem>
            <MenuItem icon={<WorkRoundedIcon />} onClick={() => handleMenuItemClick('employees')}> Employees </MenuItem>
            <SubMenu label="Projects" icon={<WorkRoundedIcon />}>
              <MenuItem icon={<GridViewRoundedIcon />} onClick={() => handleMenuItemClick('projectDetails')}> Project Details </MenuItem>
              <MenuItem icon={<GroupAddRoundedIcon />} onClick={() => handleMenuItemClick('selectedSP')}> Selected SP </MenuItem>
              <MenuItem icon={<PersonRoundedIcon />} onClick={() => handleMenuItemClick('requestsSent')}> Requests Sent </MenuItem>
            </SubMenu>
            <MenuItem icon={<LogoutRoundedIcon />} onClick={() => handleMenuItemClick('logout')}> Logout </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="content">
        {activeMenu === 'dashboard' && <Dashboard />}
        {activeMenu === 'bubbleChart' && <S3PieChart />}
        {activeMenu === 's3' && <S3Profiles />}
        {activeMenu === 'appUser' && <UserDetails />}
        {activeMenu === 'invoices' && <Invoices />}
        {activeMenu === 'calendar' && <Calendar />}
        {activeMenu === 'timelineChart' && <TimelineChartPage />}
        {activeMenu === 'currentWallet' && <CurrentWalletPage />}
        {activeMenu === 'savingsWallet' && <SavingsWalletPage />}
        {activeMenu === 'transactions' && <Transactions />}
        {activeMenu === 'accountSettings' && <AccountSettingsPage />}
        {activeMenu === 'privacySettings' && <PrivacySettingsPage />}
        {activeMenu === 'serviceProviders' && <ServiceProviderStats />}
        {activeMenu === 'services' && <Service />}
        {activeMenu === 'employees' && <EmployeesPage />}
        {activeMenu === 'logout' && <LogoutPage />}
        {activeMenu === 'usersData' && <UsersDataPage />}
        {activeMenu === 'projectDetails' && <ProjectDetailsPage />}
        {activeMenu === 'selectedSP' && <SelectedSPPage />}
        {activeMenu === 'requestsSent' && <RequestsSentPage />}
        {activeMenu === 'event' && <Event />}
      </div>
    </div>
  );
};

export default Home;
