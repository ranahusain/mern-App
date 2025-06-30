import "../index.css";
import form from "../assets/images/form.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/login/", {
        email,
        password,
      });

      console.log(res.data);
      if (res.data.success) {
        console.log("login sucees");
        const loggedInUser = res.data.user.name;
        localStorage.setItem("user", loggedInUser);
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.error("error in loggin in ", error);
    }
    return navigate("/AllUsers");
  };

  return (
    <>
      <div className="main-div">
        <div className="form">
          <div className="form img">
            <img src={form} alt="" />
          </div>

          <form className="form-inputs" onSubmit={LoginSubmit}>
            <div className="heading">
              <h1>Log In</h1>
              {/* <p>
                Join our community and start your journey with us today. Sign up
                to access exclusive features, connect with others, and stay
                up-to-date with the latest updates.
              </p> */}
            </div>

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
            <button className="btn">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
