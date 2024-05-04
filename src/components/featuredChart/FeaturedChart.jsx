import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './featuredChart.scss';

const FeaturedChart = () => {
  return (
    <div className='featuredChart'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>

      <div className="bottom">
        <div className="featuredDetail">
          
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart