import './styles.scss';

function Aboutus() {
  return (
    <div className="aboutus-cards">
      <div className="cardsAboutUs">
        <img src="geek.png" alt="Avatar" />
        <p>Loïc Maurin<br />
          Dév Front
        </p>
      </div>
      <div className="cardsAboutUs">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="cardsAboutUs-container">
          <p>Adrien Pinilla<br />
            ProductOwner<br />
            Dév Back
          </p>
        </div>
      </div>
      <div className="cardsAboutUs">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="cardsAboutUs-container">
          <p>Maxime Theneau<br />
            Dév Front
          </p>
        </div>
      </div>
      <div className="cardsAboutUs">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="cardsAboutUs-container">
          <p>Pauline Thomelin<br />
            Dév Front
          </p>
        </div>
      </div>
      <div className="cardsAboutUs">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="cardsAboutUs-container">
          <p>Nathalie Tournon<br />
            Dév Back
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
