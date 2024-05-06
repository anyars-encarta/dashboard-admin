import React, { useContext } from 'react';
import './navbar.scss';
import { 
  LanguageOutlined, 
  SearchOutlined,
  DarkModeOutlined, 
  FullscreenExitOutlined, 
  NotificationsNoneOutlined, 
  ChatBubbleOutlineOutlined, 
  ListOutlined
} from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlined />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon' />
            English
          </div>

          <div className="item">
            <DarkModeOutlined className='icon' onClick={() => dispatch({ type: "TOGGLE"})}/>
          </div>

          <div className="item">
            <FullscreenExitOutlined className='icon' />
          </div>

          <div className="item">
            <NotificationsNoneOutlined className='icon' />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlined className='icon' />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListOutlined className='icon' />
          </div>

          <div className="item">
            <img src="/images/profile.jpg" alt="" className="avatar" />
          </div>

          <div className="item">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar