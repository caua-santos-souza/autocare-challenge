import React from 'react';
import ItemFAQ from './ItemFaq/ItemFaq'; 
import './Faq.css'; 

const FAQ: React.FC = () => {
    return (

        <div className="faq" id='faq'>
            <h1 className="faq__titulo">Podemos te ajudar ? Tire suas dúvidas aqui
            </h1>
            <ItemFAQ 
                pergunta="O que é o Autocare?" 
                resposta="O Autocare é um sistema inteligente de autocuidado para veículos. Ele ajuda você a diagnosticar problemas no seu carro e oferece recomendações sobre como resolvê-los, conectando-o com oficinas parceiras quando necessário."
            />
            <ItemFAQ 
                pergunta="Como funciona o Autocare?" 
                resposta="O Autocare permite que você informe sobre problemas ou sintomas do seu veículo. O sistema usa inteligência artificial para analisar as informações e fornecer um diagnóstico preciso, além de sugerir soluções e oficinas onde você pode realizar os reparos."
            />
            <ItemFAQ 
                pergunta="Como encontrar um parceiro Autocare ?" 
                resposta="Para encontrar um parceiro Autocare, acesse a seção de Parceiros no nosso site ou aplicativo. Você pode buscar oficinas próximas a você usando seu CEP ou localização atual. As oficinas parceiras são selecionadas com base em sua reputação e especialização."
            />
            <ItemFAQ 
                pergunta="Como começar a usar o Autocare ?" 
                resposta="Para iniciar o uso do Autocare, primeiro, crie uma conta acessando nosso site ou aplicativo e realizando o cadastro. Em seguida, informe os dados do seu veículo adicionando as informações básicas sobre o seu carro. Descreva os problemas ou sintomas que você está enfrentando com o veículo para que o sistema possa analisá-los. Após enviar essas informações, o Autocare fornecerá diagnósticos e sugestões para a manutenção do seu veículo, ajudando você a resolver os problemas de forma eficaz."
            />
            <ItemFAQ 
                pergunta="Qual é o custo do Autocare ?" 
                resposta="O uso básico do Autocare é gratuito. No entanto, algumas funcionalidades avançadas e serviços de parceiros podem ter custos associados. Consulte nossa página de preços ou entre em contato com o suporte para mais detalhes sobre os planos disponíveis."
            />
            <ItemFAQ 
                pergunta="Como o Autocare se integra ao meu veículo ?" 
                resposta="O Autocare integra-se ao seu veículo principalmente através das informações que você fornece manualmente sobre problemas ou alertas que o carro está apresentando. Em alguns casos, podemos usar aplicativos ou dispositivos adicionais para obter dados mais detalhados do veículo. Estamos trabalhando para expandir as formas de integração e oferecer a melhor experiência possível."
            />
            <ItemFAQ 
                pergunta="Como atualizo minhas informações ?" 
                resposta="Para atualizar suas informações, faça login na sua conta no nosso site ou aplicativo e vá até a seção de perfil ou configurações. A partir daí, você pode atualizar os detalhes do seu veículo, informações de contato e outras configurações conforme necessário."
            />
        </div>
    );
};

export default FAQ;
