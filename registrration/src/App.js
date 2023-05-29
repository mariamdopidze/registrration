
import React, { useState } from 'react';
import LoginPage from  "./Component/LoginPage";
import LogoutPage from './Component/LogoutPage';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogoutPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin}  />
      )}
      
    </div>
  );
};

export default App;


