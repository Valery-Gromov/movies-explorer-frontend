import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import ShowMore from "../ShowMore/ShowMore";


function Movies() {
  return (
    <div className="movies">
      <div className="wrapper-movies">
        <SearchForm />
        <section className="movies__container section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <ShowMore />
      </div>
    </div>
  );
}

export default Movies;
