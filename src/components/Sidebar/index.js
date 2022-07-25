import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { hideSidebar } from '../../action/header';

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.header.isOpen);
  const handleClose = () => {
    dispatch(hideSidebar());
  };

  return (
    <div className="sidebar" id={sidebar ? 'show-sidebar' : 'hide-sidebar'}>
      <ul className="sidebar-links">
        <li className="sidebar-item">
          <Link to="/miam" className="navbar-links" onClick={() => handleClose()}>
            Les recettes Miam
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/dernieres-recettes" className="navbar-links" onClick={() => handleClose()}>
            Les dernières recettes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/chefs" className="navbar-links" onClick={() => handleClose()}>
            Chefs à la Une
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/connexion" className="navbar-links" onClick={() => handleClose()}>
            Se connecter
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/inscription" className="navbar-links" onClick={() => handleClose()}>
            Créer un compte
          </Link>
        </li>
      </ul>
      <div className="sidebar-cancel">
        <ImCross onClick={() => handleClose()} />
      </div>
    </div>
  );
}

export default Sidebar;
