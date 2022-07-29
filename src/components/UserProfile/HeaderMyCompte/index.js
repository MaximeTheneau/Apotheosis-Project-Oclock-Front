import Logo from '../../Logo';
import { useSelector } from 'react-redux';
import './styles.scss';

function HeaderMyAccount() {
const { avatar, pseudo } = useSelector((state) => state.user.settingsLogIn);
  return (
    <header className="header-user-profile">
      <div></div>
      <div>
        <img></img>
        <p>Pseudo</p>
      </div>
    </header>
  );
}

export default HeaderMyAccount;
