import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
          <Link to="/creer-une-recette" className="navbar-links" onClick={() => handleClose()}>
            Ajouter une recette
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/mon-compte" className="navbar-links" onClick={() => handleClose()}>
            Mon Compte
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/chefs" className="navbar-links" onClick={() => handleClose()}>
            Chefs à la Une
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/recettes-aleatoires" className="menu-links" onClick={() => handleClose()}>
            Recettes aléatoires
          </Link>
        </li>
      </ul>
      <div className="sidebar-cancel">
        <i className="icon-x" onClick={() => handleClose()} />
      </div>
    </div>
  );
}

export default Sidebar;
