import React from 'react';


interface CardVantagemProps {
    img: string;
    titulo: string;
    descricao: string;
    largura: string;
    altura: string;
}

const CardVantagem: React.FC<CardVantagemProps> = ({ img, titulo, descricao, largura, altura }) => {
    return (
        <div className="card-vantagem">
            <img 
                src={img} 
                alt={titulo} 
                className="img-vantagem" 
                style={{ width: largura, height: altura }} 
            />
            <div className="texto-vantagem">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default CardVantagem;
