import { Link, NavLink } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';

function NavBar(props) {
    const { burgerMenuOpen, loggedIn } = props;

    return (
        <div className='nav-bar'>
            <ul className={burgerMenuOpen ? 'nav-bar__content active' : 'nav-bar__content'}>
                <div>
                    {loggedIn &&
                        (<li className='nav-bar__main'>
                            <Link className='nav-bar__link animation-link' to='/' >Main</Link>
                        </li>)}
                    {loggedIn &&
                        (<li>
                            <NavLink className={({isActive}) => `${isActive ? "nav-bar__link nav-bar__link_active animation-link" : "nav-bar__link animation-link"}`} to='/movies' >Movies</NavLink>
                        </li>)}
                    {loggedIn &&
                        (<li>
                            <NavLink className={({isActive}) => `${isActive ? "nav-bar__link nav-bar__link_active animation-link" : "nav-bar__link animation-link"}`} to='/saved-movies' >Saved movies</NavLink>
                        </li>)}
                </div>
                <div>
                    {loggedIn &&
                        (<li>
                            <Link className='nav-bar__link nav-bar__link_profile' to='/profile' >
                                Аккаунт
                                <img className='nav-bar__profile-icon' src={profileIcon} alt='аккаунт' />
                            </Link>
                        </li>)}
                    {!loggedIn &&
                        (<li>
                            <Link className='nav-bar__link animation-link' to='/signup' >Signup</Link>
                        </li>)}
                    {!loggedIn &&
                        (<li>
                            <Link className='nav-bar__link animation-link nav-bar__link_black' to='/signin' >Login</Link>
                        </li>)}
                </div>
            </ul>
        </div>
    );
}

export default NavBar;