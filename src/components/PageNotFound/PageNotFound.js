import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="wrapper">
            <div className="page-not-found section">
                <div className='page-not-found__content'>
                    <h2 className='page-not-found__title'>404</h2>
                    <p className='page-not-found__text'>Страница не найдена</p>
                </div>
                <Link className='page-not-found__link' to='/' >Назад</Link>
            </div>
        </div>
    );
}

export default PageNotFound;