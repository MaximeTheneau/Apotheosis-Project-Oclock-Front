
import { Link } from 'react-router-dom';
import './styles.scss';

function Categories() {
  return (
    <>
      {/* Title Page */}
      
      <Link to="/">
        <h1 className="title-page logo">Entrée</h1>
      </Link>
      {/* Search */}
      <div className="search">
        <div className="search-form">
          <form>
            <input className="search-input" type="text" placeholder="Rechercher" />
            <button className="search-button" type="submit">
              <i className="icon-search" />
            </button>
          </form>
        </div>
        {/* List Catégories */}
        <div className="list">
          <ul className="list-categories">
            <li className="list-categories-icon"><i className="icon-drink" /><Link to="/e" /></li>
            <li className="list-categories-icon"><i className="icon-radish" /></li>
            <li className="list-categories-icon"><i className="icon-dish" /></li>
            <li className="list-categories-icon"><i className="icon-cakes" /></li>
          </ul>
        </div>
      </div>

      <div className="cards-type">
        {/* Cards */}
        <h2 className="cards-recipe">Ma Recherche</h2>
        <div className="cards-list-type">
          {/* Card */}
          <div className="card card-type">
            <h2 className="card-recipe">Pizza </h2>
            <img
              src="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/R88-riz-noir-fleur-oranger_dr.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393"
              alt="Name" 
              className="card-type-img card-img"
            />
            <div className="card-container">
              <ul className="card-container-list">
                <li><img className="card-container-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
                <li><i className="icon-dish" /></li>
                <li>
                  <span>15
                    <i className="icon-miam" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Categories;
