import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import ShowMore from "../ShowMore/ShowMore";
import React, { useEffect, useState } from 'react';
import { textFilter } from "../../utils/moviesFilters";
import { durationFilter } from "../../utils/moviesFilters";
import preloader from '../../images/preloader.gif'


function Movies(props) {
  const { cards, handleCardLike, savedMovies } = props;

  let textFromLocalStorage = '';
  let jsonCardsFromLocalStorage = '';
  let arrayCardsFromLocalStorage = [];
  let checkedStringFromLocalStorage = '';
  let checkedFromLocalStorage = false;


  const [formValue, setFormValue] = useState({
    text: ''
  });
  const [cardsToList, setCardsToList] = useState([]);
  const [checked, setChecked] = useState(true);
  const [visible, setVisible] = useState(12);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [startFilter, setStartFilter] = useState(false);
  const [showEmptyListMessage, setShowEmptyListMessage] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {

      if (arrayCardsFromLocalStorage === null ) {
        setCardsToList([]);
        setShowWelcomeMessage(true)
      } else {
        setShowWelcomeMessage(false);
        textFromLocalStorage = localStorage.getItem('text');

        jsonCardsFromLocalStorage = localStorage.getItem('cardsToList');
        arrayCardsFromLocalStorage = JSON.parse(jsonCardsFromLocalStorage);

        setFormValue({
          text: textFromLocalStorage
        })
        setCardsToList(arrayCardsFromLocalStorage);

        setStartFilter(false)
      }

  }, [startFilter, checked]);

  useEffect(() => {
    handleVisible();
    setChecked(checkedFromLocalStorage);
  }, []);

  const handleVisible = () => {
    if (window.screen.width < 450) {
      setVisible(6);
    } else if (window.screen.width < 769) {
      setVisible(8);
    } else {
      setVisible(12);
    }
  }

  const hadleDurationFilter = () => {
    setPreloaderVisible(true);
    setChecked(!checked);
    setStartFilter(!startFilter);

    if (checked) {
      localStorage.setItem('checked', JSON.stringify(checked));
      checkedStringFromLocalStorage = localStorage.getItem('checked');
      checkedFromLocalStorage = JSON.parse(checkedStringFromLocalStorage);

      const filteredCards = durationFilter(cardsToList);
      setCardsToList(filteredCards);
      localStorage.setItem('cardsToList', JSON.stringify(filteredCards));

    } else {
      localStorage.setItem('checked', JSON.stringify(checked));
      checkedStringFromLocalStorage = localStorage.getItem('checked');
      checkedFromLocalStorage = JSON.parse(checkedStringFromLocalStorage);
      handleTextFilter();
    }

    setPreloaderVisible(false);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleTextFilter = () => {
    setStartFilter(true);
    setPreloaderVisible(true);
    const { text } = formValue;

    const filteredCards = textFilter(cards, text);
    filteredCards.length === 0 ? setShowEmptyListMessage(true) : setShowEmptyListMessage(false);
    console.log(filteredCards);
    localStorage.setItem('cardsToList', JSON.stringify(filteredCards));

    setPreloaderVisible(false);
  }

  const handleSearchSubmit = () => {
    setShowWelcomeMessage(false)
    setStartFilter(true);
    handleTextFilter();
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
        <SearchForm handleChange={handleChange} hadleDurationFilter={hadleDurationFilter} checked={checked} handleSearchSubmit={handleSearchSubmit} formValue={formValue} />
        <section className="movies__container section">
          {showWelcomeMessage && (<span>Вы пока ничего не искали. Введите название или описание фильма, чтобы начать поиск</span>)}
          {showEmptyListMessage && (<span>По вашему запросу ничего не найдено. Попробуйте ввести другой текст</span>)}

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

