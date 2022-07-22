import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../action/header';

function DropdownMenu() {
  const { isOpen } = useSelector((state) => state.isOpen);
  const { menuItems } = useSelector((state) => state.menuItems);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <button
        type="button"
        className="settings__toggle"
        onClick={handleToggle}
      >
        <i className="icon-bars" />
      </button>
      <div className={isOpen ? 'menu--closed' : 'menu'}>
        <ul className="menu-list">
          <li className="menu-list-item"><a>Les recettes Miam</a></li>
          <li className="menu-list-item">Les dernières recettes</li>
          <li className="menu-list-item">Chefs à la Une</li>
          <li className="menu-list-item">Recettes aléatoires</li>
          <li className="menu-list-item">Se connecter</li>
          <li className="menu-list-item">Créer un compte</li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
