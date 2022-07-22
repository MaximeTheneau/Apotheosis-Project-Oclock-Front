import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general">
        <form className="form-pseudo">
          <input className="pseudo-input" type="text" placeholder="Votre Pseudo" value="" />
        </form>
        <form className="form-email">
          <input className="email-input" type="email" placeholder="Votre E-mail" value="" />
        </form>
        <form className="form-sujet">
          <input className="sujet-input" type="text" placeholder="Sujet" value="" />
        </form>
        <form className="form-message">
          <input className="message-input" type="text" placeholder="Votre Message" value="" />
        </form>
        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
