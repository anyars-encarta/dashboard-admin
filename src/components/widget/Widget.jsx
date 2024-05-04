import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOn';

import './widget.scss';

const Widget = ({ type }) => {
    let data;

    const amount = 2500;
    const diff = 30;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <PersonOutlineIcon
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }}
                    />
                ),
            };
            break;

        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all users',
                icon: (
                    <ShoppingCartOutlinedIcon className='icon'
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)'
                        }}
                    />
                ),
            };
            break;

        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <MonetizationOnOutlinedIcon className='icon'
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)'
                        }}
                    />
                ),
            };
            break;

        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (
                    <AccountBalanceWalletIcon className='icon'
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)'
                        }}
                    />
                ),
            };
            break;

        default:
            break;
    };

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2 })}</span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    30%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget