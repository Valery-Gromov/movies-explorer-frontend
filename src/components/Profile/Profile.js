function Profile() {
    return (
        <div className="wrapper_form">
            <div className="profile">
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <div className="profile__content">
                    <div className="profile__container">
                        <h3 className="profile__name">Имя</h3>
                        <p className="profile__value">Виталий</p>
                    </div>
                    <div className="profile__container">
                        <h3 className="profile__name">E-mail</h3>
                        <p className="profile__value">pochta@yandex.ru</p>
                    </div>
                </div>
                <ul className="profile__links-container">
                    <li>
                        <a href="#" className="profile__link">Редактировать</a>
                    </li>
                    <li>
                        <a href="#" className="profile__link">Выйти из аккаунта</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;