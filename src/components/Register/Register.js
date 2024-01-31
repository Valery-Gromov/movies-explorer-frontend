import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const validateName = value => {
    if (!value) {
        return 'Required field'
    } else if (2 > value.length) {
        return 'The name must contain more than 2 characters'
    } else if (value.length > 30) {
        return 'The name must contain less than 30 characters'
    }
}

const validateEmail = value => {
    if (!value) {
        return 'Required field'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid Email address'
    }
}

const validatePassword = value => {
    if (!value) {
        return 'Required field'
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
                        <img className="register__logo" src={logo} alt='Logo' />
                        <h2 className='register__title'>Welcome!</h2>
                        <Form className='register__form form'>
                            <div className='register__inputs form__inputs'>
                                <label className='register__input-container form__input-container'>
                                    <span className='register__input-name form__input-name'>Name</span>
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
                                    <span className='register__input-name form__input-name'>Password</span>
                                    <Field name='password' className='register__input form__input' type='password' disabled={disabled && true} validate={validatePassword} />
                                    {errors.password && touched.password && (
                                        <div>{errors.password}</div>
                                    )}
                                </label>
                            </div>
                            <div className='register__button-container form__button-container'>
                                <button type='submit' disabled={!isValid || values.name === '' || values.email === '' || values.password === '' || disabled && true} className='register__button form__button'>Sign up</button>
                                {showErrorMessage && (<span>{textError}</span>)}
                                <p className='register__has-register form__has-register'>
                                    Already signed up?
                                    <Link className='register__has-register-link form__has-register-link' to='/signin'> Login</Link>
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