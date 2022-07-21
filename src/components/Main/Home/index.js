import { Link } from 'react-router-dom';
import './styles.scss';

function Home() {
  return (
    <div className="home">
      <form>
        <input type="text" />
        <button type="submit">
          <i className="icon-search" />
        </button>
      </form>
      <ul className="home-list-categories">
        <li className="home-list-categories-icon"><i className="icon-drink" /></li>
        <li className="home-list-categories-icon"><i className="icon-radish" /></li>
        <li className="home-list-categories-icon"><i className="icon-dish" /></li>
        <li className="home-list-categories-icon"><i className="icon-cakes" /></li>
      </ul>
      <h2 className="home-recipe">Les Recettes Miam</h2>
      <div className="home-cards">
        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
        </div>
        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name2"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
        </div>
        <div className="home-card">
          <img
            src="https://thumbs.dreamstime.com/b/ligne-horizontale-de-la-mer-par-plage-vue-panoramique-horizontal-202984827.jpg"
            alt="Name2"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <h2>Les Dernières Recettes </h2>
      <div className="home-cards">
        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
        </div>
        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name2"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
        </div>
        <div className="home-card">
          <img
            src="https://thumbs.dreamstime.com/b/ligne-horizontale-de-la-mer-par-plage-vue-panoramique-horizontal-202984827.jpg"
            alt="Name2"
            className="home-card-img"
          />
          <ul className="home-card-list">
            <li><img className="home-card-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
            <li><i className="icon-dish" /></li>
            <li>
              <span>15
                <i className="icon-miam" />
              </span>
            </li>
          </ul>
    <>
      {/* Title Page */}
      <h1 className="title-page logo"><i className="icon-miam logo" />'miam
        <span className="logo-slogan"> Une histoire de miam's</span>
      </h1>
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
            <li className="list-categories-icon"><Link to="/e"><i className="icon-drink" /></Link></li>
            <li className="list-categories-icon"><i className="icon-radish" /></li>
            <li className="list-categories-icon"><i className="icon-dish" /></li>
            <li className="list-categories-icon"><i className="icon-cakes" /></li>
          </ul>
        </div>
      </div>

      <div className="cards-home">

        {/* Cards */}
        <div className="cards">
          <h2 className="cards-recipe">Les Recettes Miam</h2>
          <div className="cards-list">
            {/* Card */}
            <div className="card">
              <h2 className="card-recipe">Pizza </h2>
              <img
                src="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/R88-riz-noir-fleur-oranger_dr.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393"
                alt="Name"
                className="card-img"
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
            {/* Card */}
            <div className="card">
              <img
                src="https://img.cuisineaz.com/610x610/2019/03/21/i146135-le-plat-monochrome-blanc-d-alexia.jpeg"
                alt="Name"
                className="card-img"
              />
              <h2 className="card-recipe">Pizza à l'espigouille, et escargot d'aubergine aux foies de morue marinée. </h2>
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

            {/* Card */}
            <div className="card">
              <h2 className="card-recipe">Pizza à l'espigouille, et escargot d'aubergine aux foies de morue marinée à l'ail et fine herbes en sauce à la pistache. Pizza à l'espigouille, et escargot d'aubergine aux foies de morue marinée à l'ail et fine herbes en sauce à la pistache. </h2>
              <img
                src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_630,q_auto,w_1200/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/889/pizza_flickr_4932057475_2a9ce50750_b.jpg"
                alt="Name"
                className="card-img"
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

        {/* Cards */}
        <div className="cards">
          <h2 className="cards-recipe">Dernières Miam</h2>
          <div className="cards-list">
            {/* Card */}
            <div className="card">
              <img
                src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Name"
                className="card-img"
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
            {/* Card */}
            <div className="card">
              <img
                src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Name"
                className="card-img"
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

            {/* Card */}
            <div className="card">
            <img
              src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Name"
              className="card-img"
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

        {/* Cards */}
        <div className="cards">
          <h2 className="cards-recipe">Dernières Miam</h2>
          <div className="cards-list">
            {/* Card */}
            <div className="card">
              <img
                src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Name"
                className="card-img"
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
            {/* Card */}
            <div className="card">
              <img
                src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Name"
                className="card-img"
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

            {/* Card */}
            <div className="card">
            <img
              src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Name"
              className="card-img"
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
      </div>
    </div>
    </>

  );
}

export default Home;
