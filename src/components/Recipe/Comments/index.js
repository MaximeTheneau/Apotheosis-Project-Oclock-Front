import './styles.scss';

function Comments() {
  return (
    <div className="one-recipe-comments">
      <ul className="one-recipe-comments-ul">
        <li><h2 className="one-recipe-comments-title">Commentaires</h2></li>
        <li><i className="icon-cook" /></li>
        <li><span>Pseudo utilisateur</span></li>
        <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p></li>
      </ul>
      <div className="one-recipe-comment">
        <textarea className="one-recipe-comment-textarea" />
        <div className="one-recipe-comment-send-button">
          <i className="icon-oven" />
        </div>
      </div>
    </div>
  );
}

export default Comments;
