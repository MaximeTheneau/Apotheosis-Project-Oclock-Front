import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../action/header';

function DropdownMenu() {
  const { isOpen } = useSelector((state) => state.header.isOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <button
        type="button"
        className="menu-icon"
        onClick={handleToggle}
      >
        <i className={isOpen ? 'icon-plus' : 'icon-bars'} />
      </button>
      <ul className={isOpen ? 'menu' : 'menu menu--closed'}>
        <li className="menu-item"><a>Les recettes Miam</a></li>
        <li className="menu-item">Les dernières recettes</li>
        <li className="menu-item">Chefs à la Une</li>
        <li className="menu-item">Recettes aléatoires</li>
        <li className="menu-item">Se connecter</li>
        <li className="menu-item">Créer un compte</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
