import React from "react";

function Login() {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <h2>karo</h2>

        <form>
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
          <button className="button primary-button">Login</button>
        </form>
        <h1>hii</h1>
      </div>
    </main>
  );
}

export default Login;
