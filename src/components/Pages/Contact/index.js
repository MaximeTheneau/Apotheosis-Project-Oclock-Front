import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-pseudo">
        <input className="pseudo-input" type="text" placeholder="Votre Pseudo" />
      </form>
      <form className="form-email">
        <input className="email-input" type="text" placeholder="Votre E-mail" />
      </form>
      <form className="form-sujet">
        <input className="sujet-input" type="text" placeholder="Sujet" />
      </form>
      <form className="form-message">
        <input className="message-input" type="text" placeholder="Votre Message" />
      </form>
      <button className="send-button" type="submit">Envoyer</button>
    </div>
  );
}

export default Contact;
