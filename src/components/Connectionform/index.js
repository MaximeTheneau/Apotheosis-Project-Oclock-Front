import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../Register';
import Login from '../Login';
import { openLogin, openRegistration } from '../../action/user';

function Connectionform() {
  const { isLoginOpen, isRegistrationOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(openLogin());
  };

  const handleRegistrationClick = () => {
    dispatch(openRegistration());
  };

  return (
    <div className="form">
      <div className="form-title">
        <Link to="/connexion">
          <h2
            className="form-h2"
            onClick={handleLoginClick}
          >
            Se connecter
          </h2>
        </Link>
        <Link to="/connexion">
          <h2
            className="form-h2"
            onClick={handleRegistrationClick}
          >
            Créer un compte
          </h2>
        </Link>
      </div>
      {isLoginOpen && <Login />}
      {isRegistrationOpen && <Register />}

    </div>
  );
}

export default Connectionform;
