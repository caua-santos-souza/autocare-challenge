import { useState } from 'react';
import fundo from '../FormLogin/assets/img.svg';
import './FormRegistro.css';
import { Link, useNavigate } from 'react-router-dom';

const FormRegistro = () => {
    const [etapa, setEtapa] = useState(1); // Controle de etapas
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };

    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelefone(e.target.value);
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value);
    };

    // Função para lidar com a navegação entre etapas
    const nextStep = (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica por etapa
        if (etapa === 1 && (!nome || !telefone || !cpf)) {
            setMensagemErro('Por favor, preencha todos os campos corretamente.');
            return;
        }

        if (etapa === 2 && (!email.includes('@') || !email.includes('.'))) {
            setMensagemErro('Digite um e-mail válido.');
            return;
        }

        if (etapa === 3 && (senha.trim() === '' || senha !== confirmarSenha)) {
            setMensagemErro('Senhas não coincidem.');
            return;
        }

        setMensagemErro(''); // Limpa a mensagem de erro
        if (etapa < 3) {
            setEtapa(etapa + 1); // Avança para a próxima etapa
        } else {
            navigate('/cadastro-veiculo'); // Redireciona para o cadastro de veículo após a última etapa
        }
    };

    return (
        <section className="Registro">
            <div className="Registro__container">
                <img className='Registro__Img' src={fundo} alt='tela azul com efeitos' />
                <div className='Registro__conteudo'>
                    <h1 className="Registro__titulo">Crie sua conta</h1>
                    <p>Registre-se para acessar a plataforma Autocare e cuidar do seu veículo de forma prática e eficiente.</p>

                    <form onSubmit={nextStep}>
                        {etapa === 1 && (
                            <>
                                <div className="input-registro">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        value={nome}
                                        onChange={handleNomeChange}
                                        placeholder="Digite seu nome completo"
                                        required
                                    />
                                </div>
                                <div className="input-registro">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        value={telefone}
                                        onChange={handleTelefoneChange}
                                        placeholder="Digite seu telefone"
                                        required
                                    />
                                </div>
                                <div className="input-registro">
                                    <label htmlFor="cpf">CPF</label>
                                    <input
                                        type="text"
                                        id="cpf"
                                        value={cpf}
                                        onChange={handleCpfChange}
                                        placeholder="Digite seu CPF"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {etapa === 2 && (
                            <>
                                <div className="input-registro">
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
                            </>
                        )}

                        {etapa === 3 && (
                            <>
                                <div className="input-registro">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        value={senha}
                                        onChange={handleSenhaChange}
                                        placeholder="Digite sua senha"
                                        required
                                    />
                                </div>
                                <div className="input-registro">
                                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                                    <input
                                        type="password"
                                        id="confirmarSenha"
                                        value={confirmarSenha}
                                        onChange={handleConfirmarSenhaChange}
                                        placeholder="Confirme sua senha"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {mensagemErro && <p className="error-message">{mensagemErro}</p>}

                        <button type="submit">{etapa < 3 ? 'Continuar' : 'Registrar'}</button>
                        <p className='Registro__container__login'>
                            Já tem uma conta? <Link to='/login' className='input__ancora'>Faça login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormRegistro;
