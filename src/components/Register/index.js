import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setRegistrationcredentials, register, setErrorMessage } from '../../action/user';
import { Link } from 'react-router-dom';

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
      <div className="createdRecipe-label">
        <span
          className="label-title"
          htmlFor="pseudo"
        >
          Pseudo *
        </span>
        <input
          placeholder="Chef O'miam"
          type="pseudo"
          id="pseudo"
          value={pseudo}
          required
          onChange={handlePseudoChange}
          name="pseudo"
        />
      </div>
      <div className="createdRecipe-label">
        <span
          htmlFor="email"
          className="label-title"
        >
          Email *
        </span>
        <input
          placeholder="email@omiam.com"
          type="email"
          id="email"
          value={email}
          required
          onChange={handleEmailChange}
          name="email"
          //pattern="/\S+@\S+\.\S+/"
        />
      </div>
      <div className="createdRecipe-label">
        <span className="label-title">Votre avatar</span>
        <input
          type="file"
          id="fileUploadUser"
        />
      </div>
      <div className="createdRecipe-label">
        <span
          className="label-title"
        >
          Mot de passe *
        </span>
        <input
          placeholder="*****"
          type="password"
          id="password"
          value={password}
          required
          onChange={handlePasswordChange}
          name="password"
          //pattern="/^[A-Za-z0-9!@#$%]{8,24}$/"
        />
      </div>
      <div className="createdRecipe-label">
        <span
          htmlFor="confirmedpassword"
          className="label-title"
        >
          Confirmation du mot de passe *
        </span>
        <input
          placeholder="*****"
          type="password"
          id="confirmedpassword"
          value={confirmedPassword}
          onChange={handleconfirmedPasswordChange}
          name="confirmedpassword"
          // pattern={password}
          required
        />
      </div>
      <div className="registration-label-cgu">
        <input
          type="checkbox"
          required
        />
        <span>
          J'accepte les
          <Link to="/conditions-generales-utilisation" className="registration-label-cgu-link">
            Conditions Générales d'Utilisation
          </Link>
        </span>
      </div>
      <span className="registration-legends">* champs obligatoires</span>
      <button type="submit" className="registration-submit">Valider</button>
    </form>
  );
}

export default Register;
