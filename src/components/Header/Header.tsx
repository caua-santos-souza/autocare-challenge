import { Link } from 'react-router-dom'; 
import Logo from "./assets/logo Header.svg";
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__Logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <nav className="Header__Nav">
                <Link to="/" className="Header__Link">Home</Link>
                <Link to="/#contato" className="Header__Link">Contato</Link> {/* Link para Contato */}
                <Link to="/#faq" className="Header__Link">FAQ</Link> {/* Link para FAQ */}
                <Link to="/#vantagens" className="Header__Link">Vantagens</Link> {/* Link para Vantagens */}
                <Link to="/sobreNos" className="Header__Link">Sobre Nós</Link>
            </nav>
            <div className="Header__Separator"></div>
            <Link to="/login" className="Header__Login">Acesso à sua conta</Link>
        </header>
    );
}

export default Header;
