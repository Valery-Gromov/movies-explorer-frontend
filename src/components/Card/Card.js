import cardSaved from '../../images/cardSaved.svg';
import likeDefault from '../../images/like-default.svg';
import React from "react";

function Card(props) {
  const { card, handleCardLike, savedMovies } = props;

  const handleCardClick = (e) => {
    e.preventDefault();
    handleCardLike(card)
  }

  const isLiked = savedMovies.some(movie => movie.movieId === card.id);

  return (
    <a className="card" href={card.trailerLink}  target='_blanck' >
      <img className="card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt='The image on the card' />
      <div className='card__content'>
        <div className="card__container">
          <h2 className="card__title">{card.nameRU}</h2>
          <button className="card__like" onClick={handleCardClick}>
            <img src={!isLiked ? likeDefault : cardSaved} alt='Like button' />
          </button>
        </div>
        <span className="card__duration">{`${(card.duration - card.duration % 60) / 60} h. ${card.duration % 60} min.`}</span>
      </div>
    </a>
  );
}

export default Card;