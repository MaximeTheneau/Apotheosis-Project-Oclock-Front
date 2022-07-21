import './styles.scss';
import DropdownMenu from '../Dropdownmenu';

function Header() {
  return (
    <header>
      <div className="connection">
        <button className="connection-register" type="submit">S'inscrire
        </button>
        <span>-</span>
        <button className="connection-button" type="submit">Connexion <i className="icon-lock" />
        </button>
      </div>
      <div className="header">
        <div className="header-logo">
          <h2 className="header-logo-title">
            <i className="icon-miam" />'miam
          </h2>
          <span className="header-logo-sloggan">Une histoire de <em className="header-logo-sloggan-highlight">miam's</em></span>
        </div>
        <DropdownMenu className=".header-menu-mobile" />
        <nav className="header-menu-navbar">
          <ul className="header-menu-navbar-list">
            <li>Recettes</li>
            <li>Categories</li>
            <li>Chefs</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
