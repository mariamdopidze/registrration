
import React from 'react';
import  "./logoutPage.css";


const LogoutPage = ({onLogout })=> {
  const handleLogout = () => {
  
    onLogout();
  };

  return (
    <section>
    <div className="logout-box">
      <div>
      <h3> Mariam </h3>
      <img src="profile.png"alt=""/>
      
     </div>
      <button className="clik"  onClick={handleLogout}>Log Out</button>
    </div>
    </section>
  );
};

export default LogoutPage;
