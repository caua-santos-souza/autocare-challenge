import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import Cadastro from './paginas/Cadastro/Cadastro';
import Login from './paginas/login/login';
import Dashboard from './paginas/Dashboard/Dashboard';
import Redefinir from './paginas/Redefinir/Redefinir';
import SobreNos from './components/SobreNos/SobreNos'
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="redefinir/*" element={<Redefinir />} />
        <Route path="sobreNos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}
\\oi
export default App;
