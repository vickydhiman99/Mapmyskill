import React, { useState, } from 'react'
import "./user.css"
import { TextField, Button } from '@mui/material';
// --------------------------------material icons start---------------------//
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// --------------------------------material icons end-----------------------//

const User = () => {

  const [display, setDisplay] = useState(false);

  return (
    <div>
      {
        display ? (
          <div className="form_container">
            <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
            <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
            <Button onClick={() => setDisplay(false)} className='bg-info text-light' variant="outlined">Submit</Button>
          </div>
        ) : (null)
      }


      <div id='user' className='container my-5'>
        <button onClick={() => setDisplay(!display)} className='btncls'>Add User</button>
        <table className='table table-bordered table-striped'>
          <tr className='text-light  bg-info'>
            <th className='text-center'><input type="checkbox" />ID</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Password</th>
            <th className='text-center'>Action</th>
          </tr>
          <tr>
            <td className='text-center'><input type="checkbox" />1</td>
            <td className='text-center'>Vicky kumar</td>
            <td className='text-center'>abc@gmail.com</td>
            <td className='text-center'>abc@99</td>
            <td className='text-center'><EditIcon className='text-primary mx-4 edit' /> <DeleteIcon className='text-danger delete' /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default User;
