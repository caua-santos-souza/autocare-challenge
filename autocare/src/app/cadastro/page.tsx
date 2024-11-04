'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './cadastro.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Compartilhados/Header/Header';

const FormRegistro = () => {
    const [etapa, setEtapa] = useState(1);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    // Função para avançar
    const nextStep = (e: React.FormEvent) => {
        e.preventDefault();

        // Validação de etapa 1
        if (etapa === 1 && (!nome || !telefone || !cpf)) {
            setMensagemErro('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Validação de e-mail usando regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (etapa === 2 && !emailRegex.test(email)) {
            setMensagemErro('Digite um e-mail válido.');
            return;
        }

        if (etapa === 3 && (senha.trim() === '' || senha !== confirmarSenha)) {
            setMensagemErro('Senhas não coincidem.');
            return;
        }

        if (etapa === 4 && (!modelo || !ano || !cor || !placa || !marca)) {
            setMensagemErro('Por favor, preencha todos os campos do veículo.');
            return;
        }

        setMensagemErro('');
        if (etapa < 4) {
            setEtapa(etapa + 1);
        } else {
            registerUser();
        }
    };

    // Função para voltar
    const prevStep = () => {
        if (etapa > 1) {
            setEtapa(etapa - 1);
            setMensagemErro('');
        }
    };

    // Função para registrar usuário
    const registerUser = async () => {
        try {
            const clienteResponse = await fetch('http://127.0.0.1:5000/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cpf,
                    nome,
                    telefone,
                    email,
                    senha,
                }),
            });

            if (!clienteResponse.ok) {
                throw new Error('Erro ao registrar cliente. Verifique os dados e tente novamente.');
            }

            const veiculoResponse = await fetch('http://127.0.0.1:5000/veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    modelo,
                    ano,
                    cor,
                    placa,
                    marca,
                    cpf_cliente: cpf,
                }),
            });

            if (!veiculoResponse.ok) {
                throw new Error('Erro ao registrar veículo. Verifique os dados e tente novamente.');
            }

            router.push('/login');

        } catch (error: any) {
            setMensagemErro(error.message);
        }
    };

    return (
        <>
            <Header />
            <section className={styles.Registro}>
                <div className={styles.Registro__container}>
                    <Image 
                        src="/assets/fundo.svg"
                        alt='tela azul com efeitos'
                        width={0}
                        height={0}
                        className={styles.Registro__Img} />
                    <div className={styles.Registro__conteudo}>
                        <h1 className={styles.Registro__titulo}>Crie sua conta</h1>
                        <p>Registre-se para acessar a plataforma Autocare e cuidar do seu veículo de forma prática e eficiente.</p>

                        <form onSubmit={nextStep}>
                            {etapa === 1 && (
                                <>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            placeholder="Digite seu nome completo"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                            placeholder="Digite seu telefone"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="cpf">CPF</label>
                                        <input
                                            type="text"
                                            id="cpf"
                                            value={cpf}
                                            onChange={(e) => setCpf(e.target.value)}
                                            placeholder="Digite seu CPF"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            {etapa === 2 && (
                                <div className={styles.input_registro}>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Digite seu e-mail"
                                        required
                                    />
                                </div>
                            )}

                            {etapa === 3 && (
                                <>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="senha">Senha</label>
                                        <input
                                            type="password"
                                            id="senha"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            placeholder="Digite sua senha"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                                        <input
                                            type="password"
                                            id="confirmarSenha"
                                            value={confirmarSenha}
                                            onChange={(e) => setConfirmarSenha(e.target.value)}
                                            placeholder="Confirme sua senha"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            {etapa === 4 && (
                                <>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="modelo">Modelo</label>
                                        <input
                                            type="text"
                                            id="modelo"
                                            value={modelo}
                                            onChange={(e) => setModelo(e.target.value)}
                                            placeholder="Digite o modelo do veículo"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="ano">Ano</label>
                                        <input
                                            type="text"
                                            id="ano"
                                            value={ano}
                                            onChange={(e) => setAno(e.target.value)}
                                            placeholder="Digite o ano do veículo"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="cor">Cor</label>
                                        <input
                                            type="text"
                                            id="cor"
                                            value={cor}
                                            onChange={(e) => setCor(e.target.value)}
                                            placeholder="Digite a cor do veículo"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="placa">Placa</label>
                                        <input
                                            type="text"
                                            id="placa"
                                            value={placa}
                                            onChange={(e) => setPlaca(e.target.value)}
                                            placeholder="Digite a placa do veículo"
                                            required
                                        />
                                    </div>
                                    <div className={styles.input_registro}>
                                        <label htmlFor="marca">Marca</label>
                                        <input
                                            type="text"
                                            id="marca"
                                            value={marca}
                                            onChange={(e) => setMarca(e.target.value)}
                                            placeholder="Digite a marca do veículo"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            {mensagemErro && <p className={styles.mensagemErro}>{mensagemErro}</p>}

                            <div className={styles.button_container}>
                                {etapa > 1 && (
                                    <button type="button" onClick={prevStep} className={styles.Botão__registro}>Voltar</button>
                                )}
                                <button type="submit" className={styles.Botão__registro}>
                                    {etapa < 4 ? 'Avançar' : 'Registrar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormRegistro;
