import React from 'react';
import "./login.css"
const Login = () => {
  return (
  <div className='lcontainer'>
    <div className='lapp-wrapper'>
      <div>
        <h2 className='ltitle'>Login</h2>
      </div>
      <form className='lform-wrapper'>
        <div className='lemail'>
          <label className='llabel'>Email</label>
          <input className='linput' type="email" name='email' required />
        </div>
        <div className='lpassword'>
          <label className='llabel'>Password</label>
          <input className='linput' type="password" name='password' required />
        </div>
        <div>
          <button className='lsubmit' >Login</button>
        </div>
      </form>
        <div className='Sign-up'>
          <span>Don't have account</span>
          <a href = "#" className='sign'> Sign Up</a>
        </div>
    </div>
  </div>
  );
};

export default Login;
