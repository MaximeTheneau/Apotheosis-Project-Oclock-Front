import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const {
    email, password,
  } = useSelector((state) => state.header.settingsLogIn);
  const dispatch = useDispatch();

  const handleEmailChange = () => {

  };

  const handlePasswordChange = () => {

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
