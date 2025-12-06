import { Link } from "react-router-dom";

 
const Login = () => {
  return (
 
  
    <form>
      <div className="login-container">
        <div className="login-box">
          <h1>Sign In</h1>
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="signin-btn">Sign In</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            Sign in with Google
          </button>

          <div className="custom-radio check">
            <input type="radio" id="radioDefault1" name="radioDefault" />
            <label htmlFor="radioDefault1">Remember me</label>
          </div>

          <h4>
            New to Netflix? <a href="#">Sign up now.</a>
          </h4>

          <Link to='Need-help' className="forgot-link">
            Need help?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
