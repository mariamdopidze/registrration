import React, { useState } from 'react';
import  "./style.css";

const LoginPage = ({ onLogin }) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
    onLogin();
  };

  return (
   <section>
    <div className="from-box">
      <div className="from-value">
        <form action="">
          
      <h2>Login</h2>
       <div className="inputbox">
      <input
        
        type="text"
        
        value={username}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /> 
      </div>
      <div className="inputbox">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      </div>
      <button onClick={handleLogin}>Log In</button>
      </form>
      </div>
    </div>
    </section>
  );
};


export default LoginPage;