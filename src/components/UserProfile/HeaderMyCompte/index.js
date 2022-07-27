import { Link } from 'react-router-dom';
import './styles.scss';

function HeaderMyAccount() {
  return (
    <>
      <Link to="/mon-compte" />
      <div className="user-profile">
        <div className="list">
          <ul className="list-choose">
            <Link to="/mon-compte/mes-recettes">
              <li className="my-recipe"><i className="icon-glove" />Mes Recettes</li>
            </Link>
            <Link to="/mon-compte/mes-miams">
              <li className="my-miams"><i className="icon-miam" />Carnet de Miams</li>
            </Link>
            <Link to="/mon-compte/mes-chefs">
              <li className="my-chiefs"><i className="icon-cook" />Mes Chefs</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderMyAccount;
