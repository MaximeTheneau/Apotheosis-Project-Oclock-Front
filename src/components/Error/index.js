import './styles.scss';

function Error() {
  return (
    <>
      <div className="animation">
        <i className=" icon-stainer" />
        <i className="icon-rolls" />
        <i className="icon-ladle" />
        <i className="icon-whisk" />
        <i className="icon-glass" />
        <i className="icon-bottle" />
        <i className="icon-fork" />
        <i className="icon-teapot" />

        <i className="icon-chicken" />
        <i className="icon-pan" />
        <i className="icon-spatula" />
      </div>
      <h1 className="one-recipe-title">404</h1>
      <div className="one-recipe">
        <div className="one-recipe-header">
        </div>
        <div className="one-recipe-img-404">
          <i className="icon-coffee-maker fs-2" />
        </div>
        <div className="one-recipe-timer">
          <ul className="one-recipe-timer-ul">
            <li><i className="icon-timer" /><span>5 min</span></li>
            <li><i className="icon-kitchen-hat" /></li>
            <li><p className="one-recipe-caption"></p></li>
          </ul>
        </div>
        <div className="one-recipe-ingredient">
        <h2 className="one-recipe-ingredient-title">Ingrédients</h2>
          <ul className="one-recipe-ingredient-list">
            <li></li>
            <li ></li>
          </ul>
        </div>
        <div className="one-recipe-steps">
          <ul className="one-recipe-steps-ul">
              <li>
                <h2 className="one-recipe-steps-title">Etape 1</h2>
                <p className="one-recipe-steps-etape">1l de connexion</p>
              </li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default Error;
