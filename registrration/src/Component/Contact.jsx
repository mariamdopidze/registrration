import "./contact.css";
import React, { useState } from 'react';


function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       console.log(formData);
      };

    return (
        <div className="contact-box">
            
        <h1>Contact</h1>

       
        <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
     
      <label>
        Name
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" />
      </label>
      <br />
      </div>   
      
      <div className="input-box">
      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
      </label>
      <br />
      </div> 
     
      <div className="input-box">
      <label>
       Message
        <input type="message" value={formData.message} onChange={handleChange} placeholder="message" />
      </label>
      <br />
      </div>
      <button type="text" className="click">send</button>
      </form>
     
    
    

  </div>
            

    )
}

export default Contact;