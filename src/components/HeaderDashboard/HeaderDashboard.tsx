import { Link } from 'react-router-dom'; 
import Logo from "../Header/assets/logo Header.svg";
import './HeaderDashboard.css';

const HeaderDashboard = () => {
    return (
        <header className="HeaderDashboard">
            <div className="HeaderDashboard__Logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <nav className="HeaderDashboard__Nav">
                <Link to="/dashboard" className="HeaderDashboard__Link">Painel Principal</Link>
            </nav>
            <div className="HeaderDashboard__Separator"></div>
            <div className="HeaderDashboard__UserSection">
                <span className="HeaderDashboard__UserName">Usuário</span>
                <Link to="/" className="HeaderDashboard__Logout">Sair</Link>
                
            </div>
        </header>
    );
}

export default HeaderDashboard;
