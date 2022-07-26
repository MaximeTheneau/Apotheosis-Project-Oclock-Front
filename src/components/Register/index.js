import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

function Register() {
  const {
    pseudo, email, password, confirmedPassword,
  } = useSelector((state) => state.user.settingsRegister);
  return (
    <form className="registration">
      <div className="registration-field">
        <label
          htmlFor="pseudo"
          className="registration-label"
        >
          Pseudo *
          <input
            placeholder="Chef O'miam"
            type="pseudo"
            id="pseudo"
            value={pseudo}
            required
            className="registration-input"
            size="28"
          />
        </label>
      </div>
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
      <div className="registration-field">
        <label
          htmlFor="confirmedpassword"
          className="registration-label"
        >
          Confirmation du mot de passe *
          <input
            placeholder="*****"
            type="confirmedpassword"
            id="confirmedpassword"
            value={confirmedPassword}
            required
            className="registration-input"
            size="28"
          />
        </label>
      </div>
      <button type="submit" className="registration-submit">Valider</button>
    </form>
  );
}

export default Register;
