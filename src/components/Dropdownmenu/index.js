import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../action/header';

function DropdownMenu() {
  const { isOpen } = useSelector((state) => state.isOpen);
  const { menuItems } = useSelector((state) => state.menuItems);
  console.log(isOpen);
  console.log(menuItems);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={isOpen ? 'settings' : 'settings settings--closed'}>
      <button
        type="button"
        className="header-menu-button"
        onClick={handleToggle}
      >
        <i className="icon-bars" />
      </button>
      <ul>
        <li>Les recettes Miam</li>
        <li>Les dernières recettes</li>
        <li>Chefs à la Une</li>
        <li>Recettes aléatoires</li>
        <li>Se connecter</li>
        <li>Créer un compte</li>
        {/* {
        menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))
      } */}
      </ul>
    </div>
  );
}

export default DropdownMenu;