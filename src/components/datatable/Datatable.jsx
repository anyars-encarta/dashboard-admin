import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../constants/tableData';
import './datatable.scss';

const Datatable = () => {
    return (
        <div className='datatable'>
            {/* <div style={{ height: 400, width: '100%' }}> */}
            <DataGrid
                rows={userRows}
                columns={userColumns}
                // disableRowSelectionOnClick
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