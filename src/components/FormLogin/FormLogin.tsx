import { useState } from 'react';
import fundo from './assets/img.svg';
import './FormLogin.css';
import { Link } from 'react-router-dom';


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validação simples
        if (!email.includes('@') || !email.includes('.') || senha.trim() === '') {
            setMensagemErro('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Limpar mensagem de erro se a validação for bem-sucedida
        setMensagemErro('');
        // Aqui você pode adicionar lógica para enviar os dados do formulário
    };

    return (
        <section className="Login">
            <div className="Login__container">
                <img className='Login__Img' src={fundo} alt='tela azul com efeitos' />
                <div className='Login__conteudo'>
                    <h1 className="Login__titulo">Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para acessar sua conta Autocare e cuidar do seu veículo de forma prática e eficiente.</p>
                    <form onSubmit={handleSubmit} >
                        <div className="input-login">
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
                        <div className="input-login">
                            <div className='senha__texto'>
                                <label htmlFor="senha">Senha</label>
                                <Link to='/redefinir' className='input__ancora'>Esqueceu a senha?</Link>
                            </div>
                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={handleSenhaChange}
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        {mensagemErro && <p className="error-message">{mensagemErro}</p>}
                        <Link to='/dashboard'> <button type="submit">Entrar</button> </Link>
                        <p className='Login__container__registrar'>Ainda não tem uma conta? <Link to='/cadastro' className='input__ancora'>Inscreva-se</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormLogin;
