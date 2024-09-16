import React from 'react';
import './Footer.css'; 
import fiap from './assets/Fiap.svg';
import auto from './assets/Autocare__Footer.svg';
import porto from './assets/Porto.svg';


const Footer: React.FC = () => {
    return (
        <footer id="rodape">
            <div className='rodape__logos'>
                <img 
                    src={porto}
                    alt="logo Porto Seguro" 
                    className="rodape__logo"
                    id='Logo__porto' 
                />
                <img 
                    src={auto}
                    alt="logo Autocare" 
                    className="rodape__logo" 
                />
                <img 
                        src={fiap}
                        alt="logo Fiap" 
                        className="rodape__logo" 
                    />
            </div>
            <p className="rodape__texto">
                © 2024 Autocare. Todos os direitos reservados. Serviço de Monitoramento gratuito. Conteúdo sujeito a disponibilidade.
            </p>
            <p className="rodape__texto">
                AutoCare é um projeto acadêmico gratuito desenvolvido por estudantes. Para saber mais<br /> sobre este projeto, entre em contato conosco.
            </p>
        </footer>
    );
};

export default Footer;
