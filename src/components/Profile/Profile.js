import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const { setLoggedIn, handleEditSubmit } = props;
    const [edit, setEdit] = useState(false);
    const currentUserInfo = useContext(CurrentUserContext);

    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        navigate('/signin');
    }

    const handleEditClick = (e) => {
        e.preventDefault();
        setEdit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email } = formValue;

        handleEditSubmit(name, email)
            .then(res => {
                setEdit(false);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="wrapper_form">
            <section className="section">
                <form className="profile" onSubmit={handleSubmit}>
                    <h2 className='profile__title'>{`Привет, ${currentUserInfo.name}`}</h2>
                    <div className="profile__content">
                        <div className="profile__container">
                            <h3 className="profile__name">Имя</h3>
                            <input name='name' type='text' minLength='2' maxLength='30' required className="profile__value" placeholder={edit ? 'Введите новое имя' : ''} disabled={!edit && true} value={!edit ? currentUserInfo.name : formValue.name} onChange={handleChange} />
                        </div>
                        <div className="profile__container">
                            <h3 className="profile__name">E-mail</h3>
                            <input name='email' type='email' required className="profile__value" placeholder={edit ? 'Введите новый email' : ''} disabled={!edit && true} value={!edit ? currentUserInfo.email : formValue.email} onChange={handleChange} />
                        </div>
                    </div>
                    <ul className="profile__buttons-container">
                        <li>
                            <button type='button' className={!edit ? "profile__button" : "profile__button profile__button_unvisible"} onClick={handleEditClick} >Редактировать</button>
                        </li>
                        <li>
                            <button type='submit' className={edit ? "profile__button" : "profile__button profile__button_unvisible"} >Сохранить</button>
                        </li>
                        <li>
                            <button className="profile__button profile__button_red" onClick={signOut}>Выйти из аккаунта</button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
}

export default Profile;