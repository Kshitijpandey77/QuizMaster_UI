import React from 'react';
import './FormStyles.css'; // Importing a CSS file for form styles

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" required className="form-input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required className="form-input" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required className="form-input" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
