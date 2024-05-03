import React from 'react';
// import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      {/* <Navbar /> */}
      <div className="homeContainer">
        Home Container
      </div>
    </div>
  )
}

export default Home