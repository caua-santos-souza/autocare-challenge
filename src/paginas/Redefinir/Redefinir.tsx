import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import SolicitarCodigo from '../../components/Redefinir/SolicitarCodigo/SolicitarCodigo';
import VerificarCodigo from '../../components/Redefinir/VerificarCodigo/VerificarCodigo';
import RedefinirSenha from '../../components/Redefinir/RedefinirSenha/RedefinirSenha';
import Login from '../login/login';
import Header from '../../components/Header/Header';

const Redefinir: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<SolicitarCodigo />} />
                    <Route path="verificar-codigo" element={<VerificarCodigo />} />
                    <Route path="redefinir-senha" element={<RedefinirSenha />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
};

export default Redefinir;
