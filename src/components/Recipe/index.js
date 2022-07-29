import './styles.scss';

function Recipe() {
  return (
    <div className="one-recipe">
      <div className="one-recipe-header">
        <h1 className="one-recipe-title">La Recette</h1>
        <i className="icon-cakes" />
        <span>5</span><i className="icon-miam" />
      </div>
      <div className="one-recipe-img">
        <img
          src="http://adrienpinilla-server.eddi.cloud/omiam/current/public/sources/images/recipe/recipe_2.png"
          alt="Name"
          className="one-recipe-img"
        />
      </div>
    </div>
  );
}

export default Recipe;
