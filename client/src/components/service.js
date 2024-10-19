import React from "react";
import { FaServer, FaDollarSign, FaCloud, FaMailBulk, FaCalendarAlt } from "react-icons/fa"; // Add icons

import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-card">
        <div className="icon-container">
          <FaServer className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">AWS Services</h3>
          <p className="card-text">EC2, S3, Lambda, RDS, etc.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaDollarSign className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Cost of Services</h3>
          <p className="card-text">$1500 / month</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaCloud className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Storage Used</h3>
          <p className="card-text">5TB</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaServer className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Most Used Service</h3>
          <p className="card-text">EC2 (Compute)</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaDollarSign className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Most Costed Service</h3>
          <p className="card-text">EC2 (Compute)</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaMailBulk className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Email Sent</h3>
          <p className="card-text">2500 emails</p>
        </div>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <FaCalendarAlt className="icon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Due Date for Payment</h3>
          <p className="card-text">15th of every month</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
