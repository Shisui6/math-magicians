import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => (
  <nav>
    <h2>Math Magicians</h2>
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'link')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'link')}
            to="calculator"
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'link')}
            to="quote"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
