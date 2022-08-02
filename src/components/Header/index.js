import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Connexion from '../Connection';

function Header() {
  const { logs } = useSelector((state) => state.user.settingsLogIn);

  return (
    <header>
      {logs && <Connexion />}
      <Navbar />
      <Sidebar />
      {logs && (
        <div className="header-div">
          <button
            type="button"
            className="header-button"
          >
            <Link to="/Creer/Recette" className="header-link">
              <i className="icon-add header-icon" />
              <p>Ajouter une recette</p>
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
