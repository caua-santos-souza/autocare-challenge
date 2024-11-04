'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './RedefinirSenha.module.css';
import Image from 'next/image';
import Header from '@/components/Compartilhados/Header/Header';

const RedefinirSenha: React.FC = () => {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    const handleNovaSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNovaSenha(e.target.value);
    };

    const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (novaSenha.trim() === '' || novaSenha !== confirmarSenha) {
            setMensagemErro('As senhas não coincidem ou estão vazias.');
            return;
        }

        const email = localStorage.getItem('email'); // Recupera o e-mail do local storage

        try {
            const response = await fetch('http://127.0.0.1:5000/redefinir_senha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, nova_senha: novaSenha }), // Envia o e-mail e a nova senha
            });

            if (response.ok) {
                // Limpa o local storage após a alteração da senha
                localStorage.removeItem('email');
                console.log("Senha redefinida com sucesso");
                router.push('/login');
            } else {
                const errorData = await response.json();
                setMensagemErro(errorData.error || 'Não foi possível redefinir a senha. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro ao redefinir a senha:', error);
            setMensagemErro('Erro de conexão. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <section className={styles.RedefinirSenha__container}>
                <Image
                    className={styles.RedefinirSenha__Img}
                    src="/assets/fundo.svg"
                    alt='tela azul com efeitos'
                    height={0}
                    width={0} />
                <div className={styles.RedefinirSenha__conteudo}>
                    <h1 className={styles.RedefinirSenha__titulo}>Redefinir Senha</h1>
                    <p>Agora, defina uma nova senha para sua conta. Digite a nova senha e confirme-a no campo abaixo para garantir que ambas coincidam. Sua senha será atualizada após a confirmação.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_redefinir}>
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
                        <div className={styles.input_redefinir}>
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
                        {mensagemErro && <p className={styles.error_message}>{mensagemErro}</p>}
                        <button className={styles.Botao__Redefinir} type="submit">Redefinir Senha</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default RedefinirSenha;
