import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import ShowMore from "../ShowMore/ShowMore";


function Movies() {
  return (
    <div className="movies">
      <div className="wrapper-movies">
        <SearchForm />
        <div className="movies__container section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <ShowMore />
      </div>
    </div>
  );
}

export default Movies;
