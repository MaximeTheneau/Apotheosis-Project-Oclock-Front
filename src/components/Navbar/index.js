import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMobileMenu } from '../../action/header';

function Navbar() {
  const { isOpen } = useSelector((state) => state.header.isOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const closeMobileNavbar = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <div>
      <nav className="navbar">
        <div
          className="menu-icon"
          onClick={handleToggle}
        >
          <i className={isOpen ? 'icon-plus' : 'icon-bars'} />
        </div>
        <ul className={isOpen ? 'menu--active' : 'menu'}>
          <li className="menu-item">
            <Link to="/miam" className="navbar-links" onClick={closeMobileNavbar}>
              Les recettes Miam
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dernieres-recettes" className="menu-links" onClick={closeMobileNavbar}>
              Les dernières recettes
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/chefs" className="menu-links" onClick={closeMobileNavbar}>
              Chefs à la Une
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/recettes-aleatoires" className="menu-links" onClick={closeMobileNavbar}>
              Recettes aléatoires
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/connexion" className="menu-links" onClick={closeMobileNavbar}>
              Se connecter
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/Inscription" className="menu-links" onClick={closeMobileNavbar}>
              Créer un compte
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
