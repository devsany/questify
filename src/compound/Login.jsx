// Login.js
import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => { 
  return (
    <div>
      <h2>Login Page</h2>
      <SignIn />
    </div>
  );
};

export default Login;
