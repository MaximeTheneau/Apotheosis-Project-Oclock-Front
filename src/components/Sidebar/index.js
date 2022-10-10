import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideSidebar } from '../../action/header';
import { logout } from '../../action/user';

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.header.isOpen);
  const logs = useSelector((state) => state.user.logs);
 // console.log(isLoginOpen);
  const handleClose = () => {
    dispatch(hideSidebar());
  };

  return (
    <div className="sidebar" id={sidebar ? 'show-sidebar' : 'hide-sidebar'}>
      <ul className="sidebar-links">
        {logs ? (
          <>
            <li className="sidebar-item">
              <Link to="/creer-une-recette" className="navbar-links" onClick={() => handleClose()}>
                Ajouter une recette
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/connexion" className="navbar-links" onClick={() => handleClose()}>
                Mon Compte
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/connexion" className="navbar-links" onClick={() => dispatch(logout() + hideSidebar())}>
                Se déconnecter
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="sidebar-item">
              <Link to="/connexion" className="navbar-links" onClick={() => handleClose()}>
                Se connecter
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/connexion" className="navbar-links" onClick={() => handleClose()}>
                Créer un compte
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="sidebar-cancel">
        <i className="icon-x" onClick={() => handleClose()} />
      </div>
    </div>
  );
}

export default Sidebar;
