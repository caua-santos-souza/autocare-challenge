import React from 'react';
import './ResumoVeiculo.css';
import veiculoImg from './assets/fiesta.svg'; 

const ResumoVeiculo: React.FC = () => {
    return (
        <div className="resumo-veiculo">
            <div className="veiculo-info">
                <h2>Resumo do Veículo</h2>
                <p><strong>Modelo:</strong> Ford Fiesta</p>
                <p><strong>Ano:</strong> 2018</p>
                <p><strong>Status:</strong> Em dia</p>
                <button className="btn">Editar Veículo</button>
            </div>
            <div className="veiculo-imagem">
                <img src={veiculoImg} alt="Imagem do veículo" />
            </div>
        </div>
    );
};

export default ResumoVeiculo;
