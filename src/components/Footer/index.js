import { Routes, Route, NavLink } from 'react-router-dom';

import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';

import './styles.scss';

function Footer() {
  const activeClassName = 'underline';
  return (
    <div className="routes-footer">
      <Routes>
        <Route path="/qui-sommes-nous" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention-legal" element={<Privacy />} />
        <Route path="/condition-general-utilisation" element={<Tscs />} />
      </Routes>

      <nav className="footer">
        <ul className="footer-list">
          <li className="footer-list-aboutus">
            <NavLink
              className={
                ({ isActive }) => (isActive ? activeClassName : undefined)
            }
              to="/qui-sommes-nous"
            >
              Qui sommes nous ?
            </NavLink>
          </li>
          <li className="footer-list-contact">
            <NavLink
              className={
                ({ isActive }) => (isActive ? activeClassName : undefined)
            }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="footer-list-privacy">
            <NavLink
              className={
                ({ isActive }) => (isActive ? activeClassName : undefined)
            }
              to="/mention-legal"
            >
              Mentions légal
            </NavLink>
          </li>
          <li className="footer-list-tscs">
            <NavLink
              className={
                ({ isActive }) => (isActive ? activeClassName : undefined)
            }
              to="/condition-general-utilisation"
            >
              Conditions général d'utilisation
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
