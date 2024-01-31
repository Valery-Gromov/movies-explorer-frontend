import profilePhoto from '../../../images/profilePhoto.png'

function AboutMe() {
    return (
        <div className="wrapper">
            <section className="about-me section" id='about-me'>
                <h2 className="about-me__title section__title">Student</h2>
                <div className="about-me__content">
                    <div className="about-me__text-container">
                        <div className="about-me__profile">
                            <p className="about-me__name">
                                Valery
                            </p>
                            <p className="about-me__job">
                                Frontend developer, 27 years old
                            </p>
                            <p className="about-me__bio">
                                Have experience in front-end and back-end development. Have good Knowledge and experience with JavaScript (including ES6), HTML5, CSS3, SCSS, TypeScript, ReactJS, NodeJS, and Express.js. Have a demonstrable skills in implementing responsive websites. I am strong team player who can use initiative and self-manage. Have a good communication skills and interpersonal skills.
                            </p>
                        </div>
                        <a className="about-me__link" href='#'>Github</a>
                    </div>
                    <img className="about-me__photo" src={profilePhoto} alt='my photo' />
                </div>
            </section>
        </div>
    );
}

export default AboutMe;