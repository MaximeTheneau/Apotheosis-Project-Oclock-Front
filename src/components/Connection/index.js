import './styles.scss';

function Connexion() {
  return (
    <div className="connection">
      <button className="connection-register" type="submit">S'inscrire
      </button>
      <span>-</span>
      <button className="connection-button" type="submit">Connexion <i className="icon-lock" />
      </button>
    </div>
  );
}

export default Connexion;
