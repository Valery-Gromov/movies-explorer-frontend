import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';

function NavBar(props) {
    const { burgerMenuOpen } = props;

    return (
        <div className='nav-bar'>
            <ul className={burgerMenuOpen ? 'nav-bar__content active' : 'nav-bar__content'}>
                <div>
                    <li className='nav-bar__main'>
                        <Link className='nav-bar__link' to='/' >Главная</Link>
                    </li>
                    <li>
                        <Link className='nav-bar__link' to='/movies' >Фильмы</Link>
                    </li>
                    <li>
                        <Link className='nav-bar__link' to='/saved-movies' >Сохранённые фильмы</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link className='nav-bar__link nav-bar__link_profile' to='/profile' >
                            Аккаунт
                            <img className='nav-bar__profile-icon' src={profileIcon} alt='аккаунт' />
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-bar__link' to='/signup' >Регистрация</Link>
                    </li>
                    <li>
                        <Link className='nav-bar__link nav-bar__link_black' to='/signin' >Войти</Link>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;