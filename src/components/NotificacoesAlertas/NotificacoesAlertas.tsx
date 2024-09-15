
import React from 'react';
import './NotificacoesAlertas.css';

const NotificacoesAlertas: React.FC = () => {
    const handleViewNotifications = () => {
        console.log('Visualizar Notificações');
    };

    return (
        <div className="CardNotificacoesAlertas">
            <h2>Notificações e Alertas</h2>
            <p>Verifique as últimas notificações e alertas sobre o seu veículo.</p>
            <button className="btn" onClick={handleViewNotifications}>Ver Notificações</button>
        </div>
    );
};

export default NotificacoesAlertas;
