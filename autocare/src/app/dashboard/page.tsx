'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard/page";
import WatsonChat from "@/components/Dashboard/Watson/page";
import HistoricoManutencao from "@/components/Dashboard/HistoricoManutencao/page";
import ResumoVeiculo from "@/components/Dashboard/ResumoVeiculo/page";
import Agendamentos from "@/components/Dashboard/Agendamentos/page";
import NotificacoesAlertas from "@/components/Dashboard/NotificacoesAlertas/page";
import styles from "./dashboard.module.css";

const Dashboard: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('logado') === 'true';
        if (!isLoggedIn) {
            router.push('/login');  // Redireciona para a página de login se não estiver logado
        } else {
            setLoading(false); // Se estiver logado, não está mais carregando
        }
    }, [router]);

    if (loading) {
        return <div>Carregando...</div>; // Exibir uma mensagem de carregamento ou um componente de loading
    }

    return (
        <div>
            <HeaderDashboard />
            <h1 className={styles.Titulo__dashboard}>Painel Principal</h1>
            <div className={styles.dashboard_conteudo}>
                <ResumoVeiculo />
                <HistoricoManutencao />
                <Agendamentos />
                <NotificacoesAlertas />
                <WatsonChat />
            </div>
        </div>
    );
};

export default Dashboard;
