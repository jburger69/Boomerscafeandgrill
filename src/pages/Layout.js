import { Outlet, Link } from "react-router-dom";
import '../layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Grill">Grill</Link>
          </li>
          <li>
            <Link to="/Cafe">Cafe</Link>
          </li>
          <li>
            <Link to="/Catering">Catering</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;