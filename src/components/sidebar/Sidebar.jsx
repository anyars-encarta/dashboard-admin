import React from 'react';
import { 
  Dashboard, 
  PersonOutline,
  LocalShipping,
  CreditCard,
  Store,
  InsertChart,
  SettingsApplications,
  ExitToApp,
  NotificationsNone,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
  AccountCircleOutlined
} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" className='link'>
          <span className="logo">Encarta Admin</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li className='active'>
            <Link to="/" className='link'>
              <Dashboard className='icon' />
              <span>Dashboard</span>
            </Link>

          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users" className='link'>
              <PersonOutline className='icon' />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className='link'>
              <Store className='icon' />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCard className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className='icon' />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <InsertChart className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className='icon' />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className='icon' />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  )
}

export default Sidebar