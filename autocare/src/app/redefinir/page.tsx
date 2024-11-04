'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import styles from './redefinir.module.css';
import Header from '@/components/Compartilhados/Header/Header';

const SolicitarCodigo: React.FC = () => {
    const [email, setEmail] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.includes('@') || !email.includes('.')) {
            setMensagemErro('Por favor, insira um e-mail válido.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/solicitar_codigo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                const codigoGerado = data.codigo; // Captura o código gerado

                // Parâmetros do template EmailJS
                const templateParams = {
                    to_email: email,
                    code: codigoGerado,
                };

                // Envio do e-mail com o código
                emailjs.send('service_7ky7mpj', 'template_12kxbgc', templateParams, '-APsGrdM4xbW0jO10')
                    .then(() => {
                        console.log('E-mail enviado com sucesso');
                        router.push('/redefinir/verificar-codigo');
                    })
                    .catch((error) => {
                        console.error('Erro ao enviar o e-mail:', error);
                        setMensagemErro('Não foi possível enviar o código. Tente novamente mais tarde.');
                    });
            } else {
                const errorData = await response.json();
                setMensagemErro(errorData.error || 'Erro ao solicitar o código. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao solicitar o código:', error);
            setMensagemErro('Não foi possível enviar o código. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <section className={styles.SolicitarCodigo__container}>
                <Image
                    className={styles.SolicitarCodigo__Img}
                    src="/assets/fundo.svg"
                    alt='tela azul com efeitos'
                    width={0}
                    height={0}
                />
                <div className={styles.SolicitarCodigo__conteudo}>
                    <h1 className={styles.SolicitarCodigo__titulo}>Solicitar Código de Verificação</h1>
                    <p>Para começar a redefinir sua senha, informe seu e-mail abaixo. Você receberá um código de verificação para continuar o processo de recuperação de senha.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_solicitar}>
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
                        {mensagemErro && <p className={styles.error_message}>{mensagemErro}</p>}
                        <button className={styles.botao__solicitar} type="submit">Continuar</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SolicitarCodigo;
