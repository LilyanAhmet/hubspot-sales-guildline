import React, { useState } from "react";
import {Form} from "react-bootstrap";



const NotizenEmail = () => {

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { email, message } = e.target.elements;
    let details = {
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    
    <form onSubmit={handleSubmit}>

    
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
    <button type="submit">{status}</button>
    </div>

  </form>
     
      
     
     
  );
};

export default NotizenEmail;