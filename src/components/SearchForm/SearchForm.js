import searchButton from '../../images/searchButton.svg'

function SearchForm() {
  return (
    <form className="search-form section">
      <label className='search-form__text-container'>
        <input className="search-form__text-input" type="text" placeholder="Фильм" />
        <button className="search-form__button">
          <img src={searchButton} alt='кнопка поиска' />
        </button>
      </label>
      <label className='search-form__checkbox-container'>
        <span className='search-form__checkbox-title'>Короткометражки</span>
        <input className="search-form__checkbox-input" type="checkbox" />
        <span className='search-form__image' />
      </label>
    </form>
  );
}

export default SearchForm;