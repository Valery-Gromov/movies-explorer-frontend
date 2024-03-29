import searchButton from '../../images/searchButton.svg';
import { Formik, Form, Field } from 'formik';

const validateText = value => {
  if (value.length === 0) {
    return 'You need to enter a keyword'
  }
}

function SearchForm(props) {
  const { handleSearchSubmit, handleDurationButton, checked, formValue } = props;



  return (
    <Formik
      initialValues={{
        text: formValue.text || '',
      }}
      enableReinitialize={true}
      onSubmit={values => {
        formValue.text = values.text;
        handleSearchSubmit();
    }}
    >
      {({ errors, touched }) => (
        <Form className={"search-form section"} noValidate>
          <label className='search-form__text-container'>
            <Field name='text' className="search-form__text-input" type="text" required validate={validateText} />
            <button className="search-form__button" type='submit'>
              <img src={searchButton} alt='the search button' />
            </button>
          </label>
          {errors.text && touched.text && (
            <div>{errors.text}</div>
          )}
          <label className={!checked ? 'search-form__checkbox-container' : 'search-form__checkbox-container search-form__checkbox-container_checked'} >
            <span className='search-form__checkbox-title'>Short films</span>
            <input name='checkbox' onChange={handleDurationButton} className="search-form__checkbox-input" type="checkbox" />
            <span className='search-form__image' />
          </label>
        </Form>

      )}

    </Formik>
  );
}

export default SearchForm;