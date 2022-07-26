import { useDispatch, useSelector } from 'react-redux';
import { pseudoAction } from '../../../action/contact';
import './styles.scss';

function Contact() {
  const dispatch = useDispatch();
  const valuePseudo = useSelector((state) => state.pseudo);

  const handleChange = ((event) => {
    dispatch(pseudoAction(event.target.value), 'pseudo');
  });
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general">

        <label htmlFor="pseudo">
          <input
            className="pseudo-input"
            type="text"
            placeholder="Votre Pseudo"
            value={valuePseudo}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Votre E-mail"
          />
        </label>
        <label htmlFor="topic">
          <input
            className="topic-input"
            type="text"
            id="topic"
            placeholder="Sujet"

          />
        </label>
        <label htmlFor="message">
          <input
            className="message-input"
            type="text"
            id="message"
            placeholder="Votre Message"

          />
        </label>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
