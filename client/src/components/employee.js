import React from 'react';
import { 
  Person as PersonIcon, 
  Notifications as NotificationsIcon, 
  CalendarToday as CalendarTodayIcon, 
  Update as UpdateIcon 
} from '@mui/icons-material';
import './employee.css';

const Employees = () => {
  return (
    <div className="employees-container">
      <div className="card-container">
        
        {/* Employees Card */}
        <div className="card">
          <div className="icon-container">
            <PersonIcon sx={{ color: 'black' }} className="icon" />
          </div>
          <div className="content">
            <h3 className="title">Employees</h3>
            <p className="description">
              - John Doe - Software Engineer<br />
              - Jane Smith - UI/UX Designer
            </p>
          </div>
        </div>

        {/* Notification Card */}
        <div className="card">
          <div className="icon-container">
            <NotificationsIcon sx={{ color: 'black' }} className="icon" />
          </div>
          <div className="content">
            <h3 className="title">Notifications</h3>
            <p className="description">
              - New message from HR<br />
              - Team meeting scheduled
            </p>
          </div>
        </div>

        {/* Meetings Scheduled Card */}
        <div className="card">
          <div className="icon-container">
            <CalendarTodayIcon sx={{ color: 'black' }} className="icon" />
          </div>
          <div className="content">
            <h3 className="title">Meetings Scheduled</h3>
            <p className="description">
              - Team Sync - 12:00 PM, Oct 5<br />
              - Client Meeting - 2:00 PM, Oct 7
            </p>
          </div>
        </div>

        {/* Calendar Card */}
        <div className="card">
          <div className="icon-container">
            <CalendarTodayIcon sx={{ color: 'black' }} className="icon" />
          </div>
          <div className="content">
            <h3 className="title">Calendar</h3>
            <p className="description">
              Upcoming events and meetings are scheduled here.
            </p>
          </div>
        </div>

        {/* Release Update Card */}
        <div className="card">
          <div className="icon-container">
            <UpdateIcon sx={{ color: 'black' }} className="icon" />
          </div>
          <div className="content">
            <h3 className="title">Release Update</h3>
            <p className="description">
              App version 2.0.1 scheduled for release on Oct 15.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Employees;
