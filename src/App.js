import React, { useState, useEffect } from 'react'
import './App.css';
import Routing from "./Router/Routing"
import SignOutStack from "./Pages/SignOutStack"


function App() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {

    setEmail(localStorage.getItem("uemail"))
    setPass(localStorage.getItem("upass"))
  }, [])

  return (
    <div id='' className=''>

      {
        email === "abc@gmail.com" && pass === "abc@99" ? <Routing /> : <SignOutStack />
      }
    </div>
  );
}

export default App;
