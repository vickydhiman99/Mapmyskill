import React, { useState, useEffect } from 'react'
import "./user.css"
import { TextField, Button } from '@mui/material';
import instance from "../config/axios.config"

// --------------------------------material icons start---------------------//
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// --------------------------------material icons end-----------------------//

const User = () => {

  const [display, setDisplay] = useState(false);
  const [segment, setSegment] = useState([])

  function getSegment() {
    instance.get('get/subject')
      .then(response => {
        setSegment(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => {
        console.error('segment getApi failled!', error);
      });
  }

  useEffect(() => {
    getSegment()
  }, [])

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
            <th className='text-center'>Segment Name</th>
            <th className='text-center'>Action</th>
          </tr>
          {
            segment.map((res) => (
              <tr key={res.subjectid}>
                <td className='text-center'><input type="checkbox" />{res.subjectid}</td>
                <td className='text-center'>{res.name}</td>
                <td className='text-center'><EditIcon className='text-primary mx-4 edit' /> <DeleteIcon className='text-danger delete' /></td>
              </tr>
            ))
          }


        </table>
      </div>
    </div>
  )
}

export default User;
