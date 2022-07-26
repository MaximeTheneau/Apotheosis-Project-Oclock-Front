import './styles.scss';
import { Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';

function Connectionform() {
  return (
    <div className="form">
      <div className="form-title">
        <Link to="/login"><h2 className="form-h2">Se connecter</h2></Link>
        <Link to="/login"><h2 className="form-h2">Créer un compte</h2></Link>
      </div>
      <Register />
      <Login />
    </div>
  );
}

export default Connectionform;
