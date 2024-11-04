'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './VerificarCodigo.module.css';
import Image from 'next/image';
import Header from '@/components/Compartilhados/Header/Header';

const VerificarCodigo: React.FC = () => {
    const [codigo, setCodigo] = useState('');
    const [email, setEmail] = useState(''); // Estado para armazenar o e-mail
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    // Método para lidar com a mudança do campo de código
    const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodigo(e.target.value);
    };

    // Método para lidar com a mudança do campo de email
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Método que lida com o envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/verificar_codigo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, codigo }), // Incluindo o email na requisição
            });

            if (response.ok) {
                // Código verificado com sucesso
                localStorage.setItem('email', email); // Salva o e-mail no local storage
                router.push('/redefinir/redefinir-senha');
            } else {
                const errorData = await response.json();
                setMensagemErro(errorData.error || 'Código de verificação inválido.');
            }
        } catch (error) {
            console.error('Erro ao verificar o código:', error);
            setMensagemErro('Não foi possível verificar o código. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <section className={styles.VerificarCodigo__container}>
                <Image
                    className={styles.VerificarCodigo__Img}
                    src='/assets/fundo.svg'
                    alt='tela azul com efeitos'
                    height={0}
                    width={0}
                />
                <div className={styles.VerificarCodigo__conteudo}>
                    <h1 className={styles.VerificarCodigo__titulo}>Insira o Código de Verificação</h1>
                    <p>Insira o código de verificação enviado para o seu e-mail. Esse código é necessário para confirmar sua identidade e prosseguir com a redefinição da senha.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_verificar}>
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
                        <div className={styles.input_verificar}>
                            <label htmlFor="codigo">Código de Verificação</label>
                            <input
                                type="text"
                                id="codigo"
                                value={codigo}
                                onChange={handleCodigoChange}
                                placeholder="Digite o código de verificação"
                                required
                            />
                        </div>
                        {mensagemErro && <p className={styles.error_message}>{mensagemErro}</p>}
                        <button className={styles.Botao__Verificar} type="submit">Verificar Código</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default VerificarCodigo;
