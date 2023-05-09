import profilePhoto from '../../../images/profilePhoto.png'

function AboutMe() {
    return (
        <div className="wrapper">
            <div className="about-me section" id='about-me'>
                <h2 className="about-me__title section__title">Студент</h2>
                <div className="about-me__content">
                    <div className="about-me__text-container">
                        <div className="about-me__profile">
                            <p className="about-me__name">
                                Валерий
                            </p>
                            <p className="about-me__job">
                                Фронтенд-разработчик, 27 лет
                            </p>
                            <p className="about-me__bio">
                                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                            </p>
                        </div>
                        <a className="about-me__link" href='#'>Github</a>
                    </div>
                    <img className="about-me__photo" src={profilePhoto} alt='моя фотография' />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;