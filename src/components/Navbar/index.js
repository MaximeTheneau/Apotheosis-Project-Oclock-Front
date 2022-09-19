import './styles.scss';

import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../Logo';
import { showSidebar } from '../../action/header';
import { logout, toggleDropdownMenu } from '../../action/user';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSidebar());
  };

  const { logs, pseudo, avatar } = useSelector((state) => state.user.settingsLogIn);
  const { isListOpen } = useSelector((state) => state.user.userProfile);
  const { backofficeRights } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleClickMenu = () => {
    dispatch(toggleDropdownMenu());
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        {logs ? (
          <>
            <div className="navbar-wrapper-logo">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div className="navbar-wrapper-links">
              <NavLink
                to="/creer-une-recette"
                className={
                  ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
                  }
              >
                Ajouter une recette
              </NavLink>
              <NavLink
                to="/mon-compte"
                className={
                  ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
                  }
              >
                Mon Compte
              </NavLink>
              <NavLink
                to="/connexion"
                onClick={handleLogout}
                className={
                  ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
                  }
              >
                Déconnexion
              </NavLink>
              <i className="icon-bars" onClick={() => handleClick()} />
            </div>
          </>
        ) : (
          <div className="navbar-wrapper">
            <div className="navbar-wrapper-logo">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div>
              <button
                type="button"
                className="navbar-wrapper-button"
              >
                <Link to="/connexion" className="menu-links">
                  Connexion
                </Link>
              </button>
            </div>
          </div>
        )}
        <i className="icon-bars icon-flex" onClick={() => handleClick()} />
      </div>
    </div>
  );
}

export default Navbar;
