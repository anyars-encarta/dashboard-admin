import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDown, KeyboardArrowUpOutlined } from '@mui/icons-material';
import './featuredChart.scss';

const FeaturedChart = () => {
  const summaryAmount = 420

  return (
    <div className='featuredChart'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>

      <div className="bottom">
        <div className="featuredDetail">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>

        <p className="title">Total Sales made today</p>
        <p className="amount">${summaryAmount.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2 })}</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart