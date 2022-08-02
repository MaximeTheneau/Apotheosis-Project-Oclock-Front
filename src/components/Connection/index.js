import './styles.scss';

import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, toggleDropdownMenu } from '../../action/user';

function Connexion() {
  const { avatar, pseudo } = useSelector((state) => state.user.settingsLogIn);
  const { isListOpen } = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();
  const handleClickMenu = () => {
    dispatch(toggleDropdownMenu());
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="connection">
      <button className="connection-register" type="submit">S'inscrire
      </button>
      <span>-</span>
      <button className="connection-button" type="submit">Connexion <i className="icon-lock" />
      </button>
      <div className="dropdown-list">
        <div onClick={handleClickMenu}>
          <HiDotsVertical
            className="profilelogo-dropdownmenu-mobile"
          />
        </div>
        {
          isListOpen && (
            <ul className="dropdown-list">
              <Link
                to="/parametres"
                className="dropdown-list-link"
              >Paramètres
              </Link>
              <Link
                to="/connexion"
                onClick={handleLogout}
                className="dropdown-list-link"
              >Déconnexion
              </Link>
            </ul>
          )
        }
        </div>
    </div>
  );
}

export default Connexion;
