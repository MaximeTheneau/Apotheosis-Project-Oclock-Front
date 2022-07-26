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

      <div className="footer">
        <nav className="footer-navbar">
          <ul className="footer-list">
            <li className="footer-link">
              <NavLink
                className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-linsk')
            }
                to="/qui-sommes-nous"
              >
                Qui sommes nous ?
              </NavLink>
            </li>
            <li className="footer-link">
              <NavLink
                className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="footer-link">
              <NavLink
                className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
                to="/mention-legal"
              >
                Mentions légales
              </NavLink>
            </li>
            <li className="footer-link">
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
        <p className="footer-text">Mijote avec &#128420; par la team O'Miam depuis 2022.</p>
      </div>
    </div>
  );
}

export default Footer;
