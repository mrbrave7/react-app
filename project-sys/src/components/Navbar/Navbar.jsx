import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <img className="logo" src="/Logo.png" alt="" />
      </Link>
      <div className="nabvItems">
        <ul>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>{/* <Link to={"/login"}>Login</Link> */}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
