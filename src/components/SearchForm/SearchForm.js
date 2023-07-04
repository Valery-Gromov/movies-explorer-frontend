import searchButton from '../../images/searchButton.svg';

function SearchForm(props) {
  const { handleChange, handleSearchSubmit, hadleDurationFilter, checked} = props;


  return (
    <form className="search-form section" onSubmit={handleSearchSubmit}>
      <label className='search-form__text-container'>
        <input name='text' className="search-form__text-input" type="text" placeholder="Фильм" required onChange={handleChange} />
        <button className="search-form__button">
          <img src={searchButton} alt='кнопка поиска' />
        </button>
      </label>
      <label className='search-form__checkbox-container'>
        <span className='search-form__checkbox-title'>Короткометражки</span>
        <input name='checkbox' checked={checked} onChange={hadleDurationFilter} className="search-form__checkbox-input" type="checkbox" />
        <span className='search-form__image' />
      </label>
    </form>
  );
}

export default SearchForm;