import './styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import Logo from '../Logo';
import { showSidebar } from '../../action/header';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSidebar());
  };

  const { logs, pseudo, avatar } = useSelector((state) => state.user.settingsLogIn);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <ul className="navbar-wrapper-links">
          <NavLink
            to="/miam"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Les recettes Miam
          </NavLink>
          <NavLink
            to="/dernieres-recettes"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Les dernières recettes
          </NavLink>
          <NavLink
            to="/chefs"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Chefs à la Une
          </NavLink>
          <NavLink
            to="/recettes-aleatoires"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Recettes aléatoires
          </NavLink>
        </ul>
        <div className="desktop-connexion">
          {logs
            ? (
              <Link to="/mon-compte" className="user-info">
                <img src={avatar} alt="user profile" className="user-info-avatar" />
                <span className="user-info-pseudo">{pseudo} <MdOutlineArrowDropDown className="user-info-icon" /></span>
              </Link>
            )
            : (
              <button
                type="button"
                className="navbar-wrapper-button"
              >
                <Link to="/connexion" className="menu-links">
                  Connexion
                </Link>
              </button>
            )}
        </div>
        <div className="icon">
          {logs
            ? (
              <Link to="/mon-compte"><i className="icon-cook icon-cook-menu" />
              </Link>
            )
            : (
              <Link to="/connexion"><i className="icon-lock" />
              </Link>
            )}
          <i className="icon-bars" onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
