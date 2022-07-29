import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, toggleDropdownMenu } from '../../../action/user';
import './styles.scss';

function HeaderMyAccount() {
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
    <header className="header-user-profile">
      <div className="profilelogo-dropdownmenu">
        <Link to="/">
          <div className="profilelogodiv">
            <h2 className="profilelogodiv-title">
              <i className="icon-miam" /><em className="profilelogodiv-sloggan-highlight">'</em>miam
            </h2>
            <span className="profilelogodiv-sloggan">Une histoire de miam's</span>
          </div>
        </Link>
        <div>
          <HiDotsVertical
            className="profilelogo-dropdownmenu-mobile"
            onClick={handleClickMenu}
          />
          {
            isListOpen && (
              <ul>
                <Link to="/connexion">Paramètres</Link>
                <Link to="/connexion" onClick={handleLogout}>Déconnexion</Link>
              </ul>
            )
          }
        </div>
      </div>
      <div className="user-info">
        <img src={avatar} alt="user profile" className="user-info-avatar" />
        <p className="user-info-pseudo">{pseudo}</p>
      </div>
    </header>
  );
}

export default HeaderMyAccount;
