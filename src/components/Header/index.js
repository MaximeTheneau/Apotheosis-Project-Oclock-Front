import './styles.scss';
import Connexion from '../Connexion';
import Logo from '../Logo';
import Navbar from '../Navbar';

function Header() {
  return (
    <header>
      <Connexion />
      <div className="header">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
