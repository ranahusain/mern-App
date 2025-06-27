import "../index.css";
import form from "../assets/images/form.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignUp = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    addUser(newUser);
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
              {/* <p>
                Join our community and start your journey with us today. Sign up
                to access exclusive features, connect with others, and stay
                up-to-date with the latest updates.
              </p> */}
            </div>
            <h4>Name</h4>
            <input
              className="inputs"
              type="text"
              placeholder="enter your name"
              id="inputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h4>E-mail</h4>
            <input
              className="inputs"
              type="text"
              placeholder="enter your mail"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              className="inputs"
              type="password"
              name=""
              id="inputPassword"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
