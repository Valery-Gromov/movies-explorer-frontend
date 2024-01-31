function Footer() {
    return (
        <div className="wrapper">
            <section className="footer section">
                <h2 className='footer__title'>Yandex Educational Project х BeatFilm.</h2>
                <div className='footer__container'>
                    <p className='footer__date'>© 2023</p>
                    <ul className='footer__list'>
                        <li>
                            <a className='footer__link' href='https://practicum.yandex.ru/' target='_blanck'>Yandex.Practicum</a>
                        </li>
                        <li>
                            <a className='footer__link' href='https://github.com/Valery-Gromov' target='_blanck'>Github</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Footer;