import { Link } from 'react-router-dom';
import './styles.scss';

function HeaderMyAccount() {
  return (
    <div className="user-profile">
      <div className="list">
        <ul className="list-choose">
          <Link to="/mon-compte/mes-recettes">
            <li className="my-recipe"><i className="icon-glove" /><h2>Mes Recettes</h2></li>
          </Link>
          <Link to="/mon-compte/mes-miams">
            <li className="my-miams"><i className="icon-miam" /><h2>Carnet de Miams</h2></li>
          </Link>
          <Link to="/mon-compte/mes-chefs">
            <li className="my-chiefs"><i className="icon-cook" /><h2>Mes Chefs</h2></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMyAccount;
