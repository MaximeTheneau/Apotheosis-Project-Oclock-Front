import './styles.scss';
import { Link } from 'react-router-dom';
import Register from '../Register';

function Connectionform() {
  return (
    <div className="form">
      <div className="form-title">
        <Link to="/login"><h2 className="form-h2">Se connecter</h2></Link>
        <Link to="/login"><h2 className="form-h2">Créer un compte</h2></Link>
      </div>
      <Register />
    </div>
  );
}

export default Connectionform;
