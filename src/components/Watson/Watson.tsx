import React, { useEffect } from 'react';

const WatsonChat: React.FC = () => {
  useEffect(() => {
    // Verifica se o script do Watson já foi adicionado
    if (document.getElementById('watson-script')) return;

    // Define as opções do Watson Assistant
    (window as any).watsonAssistantChatOptions = {
      integrationID: "ac72491c-b430-4b86-8b39-6bbb25826c86",
      region: "au-syd",
      serviceInstanceID: "ba46dfd3-5989-431f-a438-a7031930725a",
      onLoad: async (instance: any) => {
        await instance.render();
      },
    };

    // Cria e adiciona o script do Watson Assistant
    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${(window as any).watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
    script.id = 'watson-script';
    script.async = true;
    document.head.appendChild(script);

    // Função de limpeza para remover o script e o conteúdo do container
    return () => {
      const existingScript = document.getElementById('watson-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const container = document.getElementById('watson-chat-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      id="watson-chat-container"
      style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
    ></div>
  );
};

export default WatsonChat;
