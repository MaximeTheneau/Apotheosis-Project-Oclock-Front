import { NavLink } from 'react-router-dom';

import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';

import './styles.scss';

function Footer() {
  return (
    <nav className="footer">
      <ul className="footer-list">
        <li className="footer-list-aboutus">
          <NavLink
            className={
              ({ isActive }) => (isActive ? 'footer-link footer-link--active' : 'footer-link')
          }
          to="/Aboutus"
          >
            Qui sommes nous ?
          </NavLink>
        </li>
        <li className="footer-list-contact">
          <NavLink
            className={
              ({ isActive }) => (isActive ? 'footer-link footer-link--active' : 'footer-link')
          }
          to="/Contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="footer-list-privacy">
          <NavLink
            className={
              ({ isActive }) => (isActive ? 'footer-link footer-link--active' : 'footer-link')
          }
          to="/Privacy"
          >
            Mentions légal
          </NavLink>
        </li>
        <li className="footer-list-tscs">
          <NavLink
            className={
              ({ isActive }) => (isActive ? 'footer-link footer-link--active' : 'footer-link')
          }
          to="/Tscs"
          >
            Conditions général d'utilisation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
