import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './headerdashboard.module.css'; 
import Link from 'next/link';

const HeaderDashboard = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleMenuToggleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    event.currentTarget.blur(); 
  };

  const handleLogout = () => {

    localStorage.removeItem('cliente');
    localStorage.removeItem('logado');
    
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <header className={styles.HeaderDashboard}>
      <button 
        className={`${styles.HeaderDashboard__MenuToggle} ${menuAberto ? styles.HeaderDashboard__MenuToggle__aberto : ''}`} 
        onClick={toggleMenu}
        onFocus={handleMenuToggleFocus} 
      >
        <span className={styles.HeaderDashboard__MenuIcon}></span> 
      </button>
      <div className={styles.HeaderDashboard__Logo}>
        <Image 
            src="/assets/logo Header.svg"
            alt="Logo" 
            className={styles.Logo__Img}
            layout='responsive'
            width={0}
            height={0} />
      </div>
      <nav className={`${styles.HeaderDashboard__Nav} ${menuAberto ? styles.HeaderDashboard__Nav__aberto : ''}`} >
        <Link href="/dashboard" className={styles.HeaderDashboard__Link}>Painel Principal</Link>
        <Link href="/dashboard/ajuda" className={styles.HeaderDashboard__Link}>Ajuda</Link>
      </nav>
      <div className={styles.HeaderDashboard__Separator}></div>
      <div className={styles.HeaderDashboard__UserSection}>
        <span className={styles.HeaderDashboard__UserName}>Usuário</span>
        <button className={styles.HeaderDashboard__Logout} onClick={handleLogout}>Sair</button>
      </div>
    </header>
  );
}

export default HeaderDashboard;
