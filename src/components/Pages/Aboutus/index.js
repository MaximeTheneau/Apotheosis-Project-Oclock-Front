import './styles.scss';

function Aboutus() {
  return (
    <div>
      <h1>Qui sommes-nous ?</h1>
      <div className="aboutus">
        <div className="card-aboutUs card">
          <div className="aboutus-cards">
            <img className="card-img" src="https://images4.alphacoders.com/632/632636.jpg" alt="Avatar" />
            <div className="card-caption">
              <h3 className="aboutus-caption-title">Loïc MAURIN</h3>
              <p>
                Lead Dev Front
              </p>
            </div>
          </div>
        </div>
        <div className="card-aboutUs card">
          <div className="aboutus-cards">
            <img className="card-img" src="https://images3.alphacoders.com/812/812062.png" alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Adrien PINILLA</h3>
              <p>
                Product Owner
                Dev Back
              </p>
            </div>
          </div>
        </div>
        <div className="card-aboutUs card">
          <div className="aboutus-cards">
            <img className="card-img" src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Maxime THENEAU</h3>
              <p className="aboutus-cards-caption">
                Tech Referent Redux Dev Front
              </p>
            </div>
          </div>
        </div>
        <div className="card-aboutUs card">
          <div className="aboutus-cards">
            <img className="card-img" src="https://images7.alphacoders.com/754/754992.jpg" alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Pauline THOMELIN</h3>
              <p>
                Scrum Master - Tech Referent React
                Dev Front
              </p>
            </div>
          </div>
        </div>
        <div className="card-aboutUs card">
          <div className="aboutus-cards">
            <img className="card-img" src="https://images5.alphacoders.com/501/501466.jpg" alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Nathalie TOURNON</h3>
              <p>Lead Dev Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Aboutus;
