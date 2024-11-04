import React from 'react';
import styles from './Footer.module.css'; // Importando o CSS Module

const Footer: React.FC = () => {
    return (
        <footer id={styles.rodape}>
            <div className={styles.rodape__logos}>
                <img 
                    src="/assets/Porto.svg" // Caminho alterado
                    alt="logo Porto Seguro" 
                    className={styles.rodape__logo}
                    id={styles.Logo__porto}
                />
                <img 
                    src="/assets/Autocare__Footer.svg" // Caminho alterado
                    alt="logo Autocare" 
                    className={styles.rodape__logo} 
                />
                <img 
                    src="/assets/Fiap.svg" // Caminho alterado
                    alt="logo Fiap" 
                    className={styles.rodape__logo} 
                />
            </div>
            <p className={styles.rodape__texto}>
                © 2024 Autocare. Todos os direitos reservados. Serviço de Monitoramento gratuito. Conteúdo sujeito a disponibilidade.
            </p>
            <p className={styles.rodape__texto}>
                AutoCare é um projeto acadêmico gratuito desenvolvido por estudantes. Para saber mais<br /> sobre este projeto, entre em contato conosco.
            </p>
        </footer>
    );
};

export default Footer;
