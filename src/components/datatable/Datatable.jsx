import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../constants/tableData';
import './datatable.scss';
import { Link } from 'react-router-dom';

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to={"/users/" + params.row.id} className='link'>
                        <span className="viewButton">View</span>
                    </Link>
                    <div>
                        <span className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</span>
                    </div>
                </div>
            )
        }
    }];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className='link'>
                    Add New
                </Link>
            </div>
            {/* <div style={{ height: 400, width: '100%' }}> */}
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
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