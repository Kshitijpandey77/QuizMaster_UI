import React, { useState } from 'react';
import './FormStyles.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    // localStorage.setItem('email', email);
    // localStorage.setItem('password', password); 

    // setEmail('');
    // setPassword('');
    const register = {email, password}

        console.log(register);

        loginAPICall(register).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    console.log('User data saved:', { email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
