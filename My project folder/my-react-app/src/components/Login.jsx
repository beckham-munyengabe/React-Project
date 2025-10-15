import React from "react";
import "./Login.css";


function Login() {
  return (
    <div className="login-page">
      <form method="POST" action="/Login">
      <h3>Login Page</h3>
      <input type="text" name="username" placeholder="Username" required /><br/><br/>
      <input type="email" name="useremail" placeholder="User email" required /><br/><br/>
      <input type="password" name="password" placeholder="Password" required /><br/><br/><br/>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;