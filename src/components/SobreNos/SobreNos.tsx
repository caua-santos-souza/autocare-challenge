import React from 'react';
import './SobreNos.css';
import Caua from './assets/integrante1.png'
import Luigi from './assets/integrante2.png'
import Guilherme from './assets/integrante3.png'
import Header from '../Header/Header';

const Participantes: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="Titulo__Particpantes">
                <h1>Participantes</h1>
            </div>
            <section id="sectionParticipantes">
                <div className="integrante">
                    <img src={Caua} alt="Integrante 1" />
                    <h3>Cauã Dos Santos Souza</h3>
                    <p>RM: 559093</p>
                    <p>Email: <a href="mailto:cauadosantosouza@gmail.com">cauadosantosouza@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/cauagsz/?hl=fb-ha" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/cau%C3%A3-dos-santos-souza-2457b9268/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
                <div className="integrante">
                    <img src={Luigi} alt="Integrante 2" />
                    <h3>Luigi Berzaghi Hernandes Sespedes</h3>
                    <p>RM: 555516</p>
                    <p>Email: <a href="mailto:ilbhsg520741778@gmail.com">ilbhsg520741778@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/luigi.berzaghi/?hl=fb-ha" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/luigi-berzaghi/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
                <div className="integrante">
                    <img src={Guilherme} alt="Integrante 3" />
                    <h3>Guilherme Pelissari Feitosa</h3>
                    <p>RM: 558445</p>
                    <p>Email: <a href="mailto:guipelissari2000@gmail.com">guipelissari2000@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/guipelissari/" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/guilherme-pelissari-307472312/overlay/about-this-profile/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Participantes;
