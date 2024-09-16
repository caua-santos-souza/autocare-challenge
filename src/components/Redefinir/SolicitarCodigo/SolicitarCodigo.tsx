import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './SolicitarCodigo.css';
import fundo from '../../FormLogin/assets/img.svg';

const SolicitarCodigo: React.FC = () => {
    const [email, setEmail] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.includes('@') || !email.includes('.')) {
            setMensagemErro('Por favor, insira um e-mail válido.');
            return;
        }

        // Parâmetros para o EmailJS
        const templateParams = {
            to_email: email, // Passando o email do input
            code: '357693', // Código fixo para o exemplo
        };

        emailjs.send('service_7ky7mpj', 'template_12kxbgc', templateParams, '-APsGrdM4xbW0jO10')
            .then((response) => {
                console.log('E-mail enviado com sucesso:', response);
                navigate('verificar-codigo'); // Navega para a página de verificação de código
            })
            .catch((error) => {
                console.error('Erro ao enviar o e-mail:', error);
                setMensagemErro('Não foi possível enviar o código. Tente novamente mais tarde.');
            });
    };

    return (
        <section className="SolicitarCodigo__container">
            <img className="SolicitarCodigo__Img" src={fundo} alt='tela azul com efeitos' />
            <div className="SolicitarCodigo__conteudo">
                <h1 className="SolicitarCodigo__titulo">Solicitar Código de Verificação</h1>
                <p>Para começar a redefinir sua senha, informe seu e-mail abaixo. Você receberá um código de verificação para continuar o processo de recuperação de senha.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-solicitar">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>
                    {mensagemErro && <p className="error-message">{mensagemErro}</p>}
                    <button className="botao__solicitar" type="submit">Continuar</button>
                </form>
            </div>
        </section>
    );
};

export default SolicitarCodigo;
