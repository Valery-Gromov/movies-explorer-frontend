import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect, useState } from 'react';
import { textFilter } from "../../utils/moviesFilters";
import { durationFilter } from "../../utils/moviesFilters";
import SavedCard from "../SavedCard/SavedCard";


function SavedMovies(props) {
  const { cards, deleteCard } = props;

  const [formValue, setFormValue] = useState({});
  const [cardsToList, setCardsToList] = useState([]);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setCardsToList(cards)
  }, [cards])

  const hadleDurationFilter = () => {
    if (checked) {
      setChecked(false);
      const filteredCards = durationFilter(cardsToList);
      setCardsToList(filteredCards);
    } else {
      setChecked(true);
      setCardsToList(cards);
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleTextFilter = () => {
    const { text } = formValue;

    const filteredCards = textFilter(cards, text);
    setCardsToList(filteredCards);
  }

  const handleSearchSubmit = () => {
    handleTextFilter()
  }

  return (
    <div className="saved-movies">
      <div className="wrapper-saved-movies">
        <SearchForm handleChange={handleChange} hadleDurationFilter={hadleDurationFilter} checked={checked} handleSearchSubmit={handleSearchSubmit} formValue={formValue} />
        <section className="saved-movies__container section">
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
