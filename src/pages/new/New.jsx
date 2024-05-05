import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './new.scss';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New User</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label for="file">Image: <DriveFolderUploadOutlined className='icon' /></label>
                <input id='file' type="file" style={{ display: 'none'}}/>
              </div>
              <div className="formInput">
                <label for="username">Username</label>
                <input id='username' type="text" placeholder='username' />
              </div>
              <div className="formInput">
                <label for="name">Name and Surname</label>
                <input id='name' type="text" placeholder='Name and Surname' />
              </div>
              <div className="formInput">
                <label for="email">Email</label>
                <input id='email' type="text" placeholder='anything@something.com' />
              </div>
              <div className="formInput">
                <label for="phone">Phone</label>
                <input id='phone' type="text" placeholder='+1 234 567 890' />
              </div>
              <div className="formInput">
                <label for="password">Passport</label>
                <input id='password' type="password" />
              </div>
              <div className="formInput">
                <label for="address">Address</label>
                <input id='address' type="text" placeholder='Address' />
              </div>
              <div className="formInput">
                <label for="country">Country</label>
                <input id='country' type="text" placeholder='Country' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default New;