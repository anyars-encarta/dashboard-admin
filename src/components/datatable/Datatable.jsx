import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../constants/tableData';
import './datatable.scss';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 200, renderCell: () => {
            return (
                <div className='cellAction'>
                    <Link to="/users/:userId" className='link'>
                        <span className="viewButton">View</span>
                    </Link>
                    <div>
                        <span className="deleteButton">Delete</span>
                    </div>
                </div>
            )
        }
    }];

    return (
        <div className='datatable'>
            {/* <div style={{ height: 400, width: '100%' }}> */}
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            {/* </div> */}
        </div>
    )
}

export default Datatable