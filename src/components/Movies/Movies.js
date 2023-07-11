import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import ShowMore from "../ShowMore/ShowMore";
import React, { useState } from 'react';
import { textFilter } from "../../utils/moviesFilters";
import { durationFilter } from "../../utils/moviesFilters";
import preloader from '../../images/preloader.gif'


function Movies(props) {
  const { cards, handleCardLike, savedMovies } = props;

  const [formValue, setFormValue] = useState({});
  const [cardsToList, setCardsToList] = useState([]);
  const [checked, setChecked] = useState(true);
  const [visible, setVisible] = useState(3);
  const [preloaderVisible, setPreloaderVisible] = useState(false);

  const hadleDurationFilter = () => {
    setPreloaderVisible(true);
    setChecked(!checked);

    if (checked) {
      const filteredCards = durationFilter(cardsToList);
      setCardsToList(filteredCards);
    } else {
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
    setPreloaderVisible(true);
    const { text } = formValue;

    const filteredCards = textFilter(cards, text);
    setCardsToList(filteredCards);
    setPreloaderVisible(false);
  }

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    handleTextFilter();
  }

  const handleShowMore = () => {
    setVisible((prevValue) => prevValue + 3);
  }


  return (
    <div className="movies">
      <div className="wrapper-movies">
        <SearchForm handleChange={handleChange} hadleDurationFilter={hadleDurationFilter} checked={checked} handleSearchSubmit={handleSearchSubmit} />
        <section className="movies__container section">
          {cardsToList.length === 0 && (<span>Вы пока ничего не искали. Введите название или описание фильма, чтобы начать поиск</span>)}
          <img src={preloader} className={preloaderVisible ? 'preloader preloader_active' : 'preloader'} alt='иконка загрузки' />
          {
            cardsToList.slice(0, visible).map(card => {
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
