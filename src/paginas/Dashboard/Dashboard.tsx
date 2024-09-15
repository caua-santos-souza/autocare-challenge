import React from 'react';
import ResumoVeiculo from '../../components/ResumoVeiculo/ResumoVeiculo';
import HistoricoManutencao from '../../components/HistoricoManutencao/HistoricoManutencao';
import Agendamentos from '../../components/Agendamentos/Agendamentos';
import './Dashboard.css';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NotificacoesAlertas from '../../components/NotificacoesAlertas/NotificacoesAlertas';

const Dashboard: React.FC = () => {
    return (
        <div>
            <HeaderDashboard />
            <h1 className='Titulo__dashboard'>Painel Principal</h1>
            <div className="dashboard-conteudo">
                <ResumoVeiculo />
                <HistoricoManutencao />
                <Agendamentos />
                <NotificacoesAlertas />
            </div>
        </div>
    );
};

export default Dashboard;
