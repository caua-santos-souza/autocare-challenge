import React from 'react';
import styles from '../Vantagens.module.css';


interface CardVantagemProps {
    img: string;
    titulo: string;
    descricao: string;
    largura: string;
    altura: string;
}

const CardVantagem: React.FC<CardVantagemProps> = ({ img, titulo, descricao, largura, altura }) => {
    return (
        <div className={styles.card_vantagem}>
            <img 
                src={img} 
                alt={titulo} 
                className={styles.img_vantagem} 
                style={{ width: largura, height: altura }} 
            />
            <div className={styles.texto_vantagem}>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default CardVantagem;
