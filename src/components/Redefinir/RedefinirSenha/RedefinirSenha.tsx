import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RedefinirSenha.css';
import fundo from '../../FormLogin/assets/img.svg';

const RedefinirSenha: React.FC = () => {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const handleNovaSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNovaSenha(e.target.value);
    };

    const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (novaSenha.trim() === '' || novaSenha !== confirmarSenha) {
            setMensagemErro('As senhas não coincidem ou estão vazias.');
            return;
        }

        // Lógica para atualizar a senha
        console.log("Senha redefinida com sucesso");

        navigate('/login'); // Redireciona para a página de login após a redefinição da senha
    };

    return (
        <section className="RedefinirSenha__container">
            <img className="RedefinirSenha__Img" src={fundo} alt='tela azul com efeitos' />
            <div className="RedefinirSenha__conteudo">
                <h1 className="RedefinirSenha__titulo">Redefinir Senha</h1>
                <p>Agora, defina uma nova senha para sua conta. Digite a nova senha e confirme-a no campo abaixo para garantir que ambas coincidam. Sua senha será atualizada após a confirmação.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-redefinir">
                        <label htmlFor="novaSenha">Nova Senha</label>
                        <input
                            type="password"
                            id="novaSenha"
                            value={novaSenha}
                            onChange={handleNovaSenhaChange}
                            placeholder="Digite sua nova senha"
                            required
                        />
                    </div>
                    <div className="input-redefinir">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            value={confirmarSenha}
                            onChange={handleConfirmarSenhaChange}
                            placeholder="Confirme sua nova senha"
                            required
                        />
                    </div>
                    {mensagemErro && <p className="error-message">{mensagemErro}</p>}
                    <button type="submit">Redefinir Senha</button>
                </form>
            </div>
        </section>
    );
};

export default RedefinirSenha;
