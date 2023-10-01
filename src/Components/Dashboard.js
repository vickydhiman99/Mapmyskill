import React from 'react'
import "./dashboard.css"
import Header from './Header'
import Outlet from '../Components/Outlet'
const Dashboard = () => {
  return (
    <div id='dashboard' className='dashboard'>
      <Header />
      <Outlet/>
    </div>
  )
}

export default Dashboard