import "../index.css";
import form from "../assets/images/form.png";
const SignUp = () => {
  return (
    <>
      <div className="main-div">
        <div className="form">
          <div className="form img">
            <img src={form} alt="" />
          </div>

          <div className="form-inputs">
            <div className="heading">
              <h1>Sign Up</h1>
            </div>
            <h4>Name</h4>
            <input
              className="inputs"
              type="text"
              placeholder="enter your mail"
              id="inputEmail"
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
            <button className="btn" onclick="window.open('./login.html')">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
