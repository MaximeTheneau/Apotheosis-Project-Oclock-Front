import { useDispatch, useSelector } from 'react-redux';
import {
  emailAction,
  pseudoAction,
  topicAction,
  messageAction,
} from '../../../action/contact';
import './styles.scss';

function Contact() {
  const dispatch = useDispatch();
  const valuePseudo = useSelector((state) => state.pseudo);
  const valueEmail = useSelector((state) => state.email);
  const valueTopic = useSelector((state) => state.topic);
  const valueMessage = useSelector((state) => state.message);

  const handleChangePseudo = ((event) => {
    dispatch(pseudoAction(event.target.value, 'pseudo'));
  });
  const handleChangeEmail = ((event) => {
    dispatch(emailAction(event.target.value, 'email'));
  });
  const handleChangeTopic = ((event) => {
    dispatch(topicAction(event.target.value, 'topic'));
  });
  const handleChangeMessage = ((event) => {
    dispatch(messageAction(event.target.value, 'message'));
  });
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>

      <form className="form-general">

        <div className="label">
          <input
            className="pseudo-input"
            type="text"
            placeholder="Votre Pseudo"
            value={valuePseudo}
            onChange={handleChangePseudo}
          />
        </div>
        <div className="label">
          <input
            className="email-input"
            type="email"
            placeholder="Votre E-mail"
            value={valueEmail}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="label">
          <input
            className="topic-input"
            type="text"
            placeholder="Sujet"
            value={valueTopic}
            onChange={handleChangeTopic}
          />
        </div>
        <div className="label label-message">
          <input
            className="message-input"
            type="text"
            placeholder="Votre Message"
            value={valueMessage}
            onChange={handleChangeMessage}
          />
        </div>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
