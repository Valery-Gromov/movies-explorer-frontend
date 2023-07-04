
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Header(props) {
    const { burgerMenuOpen, setBurgerMenuOpen, loggedIn } = props;

    return (
        <div className="wrapper_header">
            <section className="header section">
                <Link className="header__logo" to='/' >
                    <img src={logo} alt='Логотип' />
                </Link>
                <NavBar burgerMenuOpen={burgerMenuOpen} loggedIn={loggedIn} />
                <div onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} className={burgerMenuOpen ? 'header__burger-btn active' : 'header__burger-btn'}>
                    <span />
                </div>
            </section>
        </div>
    );
}

export default Header;