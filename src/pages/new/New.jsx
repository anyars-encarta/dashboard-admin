import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './new.scss';

const New = ({ inputs, title }) => {
  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>
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
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default New;