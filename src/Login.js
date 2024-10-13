import React from 'react';
import './FormStyles.css'; // Importing a CSS file for form styles

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required className="form-input" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required className="form-input" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

