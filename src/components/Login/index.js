import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const {
    isRegister, pseudo, email, password, confirmedPassword,
  } = useSelector((state) => state.header.settingsRegister);
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
          />
        </label>
      </div>
      <button type="submit" className="registration-submit">Connexion</button>
    </form>
  );
}

export default Login;
