import "../index.css";
import form from "../assets/images/form.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    return navigate("/Login");
  };

  return (
    <>
      <div className="main-div">
        <div className="form">
          <div className="form img">
            <img src={form} alt="" />
          </div>

          <form className="form-inputs" onSubmit={submitForm}>
            <div className="heading">
              <h1>Sign Up</h1>
            </div>
            <h4>Name</h4>
            <input
              className="inputs"
              type="text"
              placeholder="enter your name"
              id="inputName"
            />
            <h4>E-mail</h4>
            <input
              className="inputs"
              type="text"
              placeholder="enter your mail"
              id="inputEmail"
            />
            <h4>Password</h4>
            <input
              className="inputs"
              type="password"
              name=""
              id="inputPassword"
              placeholder="enter your password"
            />
            <button className="btn" onClick={() => navigate("/Login")}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
