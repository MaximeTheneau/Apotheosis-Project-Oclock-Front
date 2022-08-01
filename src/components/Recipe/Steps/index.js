import './styles.scss';

function Steps() {
  return (
    <div className="one-recipe-steps">
      <ul className="one-recipe-steps-ul">
        <li><h2 className="one-recipe-steps-title">{item.steps}</h2></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape1}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape2}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape3}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape4}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape5}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape6}</p></li>
        <li><p className="one-recipe-steps-etape">{item.steps.etape7}</p></li>
      </ul>
    </div>
  );
}

export default Steps;
