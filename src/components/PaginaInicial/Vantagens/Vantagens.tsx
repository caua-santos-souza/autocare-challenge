import React from 'react';
import CardVantagem from './CardVantagem/CardVantagem'; 
import './Vantagens.css';

import carroImg from './assets/carro.svg';
import caminhoImg from './assets/caminho.svg';
import relogioImg from './assets/relogio.svg';
import calendarioImg from './assets/calendario.svg';
import tintaImg from './assets/tinta.svg';

const Vantagens: React.FC = () => {
    const vantagens = [
        { img: carroImg, titulo: 'Diagnóstico Preciso com IA', descricao: 'Identifica problemas e causas com precisão usando inteligência artificial avançada.', largura: '158px', altura: '122px' },
        { img: caminhoImg, titulo: 'Encaminhamento Direto para Oficinas Parceiras', descricao: 'Conecta automaticamente o cliente a oficinas confiáveis para facilitar a manutenção.', largura: '164px', altura: '187px' },
        { img: tintaImg, titulo: 'Interface Personalizável e Adaptável', descricao: 'Oferece uma experiência de usuário personalizada com opções de customização e sugestões baseadas no perfil do veículo.', largura: '140px', altura: '140px' },
        { img: calendarioImg, titulo: 'Economia de Tempo e Conveniência', descricao: 'Proporciona uma solução rápida e eficiente para problemas automotivos, evitando a necessidade de pesquisa adicional.', largura: '120px', altura: '120px' },
        { img: relogioImg, titulo: 'Acompanhamento de Manutenção e Lembretes', descricao: 'Permite o acompanhamento do histórico de manutenção e envia lembretes para serviços regulares.', largura: '120px', altura: '120px' },
    ];

    return (
        <div className="vantagens" id='vantagens'>
            <h1 className="vantagens-titulo">Vantagens e&nbsp;<span>benefícios</span></h1>
            
            <div className="vantagens-cards">
                {vantagens.map((vantagem, index) => (
                    <CardVantagem 
                        key={index} 
                        img={vantagem.img} 
                        titulo={vantagem.titulo} 
                        descricao={vantagem.descricao} 
                        largura={vantagem.largura}
                        altura={vantagem.altura} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Vantagens;
