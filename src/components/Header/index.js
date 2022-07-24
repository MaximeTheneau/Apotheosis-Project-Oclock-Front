import './styles.scss';
import Connexion from '../Connexion';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Header() {
  return (
    <header>
      <Connexion />
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
