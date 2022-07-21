import './styles.scss';

function Header() {
  return (
    <header>
      <div className="connexion">
        <button className="connexion-button" type="submit">Connexion <i className="icon-lock header-menu-logo" />
        </button>
      </div>
      <div className="header">
        <div className="header-logo">
          <h2 className="header-logo-title">
            <i className="icon-miam" />'miam
          </h2>
          <span className="header-logo-sloggan">Une histoire de <em className="header-logo-sloggan-highlight">miam's</em></span>
        </div>
        <div className="header-menu">
          <button type="submit">
            <i className="icon-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
