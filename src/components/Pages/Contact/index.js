import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general">
        <form className="form-pseudo">
          <input className="pseudo-input" type="text" placeholder="Votre Pseudo" value="okpseudo" />
        </form>
        <form className="form-email">
          <input className="email-input" type="email" placeholder="Votre E-mail" value="okemail" />
        </form>
        <form className="form-sujet">
          <input className="topic-input" type="text" placeholder="Sujet" value="oksujet" />
        </form>
        <form className="form-message">
          <input className="message-input" type="text" placeholder="Votre Message" value="okmessage" />
        </form>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
