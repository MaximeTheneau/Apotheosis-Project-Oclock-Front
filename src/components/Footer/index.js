import { Routes, Route, NavLink } from 'react-router-dom';

// import Main from '../Main/Home';
import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';
import Error from '../Error';

import './styles.scss';

function Footer() {
  // <Route path="/" element={<Main />} />
  return (
    <div className="routes-footer">
      <Routes>
        <Route path="/qui-sommes-nous" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention-legal" element={<Privacy />} />
        <Route path="/condition-general-utilisation" element={<Tscs />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <nav className="footer">
        <ul className="footer-list">
          <li className="footer-link-aboutus">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
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
              Mentions légal
            </NavLink>
          </li>
          <li className="footer-link-tscs">
            <NavLink
              className={
                ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
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
