import cardSaved from '../../images/cardSaved.svg';
import likeDefault from '../../images/like-default.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useEffect, useState } from "react";
import cardDeleteBtn from '../../images/cardDeleteBtn.svg'

function SavedCard(props) {
  const { card, deleteCard } = props;

  const handleCardClick = (e) => {
    e.preventDefault();
    deleteCard(card)
  }

  return (
    <a className="card" href={card.trailerLink}  target='_blanck'>
      <img className="card__image" src={card.image} alt='Изображение на карточке' />
      <div className='card__content'>
        <div className="card__container">
          <h2 className="card__title">{card.nameRU}</h2>
          <button className="card__like" onClick={handleCardClick}>
            <img src={cardDeleteBtn} alt='Кнопка удаления карточки' />
          </button>
        </div>
        <span className="card__duration">{`${card.duration} мин.`}</span>
      </div>
    </a>
  );
}

export default SavedCard;