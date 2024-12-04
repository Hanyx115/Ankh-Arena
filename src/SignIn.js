import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


import './Contanier.css';
function validateForm21( email1, password1) {
  if (!email1.trim()) {
    return "Email is required.";
  }
  if (!/\S+@\S+\.\S+/.test(email1)) {
    return "Invalid email address.";
  }
  if (!password1.trim()) {
    return "Password is required.";
  }
  if (!/^[a-zA-Z0-9!@#$%^&*()_+]{8,}$/.test(password1)) {
    return "Password contains invalid characters.";
  }
  return null; // No errors
}


const SignIn = () => {
  const navigate = useNavigate();

  const [password1, setPassword] = useState('');
  const [email1, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (e) => {
    e.preventDefault(); // Prevent form submission
    const validationError = validateForm21(email1, password1);
    if (validationError) {
      setError(validationError); // Show error message
    } else {
      setError('');
      navigate("/homepage"); // Navigate to Homepage
    }
  };

  return (
    <div className="form-comps cfb">
      <h1>Sign In!</h1>
      <form className="sign-in-form cfb" onSubmit={handleSignin} >
        <label>
          Email:
          <br />
          <input
          placeholder='Enter your Email'
            type="email"
            value={email1}
            id='1'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            placeholder='Enter your Password'
            type="password"
            value={password1}
            id='2'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" >Sign In!</button>
      </form>
    </div>
  );
};

export default SignIn;
