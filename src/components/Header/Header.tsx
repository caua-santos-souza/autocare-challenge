import Logo from "./assets/logo Header.svg"
import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__Logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <nav className="Header__Nav">
                <a href="#" className="Header__Link">Home</a>
                <a href="#contato" className="Header__Link">Contato</a>
                <a href="#faq" className="Header__Link">FAQ</a>
                <a href="#vantagens" className="Header__Link">Vantagens</a>
            </nav>
            <div className="Header__Separator"></div>
            <a href="/login" className="Header__Login">Acesso à sua conta</a>
        </header>
    )
}

export default Header;