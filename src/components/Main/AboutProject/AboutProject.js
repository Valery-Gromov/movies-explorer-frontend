function AboutProject() {
    return (
        <div className="wrapper">
            <section className="about-project section" id="about-project">
                <h2 className="about-project__title section__title">About the project</h2>
                <div className="about-project__container">
                    <div className="about-project__text-content">
                        <p className="about-project__topic-title">
                            The graduation project included 5 stages
                        </p>
                        <p className="about-project__topic-text">
                            Making a plan, working on the backend, layout, adding functionality and final improvements.
                        </p>
                    </div>
                    <div className="about-project__text-content">
                        <p className="about-project__topic-title">
                            It took 5 weeks to complete the diploma
                        </p>
                        <p className="about-project__topic-text">
                            Each stage had a soft and hard deadline that had to be met in order to successfully defend.
                        </p>
                    </div>
                </div>
                <div className="about-project__duration-container">
                    <div className="about-project__tech-container">
                        <p className="about-project__backend-duration">
                            1 week
                        </p>
                        <p className="about-project__tech-name">
                            Back-end
                        </p>
                    </div>
                    <div className="about-project__tech-container">
                        <p className="about-project__frontend-duration">
                            4 weeks
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