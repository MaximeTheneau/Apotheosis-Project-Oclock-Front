import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setRegistrationcredentials, register, setErrorMessage } from '../../action/user';

function Register() {
  const {
    pseudo, email, password, confirmedPassword, errors,
  } = useSelector((state) => state.user.settingsRegister);

  const {
    errormessagePseudo, errormessageEmail,
    errormessagePassword, errormessagePasswordMatch, pseudoUser,
  } = useSelector((state) => state.user.settingsRegister.signinError);
  const dispatch = useDispatch();
  console.log(pseudoUser, errormessagePseudo);
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

  const pseudoRegex = /^[A-Za-z0-9]{3,16}$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^[A-Za-z0-9!@#$%]{8,24}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));

    if (!data.pseudo) {
      dispatch(setErrorMessage('pseudo', 'Champ obligatoire'));
    } else if (!pseudoRegex.test(data.pseudo)) {
      dispatch(setErrorMessage('pseudo', 'Pseudo est incorrect'));
    }
    if (!data.email) {
      dispatch(setErrorMessage('email', 'Champ obligatoire'));
    } else if (!emailRegex.test(data.email)) {
      dispatch(setErrorMessage('email', 'Adresse email incorrecte'));
    }
    if (!data.password) {
      dispatch(setErrorMessage('password', 'Champ obligatoire'));
    } else if (!passwordRegex.test(data.password)) {
      dispatch(setErrorMessage('password', 'Mot de passe invalide. Doit contenir entre 8 et 20 caractères et inclure au minimum: 1 lettre, 1 chiffre et 1 caractère spécial'));
    }
    if (!data.confirmedPassword) {
      dispatch(setErrorMessage('confirmedPassword', 'Champ obligatoire'));
    } else if (data.password !== data.confirmedPassword) {
      dispatch(setErrorMessage('confirmedPassword', 'Le mot de passe ne correspond pas'));
    }
    const { formIsValid } = useSelector((state) => state.user.settingsRegister);
    if (formIsValid) {
      dispatch(register());
    }
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
            pattern="/^[A-Za-z0-9]{3,16}$/"
          />
        </label>
        {pseudo
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
            pattern="/\S+@\S+\.\S+/"
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
            pattern="/^[A-Za-z0-9!@#$%]{8,24}$/"
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
            pattern={password}
          />
        </label>
        <span className="registration-error">{errormessagePasswordMatch}</span>
      </div>
      <button type="submit" className="registration-submit">Valider</button>
    </form>
  );
}

export default Register;
