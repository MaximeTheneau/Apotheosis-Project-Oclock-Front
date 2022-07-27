import './styles.scss';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Header() {
  return (
    <header>
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
