import linkArrow from '../../../images/linkArrow.svg';

function Portfolio() {
    return (
        <div className="wrapper">
            <section className="portfolio section">
                <h2 className="portfolio__title">Portfolio</h2>
                <ul className="portfolio__content">
                    <li>
                        <a className="portfolio__link" href='https://valery-gromov.github.io/how-to-learn/' target='_blanck'>
                            <p className="portfolio__link-name">
                                Static website
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='arrow' />
                        </a>
                    </li>
                    <li>
                        <a className="portfolio__link" href='https://valery-gromov.github.io/russian-travel/' target='_blanck'>
                            <p className="portfolio__link-name">
                                Adaptive website
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='arrow' />
                        </a>
                    </li>
                    <li>
                        <a className="portfolio__link" href='https://github.com/Valery-Gromov/react-mesto-api-full-gha' target='_blanck' >
                            <p className="portfolio__link-name">
                                Single-page application
                            </p>
                            <img className="portfolio__link-image" src={linkArrow} alt='arrow' />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Portfolio;