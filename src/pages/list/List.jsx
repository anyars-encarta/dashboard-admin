import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import './list.scss';
import Datatable from '../../components/datatable/Datatable';
import DashboardTable from '../../components/table/Table'

const List = ({ type }) => {
  return (
    <div className='list'>
      <Sidebar />

      <div className="listContainer">
        <Navbar />

        {type === 'user' ? <Datatable /> : <DashboardTable />}
      </div>
    </div>
  )
}

export default List