import './styles.scss';

function Contact() {

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>
      <form className="form-general">

        <label htmlFor="pseudo">
          <input
            className="pseudo-input"
            type="text"
            id="pseudo"
            placeholder="Votre Pseudo"
            //onChange={}

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
