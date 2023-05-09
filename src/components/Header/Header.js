
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Header(props) {
    const {burgerMenuOpen, setBurgerMenuOpen} = props;

    return (
        <div className="wrapper_header">
            <div className="header section">
                <Link className="header__logo" to='/' >
                    <img src={logo} alt='Логотип' />
                </Link>
                <NavBar burgerMenuOpen={burgerMenuOpen} />
                <div onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} className={`header__burger-btn`}>
                    <span/>
                </div>
            </div>
        </div>
    );
}

export default Header;