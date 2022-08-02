import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setRegistrationcredentials, register, setFocus } from '../../action/user';

function Register() {
  const {
    pseudo, email, password, confirmedPassword,
  } = useSelector((state) => state.user.settingsRegister);
  const {
    errormessagePseudo, errormessageEmail,
    errormessagePassword, errormessagePasswordMatch, pseudofocused,
    emailfocused, passwordfocused, matchpasswordfocused
  } = useSelector((state) => state.user.settingsRegister.signinError);
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

  const handleFocusPseudo = (event) => {
    dispatch(setFocus(event.currentTarget.name));
  };

  const handleFocusEmail = () => {
    dispatch(setFocus('emailfocused'));
  };

  const handleFocusPassword = () => {
    dispatch(setFocus('passwordfocused'));
  };

  const handleFocusMatchPassword = () => {
    dispatch(setFocus('matchpasswordfocused'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
    dispatch(register());
  };

  return (
    <form
      className="registration"
      onSubmit={handleSubmit}
      action="/path/to/api"
      method="POST"
      encytpe="ENCTYPE_HERE"
    >
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
            name="pseudo"
            pattern="^[A-Za-z0-9]{3,16}$"
            onFocus={handleFocusPseudo}
          />
        </label>
        {pseudofocused
        && <span className="registration-error">{errormessagePseudo}</span>}
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
            name="email"
            onBlur={handleFocusEmail}
          />
        </label>

        <span className="registration-error">{errormessageEmail}</span>
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
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$"
            onBlur={handleFocusPassword}
          />
        </label>
        <span className="registration-error">{errormessagePassword}</span>
      </div>
      <div className="registration-field">
        <label
          htmlFor="confirmedpassword"
          className="registration-label"
        >
          Confirmation du mot de passe *
          <input
            placeholder="*****"
            type="password"
            id="confirmedpassword"
            value={confirmedPassword}
            required
            className="registration-input"
            size="28"
            onChange={handleconfirmedPasswordChange}
            name="confirmedpassword"
            onBlur={handleFocusMatchPassword}
          />
        </label>
        <span className="registration-error">{errormessagePasswordMatch}</span>
      </div>
      <button type="submit" className="registration-submit">Valider</button>
    </form>
  );
}

export default Register;
