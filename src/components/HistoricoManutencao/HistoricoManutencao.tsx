import React from 'react';
import './HistoricoManutencao.css';

const HistoricoManutencao: React.FC = () => {
    return (
        <div className="historico-manutencao">
            <h2>Histórico de Manutenção</h2>
            <ul>
                <li>Troca de óleo - 15/05/2023</li>
                <li>Alinhamento e balanceamento - 10/06/2023</li>
                <li>Revisão geral - 20/08/2023</li>
            </ul>
            <button className="btn">Ver mais</button>
        </div>
    );
};

export default HistoricoManutencao;
