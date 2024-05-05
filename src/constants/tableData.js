export const dashboardRows = [
    { id: 1143155, product: 'Samsung Galaxy A20', img: '/images/samsung_galaxy_a20.jpg', customer: 'John Smith', date: '1 March', amount: 785, method: 'Cash on Delivery', status: 'Approved', },
    { id: 2235235, product: 'Oraimo Necklace', img: '/images/oraimo_necklace.jpg', customer: 'Michael Doe', date: '1 March', amount: 900, method: 'Online Payment', status: 'Pending', },
    { id: 2342353, product: 'Boom Headset', img: '/images/boom_headset.jpg', customer: 'John Smith', date: '1 March', amount: 35, method: 'Cash on Delivery', status: 'Pending', },
    { id: 2357741, product: 'NanoStation M5', img: '/images/nano_station_m5.jpg', customer: 'Jane Smith', date: '1 March', amount: 920, method: 'Online', status: 'Approved', },
    { id: 2342355, product: 'Lapto Hard Drive', img: '/images/laptop_hard_drive.jpg', customer: 'Harold Carol', date: '1 March', amount: 2000, method: 'Online', status: 'Pending', },
];

export const userRows = [
    { id: 1, username: 'Snow', img: '/images/profile.jpg', email: 'snow@something.com', status: 'active', age: 35 },
    { id: 2, username: 'Jamie Lannister', img: '/images/profile.jpg', email: 'jamie@something.com', status: 'passive', age: 42 },
    { id: 3, username: 'Lannister', img: '/images/profile.jpg', email: 'lannister@something.com', status: 'pending', age: 65 },
    { id: 4, username: 'Stark', img: '/images/profile.jpg', email: 'stark@something.com', status: 'active', age: 16 },
    { id: 5, username: 'Targaryen', img: '/images/profile.jpg', email: 'targaryen@something.com', status: 'passive', age: 22 },
    { id: 6, username: 'Melisandre', img: '/images/profile.jpg', email: 'melisandre@something.com', status: 'active', age: 15 },
    { id: 7, username: 'Clifford', img: '/images/profile.jpg', email: 'clifford@something.com', status: 'passive', age: 65 },
    { id: 8, username: 'Frances', img: '/images/profile.jpg', email: 'frances@something.com', status: 'active', age: 36 },
    { id: 9, username: 'Barton', img: '/images/profile.jpg', email: 'barton@something.com', status: 'pending', age: 65 },
    { id: 10, username: 'Roxie', img: '/images/profile.jpg', email: 'roxie@something.com', status: 'active', age: 65 },
];

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username', headerName: 'User Name', width: 230, renderCell: (params) => {
            return (
                <div className='cellWithImage'>
                    <img src={params.row.img} alt='' className='cellImage' />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', type: 'number', width: 100, },
    { field: 'status', headerName: 'Status', width: 160, renderCell: (params) => {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }},
];