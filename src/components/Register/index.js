import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setRegistrationcredentials, register, setFocus } from '../../action/user';

function Register() {
  const {
    pseudo, email, password, confirmedPassword,
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

  const handleValidation = () => {
    const fields = useSelector((state) => state.user.settingsRegister);
    const errors = useSelector((state) => state.user.settingsRegister);
    const formIsValid = useSelector((state) => state.user.settingsRegister);

    //Pseudo
    if (!fields.pseudo) {
      formIsValid = false;
      errors.pseudo = 'Champ Obligatoire';
    }

    if (typeof fields.pseudo !== 'undefined') {
      if (!fields.pseudo.match(/^[A-Za-z0-9]{3,16}$/)) {
        formIsValid = false;
        errors.pseudo = 'Pseudo invalide. Doit contenir 2 charactères au minimum.';
      }
    }

    //Email
    if (!fields.email) {
      formIsValid = false;
      errors.email = 'Champ Obligatoire';
    }

    if (typeof fields.email !== 'undefined') {
      if (!fields.email.match(/\S+@\S+\.\S+/)) {
        formIsValid = false;
        errors.email = 'Adresse email incorrecte, veuillez respecter le format: johnDoe@gmail.com.';
      }
    }

    //Password
    if (!fields.password) {
      formIsValid = false;
      errors.password = 'Champ Obligatoire';
    }

    if (typeof fields.password !== 'undefined') {
      if (!fields.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)) {
        formIsValid = false;
        errors.password = 'Mot de passe invalide. Doit contenir entre 8 et 20 caractères et inclure au minimum: 1 lettre, 1 chiffre et 1 caractère spécial';
      }
    }

    //MatchPassword
    if (!fields.confirmedPassword) {
      formIsValid = false;
      errors.confirmedPassword = 'Champ Obligatoire';
    }

    if (typeof fields.confirmedPassword !== 'undefined') {
      if (!fields.confirmedPassword !== fields.password) {
        formIsValid = false;
        errors.confirmedPassword = 'Mot de passe invalide. Doit contenir entre 8 et 20 caractères et inclure au minimum: 1 lettre, 1 chiffre et 1 caractère spécial';
      }
    }
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
            name="pseudoUser"
            pattern="^[A-Za-z0-9]{3,16}$"
          />
        </label>
        {pseudoUser
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
