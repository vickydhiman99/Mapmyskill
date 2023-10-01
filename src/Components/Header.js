import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () => {

    function logout() {
        localStorage.removeItem("uemail")
        localStorage.removeItem("upass")
    }
    
    return (
        <div id='header' className='container-fluid'>
            <div className="row m-0 rcontrol">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link className='text-info font'><span className='text-warning'>Website</span>Logo</Link>
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ul>
                        <li><Link className='text-white btn btn-info' to="/" >Home</Link></li>
                        <li><Link className='text-white btn btn-info' to="/about" >About</Link></li>
                        <li><Link className='text-white btn btn-info' to="/service" >Service</Link></li>
                        <li><Link className='text-white btn btn-info' to="/contact" >Contact</Link></li> 
                    </ul>
                </div>
                <button onClick={logout} className='btn btn-info text-white'>Logout</button>
            </div>
        </div>
    )
}

export default Header



