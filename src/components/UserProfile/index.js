import { Link } from 'react-router-dom';
import './styles.scss';

function UserProfile() {
  return (
    <>
      <Link to="/mon-compte" />
      <div className="user-profile">
        <div className="list">
          <ul className="list-choise">
            <Link to="/mon-compte/mes-recettes">
              <li className="my-recipe"><i className="" />Mes Recettes</li>
            </Link>
            <Link to="/mon-compte/mes-miams">
              <li className="my-miams"><Link to="/" /><i className="" />Carnet de Miams</li>
            </Link>
            <Link to="/mon-compte">
              <li className="my-chief"><i className="" />Mes Chefs</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
