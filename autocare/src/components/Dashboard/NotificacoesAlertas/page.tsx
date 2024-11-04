
import React from 'react';
import styles from "./Notificacoes.module.css";

const NotificacoesAlertas: React.FC = () => {
    const handleViewNotifications = () => {
        console.log('Visualizar Notificações');
    };

    return (
        <div className={styles.CardNotificacoesAlertas}>
            <h2>Notificações e Alertas</h2>
            <p>Verifique as últimas notificações e alertas sobre o seu veículo.</p>
            <button className={styles.btn} onClick={handleViewNotifications}>Ver Notificações</button>
        </div>
    );
};

export default NotificacoesAlertas;
