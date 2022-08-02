import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../../action/oneRecipe';
import './styles.scss';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.oneRecipe.comments);
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
        <textarea className="one-recipe-comment-textarea" />

        <div className="one-recipe-comment-send-button">
          <i className="icon-oven" />
        </div>
      </div>
    </div>
  );
}

export default Comments;
