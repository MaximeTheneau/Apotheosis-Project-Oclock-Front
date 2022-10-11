import './styles.scss';

import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../Logo';
import { showSidebar } from '../../action/header';
import { logout, setRegistrationcredentials, settingsRegisters } from '../../action/user';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(showSidebar());
  };
  const avatarState = useSelector((state) => state.user.settingsRegister.avatar);
  const { logs, avatar} = localStorage;
  const logsState = useSelector((state) => state.user.logs);
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (logsState === true) {
      navigate('/');
    }
  }, [logsState]);
 // console.log(logs);
  return (
    <div className="navbar">
      <div className="navbar-wrapper">

        {logsState || logs ? (
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
              <Link to="/mon-compte" className="user-info">
                <img src={avatar || avatarState} alt="user profile" className="user-info-avatar" />
              </Link>
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
