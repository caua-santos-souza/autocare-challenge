import React from 'react';
import styles from "./agendamentos.module.css"

const Agendamentos: React.FC = () => {
    return (
        <div className={styles.agendamentos}>
            <h2>Próximos Agendamentos</h2>
            <p>Você não tem agendamentos futuros.</p>
            <button className={styles.btn}>Agendar Serviço</button>
        </div>
    );
};

export default Agendamentos;
