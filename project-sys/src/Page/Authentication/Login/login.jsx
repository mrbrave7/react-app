/* eslint-disable no-undef */
import { useState } from "react";
import "./Login.css";
import login from "../../../utilities/login";
function Login() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetail((prevDetails) => ({ ...prevDetails, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDetail);
    const user = login(
      (email = userDetail.email),
      (password = userDetail.password)
    );
    console.log(user);
  }
  return (
    <main className="mainDiv">
      <div className="formDiv">
        <img src="/Logo.png" alt="" />
        <h1 className="heading">Login To Proceed!</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleChange}
            type="email"
            value={userDetail.email}
            placeholder="Email"
            name="email"
            id="email"
          />
          <input
            onChange={handleChange}
            value={userDetail.password}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <button className="submitBtn" type="submit">
            Login
          </button>
        </form>
        <div className="navigate">
          <a href="#" className="navLink">
            Create Account
          </a>
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </main>
  );
}

export default Login;
