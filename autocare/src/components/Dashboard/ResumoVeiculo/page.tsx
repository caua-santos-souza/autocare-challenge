import React, { useEffect, useState } from 'react';
import styles from "./resumoVeiculo.module.css";

const ResumoVeiculo: React.FC = () => {
    const [veiculos, setVeiculos] = useState<any[]>([]);
    const [veiculoSelecionado, setVeiculoSelecionado] = useState<any>(null);
    const [editando, setEditando] = useState(false);
    const [adicionando, setAdicionando] = useState(false); // Novo estado para adicionar veículo
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const imagemPadrao = '/assets/imagem_padrao.svg';

    const fetchVeiculos = async () => {
        const response = await fetch(`http://127.0.0.1:5000/veiculos`);

        if (!response.ok) {
            console.error('Erro ao buscar veículos:', response.statusText);
            return;
        }

        const data = await response.json();
        const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');
        const cpf = cliente.cpf;

        if (!cpf) {
            alert("CPF do cliente não encontrado.");
            return;
        }

        const veiculosCliente = data.filter((veiculo: { cpf_cliente: string; }) => veiculo.cpf_cliente === cpf);
        setVeiculos(veiculosCliente);

        if (veiculosCliente.length > 0) {
            selecionarVeiculo(veiculosCliente[0]);
        }
    };

    const atualizarVeiculo = async () => {
        if (!veiculoSelecionado) return;

        const response = await fetch(`http://127.0.0.1:5000/veiculos/${veiculoSelecionado.placa}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                modelo,
                ano,
                cor,
                marca,
            }),
        });

        if (!response.ok) {
            console.error('Erro ao atualizar veículo:', response.statusText);
            return;
        }

        alert("Veículo atualizado com sucesso!");
        setEditando(false);
        fetchVeiculos();
    };

    const excluirVeiculo = async () => {
        if (!veiculoSelecionado) return;

        const confirmacao = window.confirm("Tem certeza que deseja excluir este veículo?");
        if (confirmacao) {
            const response = await fetch(`http://127.0.0.1:5000/veiculos/${veiculoSelecionado.placa}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                console.error('Erro ao excluir veículo:', response.statusText);
                return;
            }

            alert("Veículo excluído com sucesso!");
            setVeiculoSelecionado(null);
            fetchVeiculos();
        }
    };

    const selecionarVeiculo = (veiculo: any) => {
        setVeiculoSelecionado(veiculo);
        setModelo(veiculo.modelo);
        setAno(veiculo.ano);
        setCor(veiculo.cor);
        setPlaca(veiculo.placa);
        setMarca(veiculo.marca);
    };

    const adicionarVeiculo = async () => {
        const response = await fetch(`http://127.0.0.1:5000/veiculos`, {
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
                cpf_cliente: JSON.parse(localStorage.getItem('cliente') || '{}').cpf, // Adiciona CPF do cliente
            }),
        });

        if (!response.ok) {
            console.error('Erro ao adicionar veículo:', response.statusText);
            return;
        }

        alert("Veículo adicionado com sucesso!");
        setAdicionando(false);
        setModelo('');
        setAno('');
        setCor('');
        setPlaca('');
        setMarca('');
        fetchVeiculos();
    };

    useEffect(() => {
        fetchVeiculos();
    }, []);

    const voltar = () => {
        setEditando(false);
        setAdicionando(false); 
        setVeiculoSelecionado(null);
        fetchVeiculos(); 
    };

    return (
        <div className={styles.resumo_veiculo}>
            <h2>Resumo do Veículo</h2>
            {adicionando ? (
                <div>
                    <h3>Adicionar Veículo</h3>
                    <input className={styles.input} placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    <input className={styles.input} placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />
                    <input className={styles.input} placeholder="Cor" value={cor} onChange={(e) => setCor(e.target.value)} />
                    <input className={styles.input} placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />
                    <input className={styles.input} placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    <button onClick={adicionarVeiculo} className={styles.btn_editar}>Salvar Veículo</button>
                    <button onClick={voltar} className={styles.btn}>Voltar</button>
                </div>
            ) : (
                <>
                    {veiculos.length > 0 ? (
                        <div className={styles.veiculo_info}>
                            <p><strong>Modelo:</strong> {editando ? <input className={styles.input} value={modelo} onChange={(e) => setModelo(e.target.value)} /> : veiculoSelecionado?.modelo}</p>
                            <p><strong>Ano:</strong> {editando ? <input className={styles.input} value={ano} onChange={(e) => setAno(e.target.value)} /> : veiculoSelecionado?.ano}</p>
                            <p><strong>Cor:</strong> {editando ? <input className={styles.input} value={cor} onChange={(e) => setCor(e.target.value)} /> : veiculoSelecionado?.cor}</p>
                            <p><strong>Placa:</strong> {veiculoSelecionado?.placa}</p>
                            <p><strong>Marca:</strong> {editando ? <input className={styles.input} value={marca} onChange={(e) => setMarca(e.target.value)} /> : veiculoSelecionado?.marca}</p>
                            {editando ? (
                                <>
                                    <button onClick={atualizarVeiculo} className={styles.btn_editar}>Salvar</button>
                                    <button onClick={voltar} className={styles.btn}>Voltar</button>
                                    <button onClick={excluirVeiculo} className={styles.btn_excluir}>Excluir Veículo</button>
                                </>
                            ) : (
                                <button onClick={() => setEditando(true)} className={styles.btn}>Editar Veículo</button>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>Nenhum veículo encontrado para o cliente.</p>
                            <button onClick={() => setAdicionando(true)} className={styles.btn}>Adicionar Veículo</button>
                        </div>
                    )}
                </>
            )}
            {veiculoSelecionado && !adicionando && (
                <div className={styles.veiculo_imagem}>
                    <img src={imagemPadrao} alt={`Imagem do ${veiculoSelecionado.modelo}`} />
                </div>
            )}
        </div>
    );
    
};

export default ResumoVeiculo;
