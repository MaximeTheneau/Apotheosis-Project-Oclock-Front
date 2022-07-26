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
    <form className="login">
      <div className="login-field">
        <label
          htmlFor="email"
          className="login-label"
        >
          Email *
          <input
            placeholder="email@omiam.com"
            type="email"
            id="email"
            value={email}
            required
            className="login-input"
            size="28"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className="login-field">
        <label
          htmlFor="password"
          className="login-label"
        >
          Mot de passe *
          <input
            placeholder="*****"
            type="password"
            id="password"
            value={password}
            required
            className="login-input"
            size="28"
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button type="submit" className="login-submit">Connexion</button>
    </form>
  );
}

export default Login;
