import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./assets/logo Header.svg";
import './Header.css';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => setMenuAberto(!menuAberto);

    const handleMenuToggleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        event.currentTarget.blur(); 
    };

    return (
        <header className="Header">
            <button 
                className={`Header__MenuToggle ${menuAberto ? 'Header__MenuToggle--aberto' : ''}`} 
                onClick={toggleMenu}
                onFocus={handleMenuToggleFocus} 
            >
                <span className="Header__MenuIcon"></span>
            </button>
            <div className="Header__Logo">
                <img className='Logo' src={Logo} alt="Logo" />
            </div>
            <nav className={`Header__Nav ${menuAberto ? 'Header__Nav--aberto' : ''}`}>
                <Link to="/" className="Header__Link">Home</Link>
                <Link to="/#contato" className="Header__Link">Contato</Link>
                <Link to="/#faq" className="Header__Link">FAQ</Link>
                <Link to="/#vantagens" className="Header__Link">Vantagens</Link>
                <Link to="/sobreNos" className="Header__Link">Sobre Nós</Link>
            </nav>
            <div className="Header__Separator"></div>
            <Link to="/login" className="Header__Login">Acesso à sua conta</Link>
        </header>
    );
};

export default Header;
