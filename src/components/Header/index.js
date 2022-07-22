import './styles.scss';
import DropdownMenu from '../Dropdownmenu';
import Connexion from '../Connexion';
import Logo from '../Logo';
import Navbar from '../Navbar';

function Header() {
  return (
    <header>
      <Connexion />
      <div className="header">
        <Logo />
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;
