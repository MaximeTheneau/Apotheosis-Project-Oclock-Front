import { useDispatch, useSelector } from 'react-redux';
import { setNewContactMsgContent } from '../../../action/contact';
import './styles.scss';

function Contact() {
  const inputValue = useSelector((state) => state.currentMessageContactValue);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setNewContactMsgContent(event.curentTarget.value));
  };

  const handleSubmit = () => {
    dispatch();
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general" onSubmit={handleSubmit}>
        <label htmlFor="label-pseudo">
          <input
            className="pseudo-input"
            type="text"
            id="pseudo"
            placeholder="Votre Pseudo"
            value={inputValue}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="label-email">
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Votre E-mail"
            value={inputValue}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="label-sujet">
          <input
            className="topic-input"
            type="text"
            id="topic"
            placeholder="Sujet"
            value={inputValue}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="label-message">
          <input
            className="message-input"
            type="text"
            id="message"
            placeholder="Votre Message"
            value={inputValue}
            onChange={handleOnChange}
          />
        </label>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
