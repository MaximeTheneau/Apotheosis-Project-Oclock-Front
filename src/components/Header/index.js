import './styles.scss';
import Connection from '../Connection';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Header() {
  return (
    <header>
      <Connection />
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
