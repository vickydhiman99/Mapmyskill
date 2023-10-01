import React from 'react'
import "./home.css"
import Dashboard from '../Components/Dashboard'
import Sidebar from '../Components/Sidebar'
const Home = () => {
  return (
    <div id='home' className='home'>
      <Sidebar />
      <Dashboard/>
    </div>
  )
}

export default Home