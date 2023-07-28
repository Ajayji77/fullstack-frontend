import { Link, useNavigate } from "react-router-dom";
import img from "./logo.png";

const Nav = () => {
  const navigate = useNavigate();
  let auth = localStorage.getItem("user");
  // console.log(JSON.parse(auth));
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img} alt="logo" height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {auth ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/add"
                  >
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/update"
                  >
                    Update Product
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                    onClick={logout}
                  >
                    Logout ({JSON.parse(auth).name})
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
