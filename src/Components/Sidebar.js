import React from 'react'
import "./sidebar.css"
// -----------------------material ui icons start-----------------------//
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SegmentIcon from '@mui/icons-material/Segment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// -----------------------material ui icons end-----------------------//
const data = [
    {id:1, path:"/", icon:<DashboardIcon/>, con:"Dashboard"},
    {id:2, path:"/contact", icon:<ContactMailIcon/>, con:"Contact"},
    {id:3, path:"/location", icon:<FmdGoodIcon/>, con:"Location"},
    {id:4, path:"/segment", icon:<SegmentIcon/>, con:"Segment"},
    {id:5, path:"/notification", icon:<NotificationsActiveIcon/>, con:"Notification"}
]
const Sidebar = () => {
  return (
    <div id='sidebar' className='sidebar'>
    <h2>Map MySkill</h2>
       <ul>
       {
        data.map((res)=>(
            <li key={res.id}>{res.icon}  {res.con}</li>
        ))
       }

       </ul>
    </div>
  )
}

export default Sidebar