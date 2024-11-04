import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setMenuAberto(!menuAberto);

    const handleMenuToggleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        event.currentTarget.blur(); 
    };

    const handleSmoothScroll = async (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();

        if (window.location.pathname !== '/') {
            // Redireciona para a página inicial se não estiver nela
            router.push('/');
        }

        // Rola suavemente para a seção após o redirecionamento
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Ajuste o delay se necessário para garantir que o elemento existe

        setMenuAberto(false);
    };

    return (
        <header className={styles.header}>
            <button 
                className={`${styles.menuToggle} ${menuAberto ? styles.menuToggle__aberto : ''}`} 
                onClick={toggleMenu}
                onFocus={handleMenuToggleFocus} 
            >
                <span className={styles.menuIcon}></span>
            </button>
            <div className={styles.Header__Logo}>
                <img className={styles.logo} src="/assets/logo Header.svg" alt="Logo" />
            </div>
            <nav className={`${styles.nav} ${menuAberto ? styles.nav__aberto : ''}`}>
                <Link href="/" className={styles.link}>Home</Link>
                <a href="/#contato" className={styles.link} onClick={(e) => handleSmoothScroll(e, 'contato')}>Contato</a>
                <a href="/#faq" className={styles.link} onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a>
                <a href="/#vantagens" className={styles.link} onClick={(e) => handleSmoothScroll(e, 'vantagens')}>Vantagens</a>
                <Link href="/SobreNos" className={styles.link}>Sobre Nós</Link>
            </nav>
            <div className={styles.separator}></div>
            <Link href="/login" className={styles.login}>Acesso à sua conta</Link>
        </header>
    );
};

export default Header;
