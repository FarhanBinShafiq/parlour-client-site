import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Sharedpages/Navbar/Navbar'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile font-mono">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <Outlet></Outlet>
          <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-90 uppercase bg-info text-base-content">

            <li><Link to='/dashboard'>My Appointments</Link></li>



            <li><Link to='/dashboard/addservices'>Add a Service</Link></li>
            <li><Link to='/dashboard/manageservices'>Manage Service</Link></li>
            <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
            <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>



          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;