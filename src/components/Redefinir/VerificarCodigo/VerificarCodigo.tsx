import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerificarCodigo.css';
import fundo from '../../FormLogin/assets/img.svg';

const VerificarCodigo: React.FC = () => {
    const [codigo, setCodigo] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodigo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
     
        if (codigo !== '357693') {
            setMensagemErro('Código de verificação inválido.');
            return;
        }

        navigate('/redefinir/redefinir-senha'); 
    };

    return (
        <section className="VerificarCodigo__container">
            <img className="VerificarCodigo__Img" src={fundo} alt='tela azul com efeitos' />
            <div className="VerificarCodigo__conteudo">
                <h1 className="VerificarCodigo__titulo">Insira o Código de Verificação</h1>
                <p>Insira o código de verificação enviado para o seu e-mail. Esse código é necessário para confirmar sua identidade e prosseguir com a redefinição da senha.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-solicitar">
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
                    {mensagemErro && <p className="error-message">{mensagemErro}</p>}
                    <button className='Botao__Verificar' type="submit">Verificar Código</button>
                </form>
            </div>
        </section>
    );
};

export default VerificarCodigo;
