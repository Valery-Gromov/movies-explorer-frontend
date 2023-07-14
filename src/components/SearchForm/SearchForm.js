import searchButton from '../../images/searchButton.svg';
import { Formik, Form, Field } from 'formik';

const validateText = value => {
  if (value.length === 0) {
    return 'Введите название или описание фильма'
  }
}

function SearchForm(props) {
  const { handleChange, handleSearchSubmit, hadleDurationFilter, checked, formValue } = props;



  return (
    <Formik
      initialValues={{
        text: formValue.text || '',
      }}
      enableReinitialize={true}
      onSubmit={values => {
        formValue.text = values.text;
        localStorage.setItem('text', values.text);
        handleSearchSubmit();
    }}
    >
      {({ errors, touched }) => (
        <Form className={"search-form section"} noValidate>
          <label className='search-form__text-container'>
            <Field name='text' className="search-form__text-input" type="text" required validate={validateText} />
            <button className="search-form__button" type='submit'>
              <img src={searchButton} alt='кнопка поиска' />
            </button>
          </label>
          {errors.text && touched.text && (
            <div>{errors.text}</div>
          )}
          <label className={checked ? 'search-form__checkbox-container' : 'search-form__checkbox-container search-form__checkbox-container_checked'} >
            <span className='search-form__checkbox-title'>Короткометражки</span>
            <input name='checkbox' onChange={hadleDurationFilter} className="search-form__checkbox-input" type="checkbox" />
            <span className='search-form__image' />
          </label>
        </Form>

      )}

    </Formik>
  );
}

export default SearchForm;