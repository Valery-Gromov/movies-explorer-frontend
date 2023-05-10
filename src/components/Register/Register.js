import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="wrapper_form">
            <section className="register">
                <img className="register__logo" src={logo} alt='логотип' />
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form form'>
                    <div className='register__inputs form__inputs'>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>Имя</span>
                            <input className='register__input form__input' type='text' required />
                        </label>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>E-mail</span>
                            <input className='register__input form__input' type='email' required/>
                        </label>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>Пароль</span>
                            <input className='register__input form__input' type='password' required />
                        </label>
                    </div>
                    <div className='register__button-container form__button-container'>
                        <button className='register__button form__button'>Зарегистрироваться</button>
                        <p className='register__has-register form__has-register'>
                            Уже зарегистрированы?
                            <Link className='register__has-register-link form__has-register-link' to='/'> Войти</Link>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;