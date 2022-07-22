import './styles.scss';

function Navbar() {
  return (
    <nav className="header-menu-navbar">
      <ul className="header-menu-navbar-list">
        <li>Les recettes Miam</li>
        <li>Les dernières recettes</li>
        <li>Chefs à la Une</li>
        <li>Recettes aléatoires</li>
        <li>Se connecter</li>
        <li>Créer un compte</li>
      </ul> 
    </nav>
  );
}

export default Navbar;
