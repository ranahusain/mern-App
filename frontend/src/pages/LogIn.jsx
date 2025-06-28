import "../index.css";
import form from "../assets/images/form.png";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";

const Login = () => {
  const navigate = useNavigate();
  const LoginSubmit = (e) => {
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
            />
            <h4>Password</h4>
            <input
              className="inputs"
              type="password"
              name=""
              id="inputPassword"
              placeholder="enter your password"
            />
            <button
              className="btn"
              onClick="window.open('https://www.google.com/')"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
