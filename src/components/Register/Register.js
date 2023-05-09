import logo from '../../images/logo.svg'

function Register() {
    return (
        <div className="wrapper_form">
            <div className="register">
                <img className="register__logo" src={logo} alt='логотип' />
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form form'>
                    <div className='register__inputs form__inputs'>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>Имя</span>
                            <input className='register__input form__input' type='text' />
                        </label>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>E-mail</span>
                            <input className='register__input form__input' type='email' />
                        </label>
                        <label className='register__input-container form__input-container'>
                            <span className='register__input-name form__input-name'>Пароль</span>
                            <input className='register__input form__input' type='password' />
                        </label>
                    </div>
                    <div className='register__button-container form__button-container'>
                        <button className='register__button form__button'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;