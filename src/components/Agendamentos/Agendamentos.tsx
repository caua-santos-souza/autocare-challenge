import React from 'react';
import './Agendamentos.css';

const Agendamentos: React.FC = () => {
    return (
        <div className="agendamentos">
            <h2>Próximos Agendamentos</h2>
            <p>Você não tem agendamentos futuros.</p>
            <button className="btn">Agendar Serviço</button>
        </div>
    );
};

export default Agendamentos;
