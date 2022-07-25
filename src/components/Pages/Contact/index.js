import { useDispatch, useSelector } from 'react-redux';
import { setNewContactMsgContent } from '../../../action/contact';
import './styles.scss';

function Contact() {
  const { pseudo } = useSelector((state) => state.settings);
  const inputValue = useSelector((state) => state.currentMessageContactValue);
  const dispatch = useDispatch();

  const handlePseudoChange = (event) => {
    dispatch(setNewContactMsgContent(event.curentTarget.value, 'pseudo'));
  };

  const handleSubmit = () => {
    dispatch();
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general" onSubmit={handleSubmit}>

        <label htmlFor="pseudo">
          <input
            className="pseudo-input"
            type="text"
            id="pseudo"
            placeholder="Votre Pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Votre E-mail"
            // value={inputValue}
            // onChange={handleOnChange}
          />
        </label>
        <label htmlFor="topic">
          <input
            className="topic-input"
            type="text"
            id="topic"
            placeholder="Sujet"
            // value={inputValue}
            // onChange={handleOnChange}
          />
        </label>
        <label htmlFor="message">
          <input
            className="message-input"
            type="text"
            id="message"
            placeholder="Votre Message"
            // value={inputValue}
            // onChange={handleOnChange}
          />
        </label>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
