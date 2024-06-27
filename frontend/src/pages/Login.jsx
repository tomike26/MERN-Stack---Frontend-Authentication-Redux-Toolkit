import React from 'react'
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";


const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const { email, password} = formData;

  const onChange = (e) => {
   setFormData((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
   }))
  }


  const onSubmit = (e) =>{
    e.preventDefault()
  }




  return (
    <div className="container">
    <section className="heading">
        <h1>
          <FaSignInAlt />
          Log in 
        </h1>
        <p>Log in and start setting goals</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
