import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect, useState } from 'react';
import { textFilter } from "../../utils/moviesFilters";
import { durationFilter } from "../../utils/moviesFilters";
import SavedCard from "../SavedCard/SavedCard";
import preloader from '../../images/preloader.gif'


function SavedMovies(props) {
  const { cards, deleteCard } = props;

  const [cardsToList, setCardsToList] = useState([]);
  const [formValue, setFormValue] = useState([]);
  const [checked, setChecked] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [startFilter, setStartFilter] = useState(false);
  const [showEmptyListMessage, setShowEmptyListMessage] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    // рендер карточек
    if (cards !== null) {
      setCardsToList(cards);
      setShowWelcomeMessage(false);
    }

  }, [cards]);

  useEffect(() => {

    if (startFilter) {
      setPreloaderVisible(true);
      let cardsToRender = handleTextFilter();
      if (checked) {
        cardsToRender = hadleDurationFilter(cardsToRender);
      }
      setCardsToList(cardsToRender);
      cardsToRender.length === 0 ? setShowEmptyListMessage(true) : setShowEmptyListMessage(false);
      setStartFilter(false)
    } else {
      return
    }

    setPreloaderVisible(false);
  }, [startFilter]);

  const hadleDurationFilter = (cardsToFilter) => {
    const filteredCards = durationFilter(cardsToFilter);

    return filteredCards;
  }

  const handleTextFilter = () => {
    const { text } = formValue;
    const filteredCards = textFilter(cards, text);

    return filteredCards;
  }

  const handleSearchSubmit = () => {
    setShowWelcomeMessage(false);
    setStartFilter(true);
  }

  const handleDurationButton = () => {
    setChecked(!checked);
    setStartFilter(true);
  }

  return (
    <div className="saved-movies">
      <div className="wrapper-saved-movies">
        <SearchForm hadleDurationFilter={hadleDurationFilter} checked={checked} handleSearchSubmit={handleSearchSubmit} handleDurationButton={handleDurationButton} formValue={formValue} />
        <section className="saved-movies__container section">
          {showWelcomeMessage && (<span>Вы пока ничего не искали. Введите название или описание фильма, чтобы начать поиск</span>)}
          {showEmptyListMessage && (<span>По вашему запросу ничего не найдено</span>)}
          <img src={preloader} className={preloaderVisible ? 'preloader preloader_active' : 'preloader'} alt='иконка загрузки' />
          {(
            cardsToList.map(card => {
              return (<SavedCard card={card} key={card._id} deleteCard={deleteCard} />)
            })
          )}
        </section>
      </div>
    </div>
  );
}

export default SavedMovies;
