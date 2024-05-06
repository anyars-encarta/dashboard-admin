import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { dashboardRows } from '../../constants/tableData';
import './table.scss';
import { Link } from 'react-router-dom';

const rows = dashboardRows;

const DashboardTable = () => {
    return (
        <TableContainer component={Paper} className='tableContainer'>
            <div className="datatableTitle">
                Add New Product
                <Link to="/products/new" className='link'>
                    Add New
                </Link>
            </div>
            <Table sx={{ maxWidth: 1100 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DashboardTable