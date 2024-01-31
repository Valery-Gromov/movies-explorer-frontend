import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import ShowMore from "../ShowMore/ShowMore";
import React, { useEffect, useState } from 'react';
import { textFilter } from "../../utils/moviesFilters";
import { durationFilter } from "../../utils/moviesFilters";
import preloader from '../../images/preloader.gif'


function Movies(props) {
  const { cards, handleCardLike, savedMovies } = props;

  let textToStorage = '';
  let textFromLocalStorage = '';
  let jsonCardsFromLocalStorage = '';
  let arrayCardsFromLocalStorage = [];
  let checkedStringFromLocalStorage = '';
  let checkedFromLocalStorage = false;
  let checkedToStorage = false;

  const [cardsToList, setCardsToList] = useState([]);
  const [formValue, setFormValue] = useState([]);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(12);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [startFilter, setStartFilter] = useState(false);
  const [showEmptyListMessage, setShowEmptyListMessage] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);


  // рендер начального состояния
  useEffect(() => {
    // рендер кнопки checked
    checkedStringFromLocalStorage = localStorage.getItem('checked');
    checkedFromLocalStorage = JSON.parse(checkedStringFromLocalStorage);
    setChecked(checkedFromLocalStorage);

    // рендер текста поиска
    textFromLocalStorage = localStorage.getItem('text');
    setFormValue({
      text: textFromLocalStorage
    });

    // рендер карточек
    if (cardsToList !== null) {
      setCardsToList(JSON.parse(localStorage.getItem('cardsToList')));
      jsonCardsFromLocalStorage = localStorage.getItem('cardsToList');
      arrayCardsFromLocalStorage = JSON.parse(jsonCardsFromLocalStorage);
      arrayCardsFromLocalStorage !== null && setShowWelcomeMessage(false);
    }

    // рендер количества карточек
    handleVisible();
  }, []);

  // Фильтр
  useEffect(() => {

    if (startFilter) {
      setPreloaderVisible(true);
      let cardsToRender = handleTextFilter();

      if (checked) {
        cardsToRender = hadleDurationFilter(cardsToRender);
      }

      localStorage.setItem('cardsToList', JSON.stringify(cardsToRender));
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
    textToStorage = text;
    localStorage.setItem('text', textToStorage);
    const filteredCards = textFilter(cards, text);

    return filteredCards;
  }

  const handleSearchSubmit = () => {
    setShowWelcomeMessage(false);
    setStartFilter(true);
  }

  const handleDurationButton = () => {
    checkedToStorage = !checked;
    setChecked(!checked);
    setStartFilter(true);
    localStorage.setItem('checked', checkedToStorage)
  }

  const handleVisible = () => {
    if (window.screen.width < 450) {
      setVisible(6);
    } else if (window.screen.width < 769) {
      setVisible(8);
    } else {
      setVisible(12);
    }
  }

  const handleShowMore = () => {
    if (window.screen.width < 450) {
      setVisible((prevValue) => prevValue + 1);
    } else if (window.screen.width < 769) {
      setVisible((prevValue) => prevValue + 2);
    } else {
      setVisible((prevValue) => prevValue + 3);
    }
  }


  return (
    <div className="movies">
      <div className="wrapper-movies">
        <SearchForm handleDurationButton={handleDurationButton} checked={checked} handleSearchSubmit={handleSearchSubmit} formValue={formValue} />
        <section className="movies__container section">
          {showWelcomeMessage && (<span>You haven't searched for anything yet. Enter the title or description of the movie to start the search</span>)}
          {showEmptyListMessage && (<span>Nothing was found for your query</span>)}

          <img src={preloader} className={preloaderVisible ? 'preloader preloader_active' : 'preloader'} alt='иконка загрузки' />
          {
            cardsToList !== null && cardsToList.slice(0, visible).map(card => {
              return (<Card card={card} key={card.id} handleCardLike={handleCardLike} savedMovies={savedMovies} />)
            })
          }
        </section>
        <ShowMore handleShowMore={handleShowMore} cardsToList={cardsToList} visible={visible} />
      </div>
    </div>
  );
}

export default Movies;

