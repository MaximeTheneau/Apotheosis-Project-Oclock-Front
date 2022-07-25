import { useDispatch, useSelector } from 'react-redux';
import { setNewContactMsgContent } from '../../../action/contact';
import './styles.scss';

function Contact() {
  const inputValue = useSelector((state) => state.currentMessageContactValue);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setNewContactMsgContent(event.curentTarget.value, 'search'));
  };

  const handleSubmit = () => {
    dispatch();
  };
  // suppr label
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general" onSubmit={handleSubmit}>
        <input
          className="pseudo-input"
          type="text"
          placeholder="Votre Pseudo"
          value={inputValue}
          onChange={handleOnChange}
        />
        <input
          className="email-input"
          type="email"
          placeholder="Votre E-mail"
          value={inputValue}
          onChange={handleOnChange}
        />
        <input
          className="topic-input"
          type="text"
          placeholder="Sujet"
          value={inputValue}
          onChange={handleOnChange}
        />
        <input
          className="message-input"
          type="text"
          placeholder="Votre Message"
          value={inputValue}
          onChange={handleOnChange}
        />
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
