import { Link } from "react-router-dom";
import Mecanico from "./assets/mecanico feliz 1 1.svg"
import "./Destaque.css"

const Destaque = () => {
    return (
        <section className="Destaque">
            <img src={Mecanico} alt="mecanico feliz" className="Destaque__Img"/>
            <div className="Destaque__Texto">
                <h1>Comece Agora com o Autocare</h1>
                <p>Dê o primeiro passo para uma experiência de <br/> manutenção veicular mais inteligente e eficiente <br/> com o Autocare. Conecte-se com um de nossos <br/> parceiros confiáveis e descubra como nosso <br/> sistema de autocuidado pode transformar a forma <br/> como você cuida do seu veículo.</p>
                <Link to="/login" className="Destaque__Login">Faça já sua analise</Link>
            </div>
            
        </section>
    )
}

export default Destaque;