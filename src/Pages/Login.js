import React, { useState, useEffect } from 'react'
import "./login.css"
import SignOutStack from './SignOutStack'
import Contact from './Contact'
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {

    setEmail(localStorage.getItem("uemail"))
    setPass(localStorage.getItem("upass"))
  }, [])

  return (
    <div id='login' className='login'>
      {
        email === "vicky.kumar2019@gift.edu.in" && pass === "dhiman@99" ? <Contact/> : <SignOutStack />
      }

    
    </div>
  )
}

export default Login