import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../Logo';
import { showSidebar } from '../../action/header';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSidebar());
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="navbar-wrapper-links">
          <li className="navbar-wrapper-item">
            <Link to="/miam" className="navbar-links">
              Les recettes Miam
            </Link>
          </li>
          <li className="navbar-wrapper-item">
            <Link to="/dernieres-recettes" className="menu-links">
              Les dernières recettes
            </Link>
          </li>
          <li className="navbar-wrapper-item">
            <Link to="/chefs" className="menu-links">
              Chefs à la Une
            </Link>
          </li>
          <li className="navbar-wrapper-item">
            <Link to="/recettes-aleatoires" className="menu-links">
              Recettes aléatoires
            </Link>
          </li>
          <li className="navbar-wrapper-item">
            <Link to="/connexion" className="menu-links">
              Se connecter
            </Link>
          </li>
          <li className="navbar-wrapper-item">
            <Link to="/inscription" className="menu-links">
              Créer un compte
            </Link>
          </li>
        </ul>
        <div className="icon">
          <i className="icon-lock" />
          <i className="icon-bars" onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
