import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { userInputs, productInputs } from '../../constants/formSource';
import './new.scss';

const New = ({ inputs, title, type }) => {
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
                <input id='file' type="file" style={{ display: 'none' }} />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label for="username">{input.label}</label>
                  <input id='username' type={input.type} placeholder={input.placeholder} />
                </div>
              ))}


              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default New;