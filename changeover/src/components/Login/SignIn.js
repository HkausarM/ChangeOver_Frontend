// components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', {
        email,
        password
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignIn;
