import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { ShopContext } from "../App";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
const ShopNavBar = () => {
  const { cart } = useContext(ShopContext);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg p-2 bg-dark mb-3 w-100"
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
          <li className="nav-item">
            <Link className="nav-link" to={"/context"}>
              Context Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/reducer"}>
              Reducer Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/ref"}>
              Ref Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/effect"}>
              UseEffect Demo
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login or Register
            </Link>
          </li>
          <li className="nav-item">
            <Link title="View Cart" className="nav-link" to={"/cart"}>
              <IoCartOutline />
              {cart.length > 0 && (
                <Badge
                  bg="danger"
                  pill
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "6px",
                    fontSize: "0.7rem",
                    padding: "0.25em 0.4em",
                    lineHeight: "1",
                  }}
                >
                  {cart.length}
                </Badge>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      {/* placeholder to render react component based on user navigation */}
      <Outlet />
    </div>
  );
};

export default ShopNavBar;
