// src/Auth.js
import React, { useState } from 'react';
import { auth } from './firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.error("Error signing up:", error));
  };

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => console.error("Error signing in:", error));
  };

  return (
    <div>
      <h2>Sign Up / Sign In</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
