import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, commentAction, commentCreated } from '../../../action/oneRecipe';
import './styles.scss';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.oneRecipe.comments);
  const valueComment = useSelector((state) => state.comment);
  const handleChangeComment = ((event) => {
    dispatch(commentAction(event.target.value, 'commentValue'));
  });
  const handleSubmit = ((event) => {
    event.preventDefault();
    dispatch(commentCreated());
  });
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  return (
    <div className="one-recipe-comments">
      <ul className="one-recipe-comments-ul">
        <li><h2 className="one-recipe-comments-title">Commentaires</h2></li>
        {comments.map((item) => (
          <>
            <li><i className="icon-cook" /></li>
            <li><span>{item.user.pseudo}</span></li>
            <li><p>{item.content}</p></li>
          </>
        ))}
      </ul>
      <div className="one-recipe-comment">
        <h2 className="one-recipe-comment-title">Laissez un commentaire</h2>
        <form
          className="one-recipe-form"
          onSubmit={handleSubmit}
        >
          <textarea
            className="one-recipe-comment-textarea"
            type="text"
            rows="4"
            placeholder="Commentaire"
            value={valueComment}
            onChange={handleChangeComment}
          />
          <button className="one-recipe-comment-send-button" type="submit">
            <i className="icon-oven" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
