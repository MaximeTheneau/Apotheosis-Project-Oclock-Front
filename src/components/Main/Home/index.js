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
        </div>

      </div>

    </div>
  );
}

export default Home;
