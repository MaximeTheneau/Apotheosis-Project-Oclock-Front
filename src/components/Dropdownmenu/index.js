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
      <ul className={isOpen ? 'menu' : 'menu menu--closed'}>
        <li>Les recettes Miam</li>
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
