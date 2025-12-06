import { Link, Outlet, Route, Routes } from "react-router-dom";


const Header = () => {
  return (
    <>


    
    <header>
      <nav>
        <div id="nav-container">
          <img src="/img/logo.png" alt="Netflix Logo" />
        </div>
        <div className="nav-btn">
          <div>
            <select>
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <Link to={"/sign-in"}>
            <button className="sign-btn">Sign in</button>
          </Link>
        </div>
      </nav>
    </header>
    <Outlet></Outlet>
    </>
  );
};
export default Header;
