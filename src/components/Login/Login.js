import logo from '../../images/logo.svg';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

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

function Login(props) {
  const { handleLoginSubmit, setLoggedIn } = props;
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [textError, setTextError] = useState('');
  const [disabled, setDisabled] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        setDisabled(true);
        handleLoginSubmit(values.email, values.password)
          .then(res => {
            setLoggedIn(true);
          })
          .catch(err => {
            console.log(err, err.message);
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
          <section className="login">
            <img className="login__logo" src={logo} alt='логотип' />
            <h2 className='login__title'>Рады видеть!</h2>
            <Form className='login__form form'>
              <div className='login__inputs form__inputs'>
                <label className='login__input-container form__input-container'>
                  <span className='login__input-name form__input-name'>E-mail</span>
                  <Field name='email' className='login__input form__input' type='email' disabled={disabled && true} validate={validateEmail} />
                  {errors.email && touched.email && (
                    <div>{errors.email}</div>
                  )}
                </label>
                <label className='login__input-container form__input-container'>
                  <span className='login__input-name form__input-name'>Пароль</span>
                  <Field name='password' className='login__input form__input' type='password' disabled={disabled && true} validate={validatePassword} />
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}
                </label>
              </div>
              <div className='login__button-container form__button-container'>
                <button type='submit' disabled={!isValid || values.email === '' || values.password === '' || disabled && true} className='login__button form__button'>Войти</button>
                {showErrorMessage && (<span>{textError}</span>)}
                <p className='register__has-register form__has-register'>
                  Ещё не зарегистрированы?
                  <Link className='register__has-register-link form__has-register-link' to='/signup'> Регистрация </Link>
                </p>
              </div>
            </Form>
          </section>
        </div>
      )}

    </Formik>
  );
}

export default Login;

