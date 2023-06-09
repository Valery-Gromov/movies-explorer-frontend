import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="wrapper_form">
            <section className="login">
                <img className="login__logo" src={logo} alt='логотип' />
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form form'>
                    <div className='login__inputs form__inputs'>
                        <label className='login__input-container form__input-container'>
                            <span className='login__input-name form__input-name'>E-mail</span>
                            <input className='login__input form__input' type='email' />
                        </label>
                        <label className='login__input-container form__input-container'>
                            <span className='login__input-name form__input-name'>Пароль</span>
                            <input className='login__input form__input' type='password' />
                        </label>
                    </div>
                    <div className='login__button-container form__button-container'>
                        <button className='login__button form__button'>Войти</button>
                        <p className='register__has-register form__has-register'>
                            Ещё не зарегистрированы?
                            <a className='register__has-register-link form__has-register-link'> Регистрация</a>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;