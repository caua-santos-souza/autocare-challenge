import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Logo from "../Header/assets/logo Header.svg";
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="HeaderDashboard">
      <button className="HeaderDashboard__MenuToggle" onClick={toggleMenu}>
        <span className="HeaderDashboard__MenuIcon"></span>
      </button>
      <div className="HeaderDashboard__Logo">
        <img src={Logo} alt="Logo" className='HeaderDashboard__Logo'/>
      </div>
      <nav className={`HeaderDashboard__Nav ${menuAberto ? 'HeaderDashboard__Nav--aberto' : ''}`}>
        <Link to="/dashboard" className="HeaderDashboard__Link">Painel Principal</Link>
      </nav>
      <div className="Header__Separator"></div>
      <div className="HeaderDashboard__UserSection">
        <span className="HeaderDashboard__UserName">Usuário</span>
        <Link to="/" className="HeaderDashboard__Logout">Sair</Link>
      </div>
    </header>
  );
}

export default HeaderDashboard;