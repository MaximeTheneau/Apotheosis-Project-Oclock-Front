import { Routes, Route, NavLink } from 'react-router-dom';

import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';

import './styles.scss';

function Footer() {
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
          <li className="footer-link-aboutus">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-linsk')
            }
              to="/qui-sommes-nous"
            >
              Qui sommes nous ?
            </NavLink>
          </li>
          <li className="footer-link-contact">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="footer-link-privacy">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/mention-legal"
            >
              Mentions légales
            </NavLink>
          </li>
          <li className="footer-link-tscs">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/condition-general-utilisation"
            >
              Conditions Générales d'Utilisation
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
