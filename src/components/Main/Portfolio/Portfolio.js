import linkArrow from '../../../images/linkArrow.svg';

function Portfolio() {
    return (
        <div className="wrapper">
            <section className="portfolio section">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__content">
                    <li>
                        <a className="portfolio__link" href='https://valery-gromov.github.io/how-to-learn/' target='_blanck'>
                            <p className="portfolio__link-name">
                                Статичный сайт
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='стрелка' />
                        </a>
                    </li>
                    <li>
                        <a className="portfolio__link" href='https://valery-gromov.github.io/russian-travel/' target='_blanck'>
                            <p className="portfolio__link-name">
                                Адаптивный сайт
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='стрелка' />
                        </a>
                    </li>
                    <li>
                        <a className="portfolio__link" href='https://github.com/Valery-Gromov/react-mesto-api-full-gha' target='_blanck' >
                            <p className="portfolio__link-name">
                                Одностраничное приложение
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='стрелка' />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Portfolio;