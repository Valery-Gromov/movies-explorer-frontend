function AboutProject() {
    return (
        <div className="wrapper">
            <section className="about-project section" id="about-project">
                <h2 className="about-project__title section__title">О проекте</h2>
                <div className="about-project__container">
                    <div className="about-project__text-content">
                        <p className="about-project__topic-title">
                            Дипломный проект включал 5 этапов
                        </p>
                        <p className="about-project__topic-text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about-project__text-content">
                        <p className="about-project__topic-title">
                            На выполнение диплома ушло 5 недель
                        </p>
                        <p className="about-project__topic-text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about-project__duration-container">
                    <div className="about-project__tech-container">
                        <p className="about-project__backend-duration">
                            1 неделя
                        </p>
                        <p className="about-project__tech-name">
                            Back-end
                        </p>
                    </div>
                    <div className="about-project__tech-container">
                        <p className="about-project__frontend-duration">
                            4 недели
                        </p>
                        <p className="about-project__tech-name">
                            Front-end
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutProject;