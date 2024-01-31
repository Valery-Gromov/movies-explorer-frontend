import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const { setLoggedIn, handleEditSubmit } = props;
    const [edit, setEdit] = useState(false);
    const currentUserInfo = useContext(CurrentUserContext);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        setFormValue({
            name: currentUserInfo.name,
        email: currentUserInfo.email
        })
    }, [currentUserInfo])


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
        localStorage.removeItem('cardsToList');
        localStorage.removeItem('text');
        localStorage.removeItem('checked');
        setLoggedIn(false);
        navigate('/');
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
                setShowSuccessMessage(true)
            })
            .then(res => {
                setTimeout(() => {setShowSuccessMessage(false)}, 1000);
            })
            .catch(err => {
                console.log(err);
            })
            

    }

    const isButtonActive = () => {
        if (formValue.name !== currentUserInfo.name) {
            return false;
        } else if (formValue.email !== currentUserInfo.email) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className="wrapper_form">
            <section className="section">
                <form className="profile" onSubmit={handleSubmit}>
                    <h2 className='profile__title'>{`Привет, ${currentUserInfo.name}`}</h2>
                    <div className="profile__content">
                        <div className="profile__container">
                            <h3 className="profile__name">Имя</h3>
                            <input name='name' type='text' minLength='2' maxLength='30' required className="profile__value" placeholder={edit ? 'Введите новое имя' : ''} disabled={!edit && true} value={formValue.name || ''} onChange={handleChange} />
                        </div>
                        <div className="profile__container">
                            <h3 className="profile__name">E-mail</h3>
                            <input name='email' type='email' required className="profile__value" placeholder={edit ? 'Введите новый email' : ''} disabled={!edit && true} value={formValue.email || ''} onChange={handleChange} />
                        </div>
                        {showSuccessMessage && (<span>Данные успешно обновились</span>)}
                    </div>
                    <ul className="profile__buttons-container">
                        <li>
                            <button type='button' className={!edit ? "profile__button" : "profile__button profile__button_unvisible"} onClick={handleEditClick} >Редактировать</button>
                        </li>
                        <li>
                            <button type='submit' className={edit ? "profile__button" : "profile__button profile__button_unvisible"} disabled={isButtonActive() && true} >Сохранить</button>
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