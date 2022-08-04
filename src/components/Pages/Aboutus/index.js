import './styles.scss';

function Aboutus() {
  return (
    <div className="aboutus-cards">
      <div className="cardsAboutUs">
        <img src="geek.png" alt="Avatar" />
        <p>Loïc Maurin<br />
          Dév Front
        </p>
    <div className="aboutusrow">
      <div className="aboutuscolumn">
        <div className="aboutuscards">
          <img className="aboutusimg" src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="Avatar" />
          <div className="cardsAboutUs-container">
            <p>Loïc MAURIN<br />
              Lead Dev Front
            </p>
          </div>
        </div>
      </div>
      <div className="aboutuscolumn">
        <div className="aboutuscards">
          <img className="aboutusimg" src="https://images3.alphacoders.com/812/812062.png" alt="Avatar" />
          <div className="cardsAboutUs-container">
            <p>Adrien PINILLA<br />
              Product Owner<br />
              Dev Back
            </p>
          </div>
        </div>
      </div>
      <div className="aboutuscolumn">
        <div className="aboutuscards">
          <img className="aboutusimg" src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="Avatar" />
          <div className="cardsAboutUs-container">
            <p>Maxime THENEAU<br />
              Référent Technique Redux<br />
              Dev Front
            </p>
          </div>
        </div>
      </div>
      <div className="aboutuscolumn">
        <div className="aboutuscards">
          <img className="aboutusimg" src="https://images7.alphacoders.com/754/754992.jpg" alt="Avatar" />
          <div className="cardsAboutUs-container">
            <p>Pauline THOMELIN<br />
              Scrum Master - Référente Technique React<br />
              Dev Front
            </p>
          </div>
        </div>
      </div>
      <div className="aboutuscolumn">
        <div className="aboutuscards">
          <img className="aboutusimg" src="https://images5.alphacoders.com/501/501466.jpg" alt="Avatar" />
          <div className="cardsAboutUs-container">
            <p>Nathalie TOURNON<br />
              Lead Dev Back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
