import { Link, useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    
    return (
        <div className="wrapper">
            <section className="page-not-found section">
                <div className='page-not-found__content'>
                    <h2 className='page-not-found__title'>404</h2>
                    <p className='page-not-found__text'>The page was not found</p>
                </div>
                <button type='button' className='page-not-found__link' onClick={goBack} >Back</button>
            </section>
        </div>
    );
}

export default PageNotFound;