import { useSelector } from 'react-redux';
import './styles.scss';

function Main() {
  const recipes = useSelector((state) => state.homePage);
  console.log(recipes);
  return (
    <div className="main">
    </div>
  );
}

export default Main;
