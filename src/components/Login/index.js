import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials } from '../../action/user';

function Login() {
  const {
    email, password,
  } = useSelector((state) => state.user.settingsLogIn);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'password'));
  };

  return (
    <form className="registration">
      <div className="registration-field">
        <label
          htmlFor="email"
          className="registration-label"
        >
          Email *
          <input
            placeholder="email@omiam.com"
            type="email"
            id="email"
            value={email}
            required
            className="registration-input"
            size="28"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className="registration-field">
        <label
          htmlFor="password"
          className="registration-label"
        >
          Mot de passe *
          <input
            placeholder="*****"
            type="password"
            id="password"
            value={password}
            required
            className="registration-input"
            size="28"
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button type="submit" className="registration-submit">Connexion</button>
    </form>
  );
}

export default Login;
