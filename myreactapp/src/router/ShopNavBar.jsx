import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ShopNavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark mb-3"
        data-bs-theme="dark"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to={"/"}>
              <FaHome />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/cars"}>
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/electronic"}>
              Electronics
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login or Register
            </Link>
          </li>
        </ul>
      </nav>
      {/* placeholde to render react component based on user navigation */}
      <Outlet />
    </div>
  );
};

export default ShopNavBar;
