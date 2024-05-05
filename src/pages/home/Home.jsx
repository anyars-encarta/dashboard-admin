import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';
import Widget from '../../components/widget/Widget';
import FeaturedChart from '../../components/featuredChart/FeaturedChart';
import NormalChart from '../../components/normalChart/NormalChart';
import DashboardTable from '../../components/table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>

        <div className="charts">
          <FeaturedChart />
          <NormalChart />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <DashboardTable />
        </div>
      </div>
    </div>
  )
}

export default Home