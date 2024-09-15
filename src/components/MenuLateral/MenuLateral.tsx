import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLateral.css';

const MenuLateral: React.FC = () => {
    return (
        <nav className="MenuLateral__container">
            <ul>
                <li>
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => isActive ? 'ativo' : ''}
                    >
                        Painel Principal
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/resumo-veiculo" 
                        className={({ isActive }) => isActive ? 'ativo' : ''}
                    >
                        Resumo do Veículo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/historico-manutencao" 
                        className={({ isActive }) => isActive ? 'ativo' : ''}
                    >
                        Histórico de Manutenção
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/agendamentos" 
                        className={({ isActive }) => isActive ? 'ativo' : ''}
                    >
                        Agendamentos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/perfil-usuario" 
                        className={({ isActive }) => isActive ? 'ativo' : ''}
                    >
                        Perfil do Usuário
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MenuLateral;
