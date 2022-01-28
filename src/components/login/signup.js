import React, { useState } from 'react';
import Validation from './validation';

import "./login.css"
const SignUp = ({handleChanges}) => {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  })

  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErros(Validation(values));
  };


  return (
    <div className='lcontainer'>
      <div className='lapp-wrapper'>
        <div>
          <h2 className='ltitle'>SignUp</h2>
        </div>
        <form className='lform-wrapper'>
          <div className='lname'>
            <label className='llabel'>Full Name</label>
            <input className='linput' type="text" name="fullname" required value={values.fullname} onChange={handleChange} />
          </div>
          {errors.fullname && <p className='lerror'>{errors.fullname}</p>}
          <div className='lemail'>
            <label className='llabel'>Email</label>
            <input className='linput' type="email" name='email' required value={values.email} onChange={handleChange} />
          </div>
          {errors.email && <p className='lerror'>{errors.email}</p>}

          <div className='lphone'>
            <label className='llabel'>Phone No</label>
            <input className='linput' type="text" name='phone' required value={values.phone} onChange={handleChange} />
          </div>
          {errors.phone && <p className='lerror'>{errors.phone}</p>}

          <div className='lpassword'>
            <label className='llabel'>Password</label>
            <input className='linput' type="password" name='password' required value={values.password} onChange={handleChange} />
          </div>
          {errors.password && <p className='lerror'>{errors.password}</p>}

          <div>
            <button className='lsubmit' onClick={handleFormSubmit}>Register</button>
          </div>
        </form>
        <div className='Sign-up'>
          <span>Already have an account</span>
            <a href="#" onClick={()=>handleChanges("event",0)} className='sign'> Login</a>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
