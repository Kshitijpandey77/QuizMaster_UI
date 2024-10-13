import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showLogin ? <Login /> : <Signup />}
        <button onClick={toggleForm}>
          {showLogin ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </header>
    </div>
  );
}

export default App;
