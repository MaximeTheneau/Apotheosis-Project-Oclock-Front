import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setRegistrationcredentials } from '../../action/user';

function Register() {
  const {
    pseudo, email, password, confirmedPassword,
  } = useSelector((state) => state.user.settingsRegister);
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'pseudo'));
  };

  const handleEmailChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'password'));
  };

  const handleconfirmedPasswordChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'confirmedPassword'));
  };

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
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
            onChange={handlePseudoChange}
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
            onChange={handleconfirmedPasswordChange}
          />
        </label>
      </div>
      <button type="submit" className="registration-submit">Valider</button>
    </form>
  );
}

export default Register;
