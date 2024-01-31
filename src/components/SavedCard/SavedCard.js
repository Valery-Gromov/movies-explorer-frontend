import React from "react";
import cardDeleteBtn from '../../images/cardDeleteBtn.svg'

function SavedCard(props) {
  const { card, deleteCard } = props;

  const handleCardClick = (e) => {
    e.preventDefault();
    deleteCard(card)
  }

  return (
    <a className="card" href={card.trailerLink}  target='_blanck'>
      <img className="card__image" src={card.image} alt='The image on the card' />
      <div className='card__content'>
        <div className="card__container">
          <h2 className="card__title">{card.nameRU}</h2>
          <button className="card__like" onClick={handleCardClick}>
            <img src={cardDeleteBtn} alt='The card deletion button' />
          </button>
        </div>
        <span className="card__duration">{`${(card.duration - card.duration % 60) / 60} h. ${card.duration % 60} min.`}</span>
      </div>
    </a>
  );
}

export default SavedCard;