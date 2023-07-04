import cardSaved from '../../images/cardSaved.svg';
import likeDefault from '../../images/like-default.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useEffect, useState } from "react";
import SavedCard from '../SavedCard/SavedCard';

function Card(props) {
  const { card, handleCardLike, savedMovies } = props;

  const handleCardClick = () => {
    handleCardLike(card)
  }

  const isLiked = savedMovies.some(movie => movie.movieId === card.id);

  return (
    <div className="card">
      <img className="card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt='Изображение на карточке' />
      <div className='card__content'>
        <div className="card__container">
          <h2 className="card__title">{card.nameRU}</h2>
          <button className="card__like" onClick={handleCardClick}>
            <img src={!isLiked ? likeDefault : cardSaved} alt='Кнопка лайка' />
          </button>
        </div>
        <span className="card__duration">{`${card.duration} мин.`}</span>
      </div>
    </div>
  );
}

export default Card;