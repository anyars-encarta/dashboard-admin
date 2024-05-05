import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import NormalChart from '../../components/normalChart/NormalChart';
import './single.scss';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />

      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/images/profile.jpg" alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane@something.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+233 24 211 9972</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Kumasi | Ghana</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ghana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <NormalChart aspect={3 / 1} title='User Spending ( Last 6 Months )' />
          </div>
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single