'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './login.module.css';
import Header from '@/components/Compartilhados/Header/Header';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.includes('@') || !email.includes('.') || senha.trim() === '') {
            setMensagemErro('Por favor, preencha todos os campos corretamente.');
            return;
        }

        setMensagemErro('');

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            // Verifica se a resposta não está em OK
            if (!response.ok) {
                throw new Error('Usuário ou senha incorretos.'); // Mensagem genérica
            }

            const data = await response.json();
            localStorage.setItem('cliente', JSON.stringify(data.cliente));
            localStorage.setItem('logado', 'true');
            router.push('/dashboard'); 
        } catch (error: any) {
            setMensagemErro(error.message || 'Ocorreu um erro. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <section className={styles.Login}>
                <div className={styles.Login__container}>
                    <Image
                        src='/assets/fundo.svg'
                        alt='tela azul com efeitos'
                        width={0}
                        height={0}
                        className={styles.Login__Img}
                    />
                    <div className={styles.Login__conteudo}>
                        <h1 className={styles.Login__titulo}>Acesse a plataforma</h1>
                        <p>Faça login ou registre-se para acessar sua conta Autocare e cuidar do seu veículo de forma prática e eficiente.</p>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input_login}>
                                <label htmlFor="email" className={styles.label_login}>E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Digite seu e-mail"
                                    className={styles.input_login}
                                    required
                                />
                            </div>
                            <div className={styles.input_login}>
                                <div className={styles.senha__texto}>
                                    <label htmlFor="senha" className={styles.label_login}>Senha</label>
                                    <Link href='/redefinir' className={styles.input__ancora}>Esqueceu a senha?</Link>
                                </div>
                                <input
                                    type="password"
                                    id="senha"
                                    value={senha}
                                    onChange={handleSenhaChange}
                                    placeholder="Digite sua senha"
                                    className={styles.input_login}
                                    required
                                />
                            </div>
                            {mensagemErro && <p className={styles.error_message}>{mensagemErro}</p>}
                            <button className={styles.botao__login} type="submit">Entrar</button>
                            <p className={styles.Login__container__registrar}>
                                Ainda não tem uma conta? <Link href='/cadastro' className={styles.input__ancora}>Inscreva-se</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormLogin;
