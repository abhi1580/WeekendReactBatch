import { Link, Outlet } from "react-router-dom";
const Electronic = () => {
  return (
    <div>
      <h2 className="text-center text-bg-secondary">Electronic Section</h2>

      <nav className="navbar navbar-expand-lg bg-danger " data-bs-theme="dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"mobile"} className="nav-link ">
              Mobile
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"laptop"} className="nav-link">
              Laptop
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Electronic;
