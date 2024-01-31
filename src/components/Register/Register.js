import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const validateName = value => {
    if (!value) {
        return 'Обязательное поле'
    } else if (2 > value.length) {
        return 'Имя должно содержать больше 2 символов'
    } else if (value.length > 30) {
        return 'Имя должно содержать меньше 30 символов'
    }
}

const validateEmail = value => {
    if (!value) {
        return 'Обязательное поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Некорректный Email-адрес'
    }
}

const validatePassword = value => {
    if (!value) {
        return 'Обязательное поле'
    }
}

function Register(props) {
    const { handleRegister, setLoggedIn } = props;
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [textError, setTextError] = useState('');
    const [disabled, setDisabled] = useState(false);

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            onSubmit={values => {
                setDisabled(true);
                handleRegister(values.name, values.email, values.password)
                    .then((res) => {
                        setLoggedIn(true);
                    })
                    .catch(err => {
                        console.log(err);
                        setShowErrorMessage(true);
                        setTextError(err);
                    })
                    .finally(() => {
                        setDisabled(false);
                        setTimeout(() => {
                            setShowErrorMessage(false);
                            setTextError('');
                        }, 3000);
                    })

            }}
        >
            {({ errors, touched, isValid, values }) => (
                <div className="wrapper_form">
                    <section className="register">
                        <img className="register__logo" src={logo} alt='логотип' />
                        <h2 className='register__title'>Добро пожаловать!</h2>
                        <Form className='register__form form'>
                            <div className='register__inputs form__inputs'>
                                <label className='register__input-container form__input-container'>
                                    <span className='register__input-name form__input-name'>Имя</span>
                                    <Field name='name' className='register__input form__input' type='text' disabled={disabled && true} validate={validateName} />
                                    {errors.name && touched.name && (
                                        <div>{errors.name}</div>
                                    )}
                                </label>
                                <label className='register__input-container form__input-container'>
                                    <span className='register__input-name form__input-name'>E-mail</span>
                                    <Field name='email' className='register__input form__input' type='email' disabled={disabled && true} validate={validateEmail} />
                                    {errors.email && touched.email && (
                                        <div>{errors.email}</div>
                                    )}
                                </label>
                                <label className='register__input-container form__input-container'>
                                    <span className='register__input-name form__input-name'>Пароль</span>
                                    <Field name='password' className='register__input form__input' type='password' disabled={disabled && true} validate={validatePassword} />
                                    {errors.password && touched.password && (
                                        <div>{errors.password}</div>
                                    )}
                                </label>
                            </div>
                            <div className='register__button-container form__button-container'>
                                <button type='submit' disabled={!isValid || values.name === '' || values.email === '' || values.password === '' || disabled && true} className='register__button form__button'>Зарегистрироваться</button>
                                {showErrorMessage && (<span>{textError}</span>)}
                                <p className='register__has-register form__has-register'>
                                    Уже зарегистрированы?
                                    <Link className='register__has-register-link form__has-register-link' to='/signin'> Войти</Link>
                                </p>
                            </div>
                        </Form>
                    </section>
                </div>
            )}

        </Formik>
    );
}

export default Register;