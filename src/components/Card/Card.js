import cardImage from '../../images/CardImage.png'
import cardSaved from '../../images/cardSaved.svg'

function Card() {
  return (
    <div className="card">
      <img className="card__image" src={cardImage} alt='Изображение на карточке' />
      <div className='card__content'>
        <div className="card__container">
          <h2 className="card__title">33 слова о дизайне</h2>
          <img className="card__like" src={cardSaved} alt='Кнопка лайка' />
        </div>
        <span className="card__duration">1ч 47м</span>
      </div>
    </div>
  );
}

export default Card;