import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { hideSidebar } from '../../action/header';

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.isOpen);
  const handleClose = () => {
    dispatch(hideSidebar());
  };

  return (
    <div className="sidebar" id={sidebar ? 'show-sidebar' : 'hide-sidebar'}>
      <ul className="sidebar-links">
        <li className="sidebar-item">
          <Link to="/miam" className="navbar-links" onClick={hideSidebar}>
        Les recettes Miam
            </Link></li>
        <li className="sidebar-item">About us</li>
        <li className="sidebar-item">Contact</li>
        <li className="sidebar-item">Services</li>
      </ul>
      <div className="sidebar-cancel">
        <ImCross onClick={() => handleClose()} />
      </div>
    </div>
  );
}

export default Sidebar;
