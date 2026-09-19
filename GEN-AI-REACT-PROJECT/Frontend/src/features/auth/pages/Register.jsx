import React from "react";
import {useNavigate} from 'react-router'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Sign-Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="Username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="button primary-button">Register</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
