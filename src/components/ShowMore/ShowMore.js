function ShowMore(props) {
  const { handleShowMore, cardsToList, visible } = props;

  return (
    <div className="wrapper">
      {cardsToList !== null &&
      (<section className={cardsToList.length < visible ? "show-more section show-more_none" : "show-more section" } >
        <button className="show-more__button" onClick={handleShowMore} >More</button>
      </section>)}
    </div>
  );
}

export default ShowMore;