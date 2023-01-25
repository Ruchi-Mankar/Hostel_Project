import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitForm}>
        <div className="user-box">
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          placeholder="Email" />
        </div>
        <div className="user-box">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => onChange(e)}
        />
        </div>
        {/* <Link to='/sidebar'>
            <button class="btn btn-success btn-block">Submit</button>
        </Link> */}
        <button class="btn btn-success btn-block">Submit</button>
        <div className="new1">Not Registered?  
        <Link to="/signup">Register</Link>     
        </div> 
      </form>
    </div>
  );
};

export default Login;
