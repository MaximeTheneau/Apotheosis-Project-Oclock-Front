import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchRecipesMyAccount, saveUserID } from '../../../action/myAccountRecipes';
import './styles.scss';

function Buttonnavbar() {
  
  return (
    <div className="profile">
      <nav className="profile-list">
        <NavLink
          to="/mon-compte/mes-recettes/:id"
          className={
             ({ isActive }) => (isActive ? 'profile-items--active' : 'profile-items')
              }
        >
          <i className="icon-glove icon-glove-profile" />
          <h2 className="profile-title">Mes recettes</h2>
        </NavLink>
        <NavLink
          to="/mon-compte/mes-miams/:id"
          className={
            ({ isActive }) => (isActive ? 'profile-items--active' : 'profile-items')
             }
        >
          <i className="icon-miam icon-miam-profile" />
          <h2 className="profile-title">Carnet de Miams</h2>
        </NavLink>
        <NavLink
          to="/mon-compte/mes-chefs"
          className={
          ({ isActive }) => (isActive ? 'profile-items--active' : 'profile-items')
           }
        >
          <i className="icon-cook icon-cook-profile" />
          <h2 className="profile-title">Mes Chefs</h2>
        </NavLink>
      </nav>
    </div>
  );
}

export default Buttonnavbar;
