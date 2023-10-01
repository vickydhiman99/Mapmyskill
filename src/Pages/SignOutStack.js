import React, {useState} from 'react'
import "./signout.css"
const SignOutStack = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  console.log("email", email)
  console.log("password", pass)

  function login() {
    localStorage.setItem("uemail", email)
    localStorage.setItem("upass", pass)
  }

  return (
    <div id="signoutstack" className='container form-group signoutstack'>
      <input className='form-control my-1' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter email' />
      <input className='form-control my-1' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='enter password' />
      <button className='btn btn-info my-1' onClick={login}>Login</button>
    </div>
  )
}

export default SignOutStack