import React, { useState } from 'react';
import '../Faq.css'; 

interface ItemFAQProps {
    pergunta: string;
    resposta: string;
}

const ItemFAQ: React.FC<ItemFAQProps> = ({ pergunta, resposta }) => {
    const [estaAberto, setEstaAberto] = useState<boolean>(false);

    const alternarResposta = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault(); 
        setEstaAberto(!estaAberto);
    };

    return (
        <div className="item-faq">
            <div className="pergunta-faq" onClick={alternarResposta}>
                <h3>{pergunta}</h3>
                <span className={`seta-faq ${estaAberto ? 'aberto' : ''}`} tabIndex={-1}></span>
            </div>
            <div className={`resposta-faq ${estaAberto ? 'aberto' : ''}`}>
                <p>{resposta}</p>
            </div>
        </div>
    );
};

export default ItemFAQ;
